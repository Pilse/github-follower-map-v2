import { useState, useEffect } from "react";

import { IUserResponse } from "../API/types";
import Github from "../API/Github";

function useUser() {
  const [user, setUser] = useState<string>("");
  const [userData, setUserData] = useState<IUserResponse>();

  const resetUser = () => setUser(() => "");

  const resetUserData = () => setUserData(() => undefined);

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
  }, [user]);

  return { userData, setUser, resetUser };
}

export default useUser;
