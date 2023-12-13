import { DownOutlined } from "@ant-design/icons";
import { Dropdown as DropdownAntd, Space } from "antd";
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Option } from "../models";
type Props = {
  options?: Option[];
  title?: string;
};

const Dropdown = (props: Props) => {
  const { options, title } = props;
  const { t } = useTranslation();
  const [items, setItems] = useState<any>([{ key: "1", label: <p>Chọn</p> }]);

  useEffect(() => {
    if (options) {
      const listItem = options?.map((option, index) => ({
        key: index.toString(),
        label: option.label,
      }));
      setItems(listItem ?? [{ key: "1", label: <p>Chọn</p> }]);
    }
  }, [options]);
  return (
    <div>
      <DropdownAntd menu={{ items }} placement="bottomCenter">
        <div className="cursor-pointer">
          <Space>
            {title ?? t("Chọn")}
            <DownOutlined />
          </Space>
        </div>
      </DropdownAntd>
    </div>
  );
};

export default memo(Dropdown);
