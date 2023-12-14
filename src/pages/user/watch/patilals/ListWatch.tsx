import { Button } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../../../../component/ProductCard";
import { useSearchQuery } from "../../../../hooks/useSearchQuery";
import { IProduct } from "../../../../models/product";
import { useWatchService } from "../useWatchService";
import { TPagination } from "../../../../models";

export interface IListWatchProps {}

const ListWatch = (props: IListWatchProps) => {
  const { t } = useTranslation();
  const { params, onParams } = useSearchQuery();
  const { getListProduct } = useWatchService();

  //State
  const [products, setProducts] = useState<IProduct[]>([]);
  const [metaData, setMetaData] = useState<TPagination>();

  //Handler
  const getValue = useCallback(
    (products: {
      data: IProduct[];
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }) => {
      const page = {
        page: products?.pageNumber,
        size: products.pageSize,
        totalPages: products.totalPages,
      };
      setMetaData(page);
      (params.page ?? 0) == 0
        ? setProducts(products.data)
        : setProducts((prev) => [...prev, ...products.data]);
    },
    [params]
  );

  const pageParams = useMemo(() => {
    return params.page ? +params.page + 1 : 0;
  }, [params.page]);

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
              {products?.map((p, idx) => (
                <ProductCard key={`product-${idx}`} data={p} />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-3">
            {products?.length > 0 &&
              (metaData?.totalPages ?? 0) > pageParams && (
                <Button
                  size="middle"
                  onClick={() =>
                    onParams({
                      ...params,
                      page: pageParams,
                    })
                  }
                >
                  {t("Xem thêm sản phẩm")}
                </Button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListWatch);
