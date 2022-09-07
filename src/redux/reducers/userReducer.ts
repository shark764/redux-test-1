import { CHANGE_AGE, CHANGE_USERNAME } from '../actionTypes/user';

export interface UserState {
  name: string;
  age: number;
}
interface ActionReducer {
  type: 'CHANGE_USERNAME' | 'CHANGE_AGE';
  payload?: string | number;
}

const initialState: UserState = {
  name: 'User 1',
  age: 23,
};

const userReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: ActionReducer
): UserState => {
  switch (action.type) {
    case CHANGE_USERNAME: {
      return { ...state, name: action.payload as string };
    }
    case CHANGE_AGE: {
      return { ...state, age: action.payload as number };
    }
    default:
      return state;
  }
};

export default userReducer;
