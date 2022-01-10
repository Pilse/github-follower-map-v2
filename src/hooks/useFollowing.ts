import { useState, useEffect } from "react";

import Github from "../API/Github";

import { IuseFollowinNode, IuseFollowinLink } from "./types";

function useFollowing(location: string) {
  const [mapObject, setMapObject] = useState<{
    nodes: IuseFollowinNode[];
    links: IuseFollowinLink[];
  }>({ nodes: [], links: [] });
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    const target = new URLSearchParams(location).get("user")!.toLowerCase();

    const isDuplicatedNode = (_user: string, _nodes: IuseFollowinNode[]) =>
      _nodes.some((node) => node.name.toLowerCase() === _user.toLowerCase());

    const initMapObject = async (_user: string) => {
      setloading(() => true);

      const tempNodes: IuseFollowinNode[] = [];
      const tempLinks: IuseFollowinLink[] = [];
      const queue: IuseFollowinNode[] = [];

      const targetInfo = await Github.fetchUser(_user);

      tempNodes.push({
        name: _user,
        avatar: targetInfo?.avatar_url,
        value: Number(process.env.REACT_APP_MAX_VALUE),
      });

      queue.push({
        name: _user,
        avatar: targetInfo?.avatar_url,
        value: Number(process.env.REACT_APP_MAX_VALUE),
      });

      while (queue.length) {
        const currentUser = queue.shift()!;

        const currentUserName = currentUser?.name;
        const currentUserValue = currentUser?.value;

        if (currentUserValue <= 1) continue;

        const response = await Github.fetchFollowers(currentUserName);

        const followers = response?.map((follower) => ({
          name: follower.login,
          avatar: follower.avatar_url,
        }));

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
            value: currentUserValue - 1,
          });
          queue.push({
            name: follower.name.toLowerCase(),
            avatar: follower.avatar,
            value: currentUserValue - 1,
          });
        });
      }

      setMapObject(() => ({ nodes: tempNodes, links: tempLinks }));
      setloading(() => false);
    };

    initMapObject(target);
  }, [location]);

  return { mapObject, loading };
}

export default useFollowing;
