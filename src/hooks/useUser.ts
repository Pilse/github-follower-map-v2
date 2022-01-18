import { useState, useEffect } from "react";

import { IUserResponse } from "../API/types";
import Github from "../API/Github";

function useUser() {
  const [user, setUser] = useState<string>("");
  const [userData, setUserData] = useState<IUserResponse>();

  useEffect(() => {
    if (user) {
      const fetchUser = async (_user: string) => {
        const data = await Github.fetchUser(_user);

        setUserData(data);
      };

      fetchUser(user);
    } else {
      setUserData(() => undefined);
    }
  }, [user]);

  const resetState = () => {
    setUser(() => "");
    setUserData(() => undefined);
  };

  return { userData, setUser, resetState };
}

export default useUser;
