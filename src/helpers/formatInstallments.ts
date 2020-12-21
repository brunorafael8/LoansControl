import { UserData } from "./../context/UserContext";

export const formatInstallments = (data: UserData["installments"]) => {
  const newArray = data.map(
    (i: {
      value: number;
      formatedValue: string;
      payd: boolean;
      dueDate: string;
    }) => {
      return {
        formatedValue: i.formatedValue,
        payd: i.payd,
        dueDate: i.dueDate,
      };
    }
  );

  return newArray;
};
