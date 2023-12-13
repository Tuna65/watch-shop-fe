import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSearchQuery } from "../../../../hooks/useSearchQuery";
import { IProduct } from "../../../../models/product";
import { formatCurrency } from "../../../../utils/common";
import { useWatchService } from "../useWatchService";
import CActionBy from "./CActionBy";
import CConfig from "./CConfig";
import CDesCription from "./CDesCription";
import CEndow from "./CEndow";
import CPacksize from "./CPacksize";
import CSaleOff from "./CSaleOff";
import CWarranty from "./CWarranty";
import CComment from "./CComment";

type Props = {};

const DetailWatch = (props: Props) => {
  const { productId } = useParams();
  const { t } = useTranslation();
  const { productDetail } = useWatchService();
  const { params } = useSearchQuery();

  // State
  const [detailData, setDetailData] = useState<IProduct>();

  // Effect
  useEffect(() => {
    productDetail({
      id: productId ?? "",
      success: (value: IProduct) => setDetailData(value),
    });
  }, []);

  //Memo
  const price = useMemo(() => {
    return (
      Number(params.packsize) -
      Number(params.packsize) * (detailData?.saleOff ?? 0 / 100)
    );
  }, [params.packsize]);

  return (
    <div>
      <div className="">
        <h6 className="mt-4 text-xl font-semibold">{detailData?.name}</h6>
        <div className="">
          <div className=" flex gap-5 mt-5">
            <div className="image">
              <div
                className="image h-96 overflow-hidden w-96"
                style={{ margin: "10px auto 0 auto" }}
              >
                <img
                  src={detailData?.images[0]}
                  alt=""
                  className="width-full h-full inset-0 align-middle object-cover"
                />
              </div>
            </div>
            <div className="image flex-1">
              <div className=" flex flex-col gap-3">
                <div className="flex items-end gap-1">
                  <p className="text-4xl text-red-500 font-bold">
                    {formatCurrency(price)}
                  </p>
                  |<span className="italic">{t("Giá đã bao gồm VAT")}</span>
                </div>
                <div className="flex-1 uppercase p-2 bg-green-900 text-white rounded text-center text-base">
                  {t("Miễn phí vận chuyển toàn quốc")}
                </div>
                <CPacksize />
                <CSaleOff />
              </div>
              <CActionBy />
              <CEndow />
            </div>
            <div className="">
              <div className="">
                {/* Thông tin bảo hành */}
                <CWarranty />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          <div className="flex-1">
            <CDesCription description={detailData?.description ?? ""} />
          </div>
          <div className="w-4/12">
            <CConfig
              productName={detailData?.name ?? ""}
              image={detailData?.images[0] ?? ""}
            />
          </div>
        </div>
        <CComment />
      </div>
    </div>
  );
};

export default React.memo(DetailWatch);
