import API from "./API";
import { GITHUB } from "./URLs";

import { IFollowerResponse } from "./types";

const headers = {
  Accept: "application/vnd.github.v3+json",
  Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
};

const Github = {
  fetchUser(user: string) {
    return API<IFollowerResponse>(
      "GET",
      `${GITHUB.BASE}${GITHUB.USERS}/${user}`
    );
  },
  fetchFollowers(user: string) {
    return API<IFollowerResponse[]>(
      "GET",
      `${GITHUB.BASE}${GITHUB.USERS}/${user}/following`,
      headers
    );
  },
};

export default Github;
