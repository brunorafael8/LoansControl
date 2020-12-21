import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { UserService } from "../services";

export interface UserData {
  installments: Array<{
    value: number;
    formatedValue: string;
    payd: boolean;
    dueDate: string;
  }>;
  UserId: number;
  amountTaken: number;
  amountPayd: number;
  monthlyInterest: number;
  totalAmountInTaxes: number;
}

export interface UserProviderState {
  userData: UserData;
}

const defaultUserData: UserData = {
  installments: [
    {
      value: 0,
      formatedValue: "",
      payd: false,
      dueDate: "",
    },
  ],
  UserId: 0,
  amountTaken: 0,
  amountPayd: 0,
  monthlyInterest: 0,
  totalAmountInTaxes: 0,
};

export const UserContext = React.createContext<UserProviderState>({
  userData: defaultUserData,
});

type UserProviderProps = {
  children: React.ReactNode;
};

function getFromCache(): UserData | undefined {
  if (typeof localStorage === "undefined") return;

  try {
    const _cache = localStorage.getItem("user");
    if (!_cache) return;

    const cache = JSON.parse(_cache) as UserData;
    if (!cache) return;

    return cache;
  } catch (error) {
    console.error(error);
  }
}

function saveOnCache(user: UserData | undefined) {
  if (typeof localStorage === "undefined") return;

  try {
    if (!user) {
      localStorage.setItem("user", "{}");
      return false;
    }

    localStorage.setItem("user", JSON.stringify(user));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  useLayoutEffect(() => {
    const cache = getFromCache();
    if (cache) return setUserData(cache);

    getUser();
  }, []);

  useEffect(() => {
    saveOnCache(userData);
  }, [JSON.stringify(userData)]);

  const getUser = useCallback(() => {
    UserService.fetchUser()
      .then((response) => {
        const { data } = response;
        return setUserData(data);
      })
      .catch((err) => {
        console.error(err);
        setUserData(defaultUserData);
      });
  }, []);

  const value: UserProviderState = useMemo(
    () => ({
      userData,
    }),
    [userData]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUser() {
  return useContext(UserContext);
}
