import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPath } from "../../models";
import { PATHNAME } from "../../utils/Pathname";

export type path = {
  path: TPath[];
};

const initialState = {
  path: [
    {
      name: "Trang chủ",
      path: PATHNAME.HOME,
    },
  ],
};

const { actions, reducer: pathReducer } = createSlice({
  name: "path",
  initialState,
  reducers: {
    setPath(state, action: PayloadAction<TPath[]>) {
      state.path = action.payload;
    },
    clear() {
      return { ...initialState };
    },
  },
});
const pathActions = {
  ...actions,
};

export { pathReducer, pathActions };
export default path;
