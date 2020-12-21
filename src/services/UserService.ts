import { UserData } from "./../context/UserContext";
import api from "./api";

export const fetchUser = () => {
  return api.get<UserData>("/5c923b0932000029056bce39");
};
