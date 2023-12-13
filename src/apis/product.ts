import Api from "./restclient";

const basePath = `/product` as const;
import { TProductParams } from "./../models/product";

const productApi = {
  create() {
    return Api.post(`${basePath}`);
  },
  update() {
    return Api.put(`${basePath}`);
  },
  getList(params?: TProductParams) {
    return Api.get(`${basePath}`, { params });
  },
  detail(id: string) {
    return Api.get(`${basePath}/${id}`);
  },
  bestSaler() {
    return Api.get(`${basePath}/best-saler`, { params: { page: 1, size: 5 } });
  },
  packsize(params: { productId: string }) {
    return Api.get(`${basePath}/pack-size`, { params });
  },
};
export default productApi;
