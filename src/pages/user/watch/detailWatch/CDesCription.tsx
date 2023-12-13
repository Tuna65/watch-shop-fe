import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useBoolean } from "../../../../hooks/useBoolean";

export interface ICDesCriptionProps {
  description: string;
}

const CDesCription = (props: ICDesCriptionProps) => {
  const { description } = props;
  const { t } = useTranslation();

  //State
  const [showMore, { toggle }] = useBoolean();

  //Effect
  useLayoutEffect(() => {
    const figures = document.querySelectorAll("p img");

    if (figures) {
      figures.forEach((figure) => {
        figure.setAttribute(
          "style",
          `margin: 10px 0;
          width: 100%;
          height: auto;`
        );
      });
    }
  }, [description]);
  return (
    <div className="html rounded-lg bg-white p-5 shadow text-base">
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: description || "" }}
        style={{ height: showMore ? "auto" : "445px", overflow: "hidden" }}
      />
      <p
        className="uppercase text-green-900 text-center pt-5 font-semibold cursor-pointer"
        onClick={toggle}
      >
        {showMore ? t("thu gọn") : t("xem thêm")}
      </p>
    </div>
  );
};

export default React.memo(CDesCription);
