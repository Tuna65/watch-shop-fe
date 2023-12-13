import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IProductCardProps } from "../models/product";
import { formatCurrency } from "../utils/common";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { pathActions } from "../store/reducer/path";
import { pathSelector } from "../store/selector/pathSelector";

const ProductCard = (props: IProductCardProps) => {
  const paths = useSelector(pathSelector);
  const { isSaler, data } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Memo
  const priceSale = useMemo(() => {
    return data?.price * (data?.saleOff / 100);
  }, [data]);
  return (
    <div
      className="flex-1 cursor-pointer product_card"
      onClick={() => {
        dispatch(
          pathActions.setPath([
            ...paths,
            {
              name: data.name,
              path: `/dong-ho/${data.id}`,
            },
          ])
        );
        navigate(data.id);
      }}
    >
      <div className="rounded-md shadow-md pt-12 pb-3 px-2 border">
        <div className="flex flex-col gap-5 items-center">
          <div
            className="image h-52 overflow-hidden"
            style={{ margin: "10px auto 0 auto" }}
          >
            <img
              src={data?.images[0]}
              alt=""
              className="width-full h-full inset-0 align-middle object-cover"
            />
          </div>
          <h6 className="font-semibold">{data?.name}</h6>
          <div className={`flex ${isSaler && "flex-col items-center"} gap-2`}>
            <span className="text-red-600 font-semibold">
              {formatCurrency(data?.price - priceSale, "đ")}
            </span>
            <span className={`${isSaler && "text-gray-400"} line-through`}>
              {formatCurrency(priceSale, "đ")}
            </span>
          </div>
        </div>
        <div className="voucher px-3 mt-2">
          <span className="shadow-sm rounded p-2 bg-orange-400 text-white inline-block mb-1">
            KM
          </span>
          <label htmlFor=""></label> VNPay - Giảm thêm tới 200.000đ khi...{" "}
          <strong className="uppercase text-orange-500 text-base">
            và 3 km khác
          </strong>
        </div>
      </div>
      <div className="layer_voucher absolute bg-white">
        <div className="flex flex-col gap-2 ">
          <div className="">
            <span className="shadow-sm rounded p-2 bg-orange-400 text-white inline-block mb-1">
              KM
            </span>
            <label className="text-06 text-gray-300" htmlFor=""></label> VNPay -
            Giảm thêm tới 200.000đ khi thanh toán qua VNPay
          </div>
          <div className="">
            <span className="shadow-sm rounded p-2 bg-orange-400 text-white inline-block mb-1">
              KM
            </span>
            <label className="text-06 text-gray-300" htmlFor=""></label> ZALOPay
            - Giảm thêm tới 200.000đ khi thanh toán qua ZALOPay
          </div>
          <div className="">
            <span className="shadow-sm rounded p-2 bg-orange-400 text-white inline-block mb-1">
              KM
            </span>
            <label className="text-06 text-gray-300" htmlFor=""></label> HOME
            PayLater - Giảm thêm tới 200.000đ khi thanh toán qua HOME PayLater
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
