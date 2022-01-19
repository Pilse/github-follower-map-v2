import { useState, useEffect } from "react";

import Github from "../API/Github";
import { ERROR, ERROR_MESSAGE } from "../utils/constant";

import { IuseFollowingNode, IuseFollowinLink } from "./types";
import { IError } from "../components/types";

function useFollowing(location: string) {
  const [mapObject, setMapObject] = useState<{
    nodes: IuseFollowingNode[];
    links: IuseFollowinLink[];
  }>({ nodes: [], links: [] });

  const [loading, setloading] = useState<boolean>(true);
  const [error, setError] = useState<IError>();

  useEffect(() => {
    if (loading) setError(() => undefined);
  }, [loading]);

  useEffect(() => {
    const target = new URLSearchParams(location).get("user")!.toLowerCase();

    const isDuplicatedNode = (_user: string, _nodes: IuseFollowingNode[]) =>
      _nodes.some((node) => node.name.toLowerCase() === _user.toLowerCase());

    const isLevelLimit = (_level: number, _limit: number) => _level <= _limit;

    const handleUserNotFoundError = (_user: string) => {
      setError(() => ({
        error: ERROR.USER_NOT_FOUND,
        message: ERROR_MESSAGE.USER_NOT_FOUND,
        user: _user,
      }));

      setloading(() => false);
    };

    const initMapObject = async (_user: string) => {
      setloading(() => true);

      const tempNodes: IuseFollowingNode[] = [];
      const tempLinks: IuseFollowinLink[] = [];
      const queue: IuseFollowingNode[] = [];
      const maxValue = Number(process.env.REACT_APP_MAX_VALUE);
      const minValue = Number(process.env.REACT_APP_MIN_VALUE);
      const valueDecay = Number(process.env.REACT_APP_VALUE_DECAY);
      const maxNodes = Number(process.env.REACT_APP_MAX_NODES);

      const { data: targetInfo, status } = await Github.fetchUser(_user);

      if (status === 404) {
        handleUserNotFoundError(_user);
        return;
      }

      tempNodes.push({
        name: _user,
        avatar: targetInfo?.avatar_url,
        value: maxValue,
      });

      queue.push({
        name: _user,
        avatar: targetInfo?.avatar_url,
        value: maxValue,
      });

      while (queue.length && tempNodes.length < maxNodes) {
        const currentUser = queue.shift()!;

        const currentUserName = currentUser?.name;
        const currentUserValue = currentUser?.value;

        if (isLevelLimit(currentUserValue, minValue)) continue;

        const { data: response } = await Github.fetchFollowers(currentUserName);

        const followers = response?.map((follower) => ({
          name: follower.login,
          avatar: follower.avatar_url,
        }));

        if (isLevelLimit(currentUserValue, minValue + valueDecay)) {
          followers.splice(15);
        }

        const newFollowers = followers?.filter(
          (follower) => !isDuplicatedNode(follower.name, tempNodes)
        );

        followers?.forEach((follower) => {
          tempLinks.push({
            source: currentUserName.toLowerCase(),
            target: follower.name.toLowerCase(),
          });
        });

        newFollowers?.forEach((follower) => {
          tempNodes.push({
            name: follower.name.toLowerCase(),
            avatar: follower.avatar,
            value: currentUserValue - valueDecay,
          });
          queue.push({
            name: follower.name.toLowerCase(),
            avatar: follower.avatar,
            value: currentUserValue - valueDecay,
          });
        });
      }

      setMapObject(() => ({ nodes: tempNodes, links: tempLinks }));
      setloading(() => false);
    };

    initMapObject(target);
  }, [location]);

  return { mapObject, loading, error };
}

export default useFollowing;
