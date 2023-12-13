import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

export interface ICSaleOffProps {
  content?: String;
}

const CSaleOff = (props: ICSaleOffProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col gap-1">
        <div>
          <h6 className="uppercase text-green-600 text-lg font-bold tracking-wide ">
            {t("khuyến mại")}
          </h6>
        </div>
        <div className="flex flex-col gap-1">
          <span className="shadow-sm rounded p-2 bg-orange-400 text-white inline-block mb-1 w-10">
            KM
          </span>
          <p className="text-gray-400">
            {t("Tặng dây đẹp thay thế (Số lượng có hạn)")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CSaleOff);
