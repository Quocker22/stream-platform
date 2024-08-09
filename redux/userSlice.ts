import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserModel } from "@/models/Auth";

interface UserState {
  data?: UserModel;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  data: undefined,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.data = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
