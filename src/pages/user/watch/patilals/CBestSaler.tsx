import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../../../../component/ProductCard";
import { useWatchService } from "../useWatchService";
import { IProduct } from "../../../../models/product";

export interface iCBestSalerProps {}

const CBestSaler = (props: iCBestSalerProps) => {
  const { t } = useTranslation();
  const { bestSaler } = useWatchService();
  //State
  const [products, setProducts] = useState<IProduct[]>([]);

  //Handler
  const getValue = useCallback((products: IProduct[]) => {
    setProducts(products);
  }, []);

  //Effect
  React.useEffect(() => {
    bestSaler({ success: getValue });
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="">
          <h6 className="p-4 bg-gray-300 rounded-sm inline-block font-semibold uppercase">
            {t("Top sản phẩm bán chạy")}
          </h6>
        </div>

        <div className="flex items-center gap-3 mt-2">
          {products.map((p, idx) => (
            <ProductCard isSaler data={p} key={`saler-${idx}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CBestSaler);
