import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

export interface ICConfigProps {
  productName: string;
  config?: any;
  image: string;
}

const CConfig = (props: ICConfigProps) => {
  const { t } = useTranslation();
  const { productName, image } = props;
  return (
    <div>
      <div className="rounded-lg bg-white px-5 py-8 shadow text-base flex flex-col gap-3">
        <h6 className="font-semibold text-base">
          {t("Thông số kỹ thuật")} {productName}
        </h6>
        <div className="">
          <div
            className="image h-96 overflow-hidden w-full"
            style={{ margin: "10px auto 0 auto" }}
          >
            <img
              src={image}
              alt={productName}
              className="width-full h-full inset-0 align-middle object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="rounded-lg shadow-sm font-semibold">
            {t("Cấu hình chi tiết")}
          </Button>
        </div>
        <div className="">
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <span className="font-semibold">{t("Kích thước màn hình")}:</span>
              <p className="text-gray-700">1.32 inches</p>
            </li>
            <li className="flex gap-2 items-center">
              <span className="font-semibold">{t("Kích thước")}:</span>
              <p className="text-gray-700">41.3 mm × 41.3 mm × 9.8 mm</p>
            </li>
            <li className="flex gap-2 items-center">
              <span className="font-semibold">{t("Trọng lượng")}:</span>
              <p className="text-gray-700">
                Khoảng 37g (không bao gồm dây đeo)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CConfig);
