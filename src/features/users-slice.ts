import data from '../api/data.json';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  entities: User[];
};

const initialState: UserState = {
  entities: data.users,
};

type DraftUser = RequireOnly<User, 'realName' | 'alterEgo'>;

function createUser(draftUser: DraftUser): User {
  return { id: nanoid(), tasks: [], ...draftUser };
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: function (state, action: PayloadAction<DraftUser>) {
      const user = createUser(action.payload);
      state.entities.push(user);
    },
    removeUser: function (state, action: PayloadAction<User['id']>) {
      const index = state.entities.findIndex(
        (user) => user.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice;
