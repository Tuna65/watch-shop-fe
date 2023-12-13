import Api from "./restclient";

const basePath = `/comment` as const;
import { IComment, TCommentParams } from "./../models/product";

const commentApi = {
  create(body: { payload: IComment }) {
    return Api.post(`${basePath}`, body.payload);
  },
  update() {
    return Api.put(`${basePath}`);
  },
  getList(params?: TCommentParams) {
    return Api.get(`${basePath}`, { params });
  },
  detail(id: string) {
    return Api.get(`${basePath}/${id}`);
  },
};
export default commentApi;
