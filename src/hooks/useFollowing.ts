import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Github from "../API/Github";
import { ERROR, ERROR_MESSAGE } from "../utils/constant";

import { IuseFollowingNode, IuseFollowingLink } from "./types";
import { IError } from "../components/types";

function useFollowing(location: string) {
  const [mapObject, setMapObject] = useState<{
    nodes: IuseFollowingNode[];
    links: IuseFollowingLink[];
  }>({ nodes: [], links: [] });

  const [loading, setloading] = useState<boolean>(true);
  const [error, setError] = useState<IError>();

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) setError(() => undefined);
  }, [loading]);

  useEffect(() => {
    const isDuplicatedNode = (_user: string, _nodes: IuseFollowingNode[]) =>
      _nodes.some((node) => node.name === _user);

    const handleUserNotFoundError = (_user: string) => {
      setError(() => ({
        error: ERROR.USER_NOT_FOUND,
        message: ERROR_MESSAGE.USER_NOT_FOUND,
        user: _user,
      }));

      setloading(() => false);
    };

    const handlePageNotFoundError = () => navigate("/error");

    const initMapObject = async (_user: string) => {
      setloading(() => true);

      const tempNodes: IuseFollowingNode[] = [];
      const tempLinks: IuseFollowingLink[] = [];
      const maxValue = Number(process.env.REACT_APP_MAX_VALUE);
      const maxStep = Number(process.env.REACT_APP_MAX_STEP);
      const valueDecay = Number(process.env.REACT_APP_VALUE_DECAY);

      const { data: targetInfo, status } = await Github.fetchUser(_user);

      if (status === 404) {
        handleUserNotFoundError(_user);
        return;
      }

      tempNodes.push({
        name: targetInfo.login.toLowerCase(),
        avatar: targetInfo.avatar_url,
        value: maxValue,
      });

      const fetchFollowers = async (_users: string[], step: number) => {
        const followers: string[] = [];

        const responsesArray = await Promise.all(
          _users.map((user) => Github.fetchFollowers(user))
        );

        const usersArray = responsesArray.map((responses) =>
          responses.data.map((response) => ({
            name: response.login.toLowerCase(),
            avatar: response.avatar_url,
            value: maxValue - valueDecay * step,
          }))
        );

        if (step === maxStep) {
          usersArray.forEach((users, index) => {
            const oldUsers = users.filter((user) =>
              isDuplicatedNode(user.name, tempNodes)
            );

            oldUsers.forEach((user) => {
              tempLinks.push({
                source: _users[index],
                target: user.name,
              });
            });
          });

          return;
        } else {
          if (step === maxStep - 1) usersArray.splice(21);

          usersArray.forEach((users, index) => {
            const newUsers = users.filter(
              (user) => !isDuplicatedNode(user.name, tempNodes)
            );

            newUsers.forEach((user) => {
              followers.push(user.name);

              tempNodes.push({
                name: user.name,
                avatar: user.avatar,
                value: user.value,
              });
            });

            users.forEach((user) => {
              tempLinks.push({
                source: _users[index],
                target: user.name,
              });
            });
          });

          await fetchFollowers(followers, step + 1);
        }
      };

      await fetchFollowers([_user], 1);

      setMapObject(() => ({ nodes: tempNodes, links: tempLinks }));

      setloading(() => false);
    };

    const userParameter = new URLSearchParams(location).get("user");

    if (!userParameter) handlePageNotFoundError();

    const targetUser = userParameter!.toLowerCase();

    initMapObject(targetUser);
  }, [location, navigate]);

  return { mapObject, loading, error };
}

export default useFollowing;
