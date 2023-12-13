import commentApi from "../../../apis/comment";
import productApi from "../../../apis/product";
import {
  IComment,
  TCommentParams,
  TProductParams,
} from "../../../models/product";

type successRes = (data: any) => void;

export const useWatchService = () => {
  const getListProduct = async (value: {
    success?: successRes;
    params: TProductParams;
  }) => {
    const { success, params } = value;
    try {
      const res = await productApi.getList(params);
      if (res) success && success(res.data);
    } catch (error) {}
  };

  const bestSaler = async (value: { success?: successRes }) => {
    const { success } = value;
    try {
      const res = await productApi.bestSaler();
      if (res) success && success(res.data);
    } catch (error) {}
  };

  const productDetail = async (value: { id: string; success?: successRes }) => {
    const { id, success } = value;
    try {
      const res = await productApi.detail(id);
      if (res) success && success(res);
    } catch (error) {}
  };

  const packsize = async (
    value: { productId: string },
    success?: successRes
  ) => {
    try {
      const res = await productApi.packsize(value);
      if (res) success && success(res);
    } catch (error) {}
  };

  const createComment = async (
    value: { payload: IComment },
    success?: successRes
  ) => {
    try {
      const res = await commentApi.create(value);
      if (res) success && success(res);
    } catch (error) {}
  };

  const listComment = async (payload: TCommentParams, success?: successRes) => {
    try {
      const res = await commentApi.getList(payload);
      if (res) success && success(res);
    } catch (error) {}
  };

  return {
    getListProduct,
    bestSaler,
    productDetail,
    packsize,
    createComment,
    listComment,
  };
};
