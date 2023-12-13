import { CheckCircleTwoTone } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const CEndow = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="mt-3">
      <div className="flex flex-col gap-2 py-3 px-2 bg-white rounded-md">
        <h6 className="font-bold uppercase text-base">
          {t("ưu đãi thanh toán")}
        </h6>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <p className="text-gray-600 hover:text-red-500">
              {t("ZaloPay - Ưu đãi tới 300.000đ khi thanh toán qua ZaloPay")}.
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <p className="text-gray-600 hover:text-red-500">
              {t("VNPAY - Giảm thêm tới 200.000đ khi thanh toán qua VNPAY")}.
            </p>
          </li>
          <li className="flex gap-2 items-center">
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <p className="text-gray-600 hover:text-red-500">
              {t(
                "Home PayLater - Trả góp qua Home PayLater giảm tới 1.000.000đ"
              )}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(CEndow);
