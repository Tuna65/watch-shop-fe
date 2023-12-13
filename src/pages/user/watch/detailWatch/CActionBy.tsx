import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";
type Props = {};

const CActionBy = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="mt-3">
      <div className="image w-72 w-full">
        <div className="flex gap-3">
          <div className="flex flex-col gap-1 items-center rounded-md bg-red-600 py-2 font-semibold flex-1 cursor-pointer">
            <h6 className="text-white uppercase text-base">{t("Mua ngay")}</h6>
            <p className="text-white text-sm">{t("Giao tận nhà")} (COD)</p>
            <p className="text-white text-sm">
              {t("Hoặc")} {t("Nhận tại cửa hàng")}
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-md bg-orange-500 items-center p-2 justify-center w-52 cursor-pointer">
            <ShoppingCartOutlined
              className="scale-150"
              twoToneColor="#fffff"
            />
            <span className="text-sm text-white">{t("Thêm giỏ hàng")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CActionBy);
