import {
  PropertySafetyTwoTone,
  CaretRightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { listAddressFace } from "../../../../utils/faceData";

type Props = {};

const CWarranty = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="p-4 bg-white border-spacing-1 border-solid border-gray-700 flex flex-col gap-4 rounded-md">
        <div className="flex flex-col gap-3">
          <h6 className="uppercase font-semibold text-base text-center">
            {t("thông tin bảo hành")}
          </h6>
          <div className="flex gap-2">
            <PropertySafetyTwoTone twoToneColor="#52c41a" />
            <p className="font-semibold text-sm">{t("Bảo hành 12 tháng")}</p>
          </div>
          <p className="text-base uppercase font-bold">
            {t("chọn màu và xem địa chỉ còn hàng text-center")}
          </p>
        </div>
        <Button>{t("Toàn bộ chi nhánh")}</Button>
        <div className="border-spacing-1 border-solid border-gray-700 p-3 rounded-md h-96 overflow-y-auto">
          {listAddressFace.map((adr, index) => (
            <div className="flex flex-col gap-3" key={`address-${index}`}>
              <div className=" flex gap-2">
                <CaretRightOutlined />
                <p className=" text-base">{adr.address}</p>
              </div>
              <div className=" flex gap-2">
                <PhoneOutlined />
                <p className="font-semibold text-base text-green-500 hover:text-gray-600 cursor-pointer">
                  {adr.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CWarranty);
