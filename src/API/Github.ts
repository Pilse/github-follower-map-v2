import API from "./API";
import { GITHUB } from "./URLs";

const headers = {
  Accept: "application/vnd.github.v3+json",
  Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
};

const Github = {
  fetchFollowers(user: string) {
    return API(
      "GET",
      `${GITHUB.BASE}${GITHUB.USERS}/${user}/followers`,
      headers
    );
  },
};

export default Github;
