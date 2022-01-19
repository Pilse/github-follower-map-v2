import { useState, useEffect, useCallback } from "react";

import { IUserResponse } from "../API/types";
import Github from "../API/Github";

function useUser() {
  const [user, setUser] = useState<string>("");
  const [userData, setUserData] = useState<IUserResponse>();

  const resetUser = useCallback(() => setUser(() => ""), []);

  const resetUserData = useCallback(() => setUserData(() => undefined), []);

  useEffect(() => {
    const fetchUser = async (_user: string) => {
      const { data } = await Github.fetchUser(_user);

      setUserData(() => data);
    };

    if (user) {
      fetchUser(user);
    } else {
      resetUserData();
    }
  }, [user, resetUserData]);

  return { userData, setUser, resetUser };
}

export default useUser;
