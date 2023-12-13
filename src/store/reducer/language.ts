import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type language = {
  type: "vi" | "en";
};

const initialState = {
  type: "vi",
};

const { actions, reducer: languageReducer } = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<"vi" | "en">) {
      state.type = action.payload;
    },
    clear() {
      return { ...initialState };
    },
  },
});
const languageActions = {
  ...actions,
};

export { languageReducer, languageActions };
export default language;
