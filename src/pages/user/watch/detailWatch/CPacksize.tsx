import React, { memo, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Radio } from "antd";
import { useWatchService } from "../useWatchService";
import { useParams } from "react-router-dom";
import { IPacksize } from "../../../../models/product";
import { formatCurrency } from "../../../../utils/common";
import { useSearchQuery } from "../../../../hooks/useSearchQuery";

export interface ICPacksizeProps {}

const CPacksize = (props: ICPacksizeProps) => {
  const { productId } = useParams();
  const { params, onParams } = useSearchQuery();
  const { t } = useTranslation();
  const { packsize } = useWatchService();

  // State
  const [packsizes, setPacksizes] = useState<IPacksize[]>();

  // Effect
  React.useEffect(() => {
    packsize({ productId: productId ?? "" }, (value: IPacksize[]) =>
      setPacksizes(value)
    );
  }, []);

  useEffect(() => {
    onParams({
      ...params,
      packsize: packsizes ? packsizes[0]?.price : "default",
    });
  }, [packsizes]);

  // Memo
  const checkedPacksize = useMemo(() => {
    return packsizes?.find(
      (p) => p.price.toString() == params.packsize?.toString()
    );
  }, [params.packsize, packsizes]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <p>{t("Lựa chọn phiên bản")}</p>
        <div className="">
          <Radio.Group
            name="radiogroup"
            defaultValue={1}
            value={checkedPacksize?.price}
          >
            <div className="flex items-center gap-3">
              {packsizes?.map((p, idx) => (
                <div
                  key={`packsize-${idx}`}
                  className="p-3 border-solid border-2 border-green-900 bg-white rounded-md w-32 text-center flex flex-col gap-1"
                >
                  <div className="flex gap-2 items-center">
                    <Radio
                      value={p.price}
                      onChange={(e) => {
                        onParams({
                          ...params,
                          packsize: e.target.value,
                        });
                      }}
                    >
                      <p>{t(`${p.name}`)}</p>
                    </Radio>
                  </div>
                  <span className="text-red-600 font-semibold">
                    {formatCurrency(p.price ?? 0)}
                  </span>
                </div>
              ))}
            </div>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default memo(CPacksize);
