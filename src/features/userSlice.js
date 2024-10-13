import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: "",
    refreshToken: "",
    name: "MINH",
    user: {
      id: "",
      name: "",
      email: "",
      address: {
        street: "",
        city: "",
      },
      birthday: "",
      role: "",
      createdAt: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      const { accessToken, refreshToken, user } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user.id = user._id;
      state.user.name = user.username;
      state.user.email = user.email;
      state.user.address.street = user.address.street;
      state.user.address.city = user.address.city;
      state.user.birthday = user.birthday;
      state.user.role = user.role;
      state.user.createdAt = user.createdAt;
    },
    clearUser: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.user = {
        id: "",
        name: "",
        email: "",
        address: {
          street: "",
          city: "",
        },
        birthday: "",
        role: "",
        createdAt: "",
      };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
