import { Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useSearchQuery } from "../../hooks/useSearchQuery";

const { Search } = Input;

type Props = {};

const Header = (props: Props) => {
  const { params, onParams } = useSearchQuery();

  const { t } = useTranslation();
  return (
    <div className="header_wrapper">
      <div className="header_inner flex items-center justify-between">
        <div className="">
          <img
            src="https://hoanghamobile.com/Content/web/img/logo-text.png"
            alt=""
          />
        </div>
        <div className="header_search w-6/12 py-5">
          <Search
            placeholder={`${t("Hôm nay bạn cần gì")}?`}
            onSearch={(value) => onParams({ ...params, name: value, page: 0 })}
          />
        </div>
        <div className="flex gap-5 items-center">
          <div className="scale-150 ">
            <ShoppingCartOutlined className="fill-current" />
          </div>
          <p className="text-lg hover:text-green-500 cursor-pointer transition-all">
            {t("Đăng nhập")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
