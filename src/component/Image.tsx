import React from "react";

type Props = {
  path: string;
  width: number;
  height: number;
};

const Image = (props: Props) => {
  const { path, width, height } = props;
  return (
    <div>
      <div
        className="image h-52 overflow-hidden rounded-full"
        style={{ margin: "10px auto 0 auto", width, height }}
      >
        <img
          src={path}
          alt=""
          className="width-full h-full inset-0 align-middle object-cover"
        />
      </div>
    </div>
  );
};

export default React.memo(Image);
