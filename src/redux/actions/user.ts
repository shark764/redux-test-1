import { CHANGE_AGE, CHANGE_USERNAME } from '../actionTypes/user';

export const changeUsersAge = (age: number) => ({
  type: CHANGE_AGE,
  payload: age,
});

export const changeUsersName = (name: string) => ({
  type: CHANGE_USERNAME,
  payload: name,
});
