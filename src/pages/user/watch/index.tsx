import React from "react";
import CFilter from "./patilals/CFilter";
import CBestSaler from "./patilals/CBestSaler";
import ListWatch from "./patilals/ListWatch";
import { noteFace } from "../../../utils/faceData";

type Props = {};

const Watch = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="">
          <CFilter />
        </div>
        <div className="">
          <CBestSaler />
        </div>
        <div className="">
          <ListWatch />
        </div>
        <div className="description-list">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: noteFace.description || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Watch);
