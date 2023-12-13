import { RootState } from "../../store/reducer/index";

export const pathSelector = (rootState: RootState) => rootState.path.path;
