import { Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../../../../component/ProductCard";
import { useSearchQuery } from "../../../../hooks/useSearchQuery";
import { IProduct } from "../../../../models/product";
import { useWatchService } from "../useWatchService";

export interface IListWatchProps {}

const ListWatch = (props: IListWatchProps) => {
  const { t } = useTranslation();
  const { params, onParams } = useSearchQuery();
  const { getListProduct } = useWatchService();

  //State
  const [products, setProducts] = useState<IProduct[]>([]);

  //Handler
  const getValue = useCallback((products: IProduct[]) => {
    (params.page ?? 0) == 0
      ? setProducts(products)
      : setProducts((prev) => [...prev, ...products]);
  }, []);

  //Effect
  React.useEffect(() => {
    params?.page &&
      getListProduct({
        success: getValue,
        //@ts-ignore
        params: params,
      });
  }, [params]);

  useEffect(() => {
    if (!params?.page)
      onParams({
        page: 0,
        size: 20,
      });
  }, []);

  return (
    <div className="mt-3">
      <div className="">
        <div className="">
          <h6 className="font-semibold text-xl">
            {t("Đồng hồ chất lượng giá rẻ")}
          </h6>
          <div className="mt-5">
            <div className="grid grid-cols-5 gap-3">
              {products.map((p, idx) => (
                <ProductCard key={`product-${idx}`} data={p} />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <Button
              size="middle"
              onClick={() =>
                onParams({
                  ...params,
                  page: params.page ? +params.page + 1 : 0,
                })
              }
            >
              {t("Xem thêm sản phẩm")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListWatch);
