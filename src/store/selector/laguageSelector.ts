import { RootState } from '../../store/reducer/index';


export const languageSelector = (rootState: RootState) => rootState.language.type;