import {CHANGE_USERS} from "./users.types";


export const changeUserList = ( list ) => {
  return {
    type: CHANGE_USERS,
    payload: list
  }
}