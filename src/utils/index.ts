import { TPagination, TRouterList } from "../models";
import Watch from "../pages/user/watch";
import DetailWatch from "../pages/user/watch/detailWatch/DetailWatch";
import { PATHNAME } from "./Pathname";

export const routerList: TRouterList[] = [
  // {
  //   path: PATHNAME.HOME,
  //   component: Watch,
  // },
  {
    path: PATHNAME.Watch,
    component: Watch,
  },
  {
    path: PATHNAME.WATCH_DETAIL,
    component: DetailWatch,
  },
];

export const defaultPagination: TPagination = {
  page: 0,
  size: 20,
};
