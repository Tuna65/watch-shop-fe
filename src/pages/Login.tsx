import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { languageSelector } from "../store/selector/laguageSelector";
import { languageActions } from "../store/reducer/language";

interface Props {}

const Login = (props: Props) => {
  const {} = props;
  const { t, i18n } = useTranslation();
  const language = useSelector(languageSelector);

  const dispatch = useDispatch();
  const changeLanguage = useCallback(() => {
    const lang = language == "vi" ? "en" : "vi";
    dispatch(languageActions.setLanguage(lang));
    i18n.changeLanguage(lang);
  }, [language]);

  return (
    <div className="flex text-3xl font-bold underline">
      {t("đăng nhập")}
      <div className="" onClick={changeLanguage}>
        toggle
      </div>
    </div>
  );
};

export default Login;
