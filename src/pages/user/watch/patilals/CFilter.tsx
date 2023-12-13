import { useTranslation } from "react-i18next";
import Dropdown from "../../../../component/Dropdown";
type Props = {};

const CFilter = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="shadow rounded-md p-3 border-spacing-1 flex justify-end mt-3">
      <div className="flex items-center gap-3">
        <p className="font-semibold text-green-700">{t("Lọc danh sách")}:</p>
        <div className="flex items-center gap-10">
          <div className="">
            <Dropdown
              title={t("Thương hiệu")}
              options={[{ label: <p>APPLE</p>, value: "APPLE" }]}
            />
          </div>
          <div className="">
            <Dropdown
              title={t("Sắp xếp")}
              options={[
                { label: <p>Cao đến thấp</p>, value: "desc" },
                { label: <p>Thấp đến cao</p>, value: "desc" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFilter;
