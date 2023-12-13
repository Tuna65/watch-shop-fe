import React, { useEffect, useState } from "react";
import Image from "../../../../component/Image";
import { TPagination } from "../../../../models";
import { IComment } from "../../../../models/product";
import { useWatchService } from "../useWatchService";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

type Props = {
  isFetch: boolean;
};

const CCommentCard = (props: Props) => {
  const { isFetch } = props;
  const { productId } = useParams();
  const { listComment } = useWatchService();

  //State
  const [comments, setComments] = useState<IComment[]>([]);
  const [pagi, setPagi] = useState<TPagination>({ page: 0, size: 5 });

  useEffect(() => {
    productId &&
      listComment(
        { ...pagi, productId: productId?.toString() ?? "" },
        (value: { data: IComment[] }) => setComments(value.data)
      );
  }, [isFetch]);

  return (
    <div>
      {comments.map((c, idx) => (
        <div className="" key={`comment-${idx}`}>
          <div className="flex">
            <Image
              path="https://hoanghamobile.com/Content/web/img/no-avt.png"
              width={62}
              height={62}
            />
            <div className="flex-1 ">
              <div className="p-5 flex flex-col gap-1">
                <h6 className="font-semibold">{c.userName}</h6>
                <p className="text-sm text-gray-400">
                  {dayjs(c.createdAt).format("DD/MM/YYYY")} lúc{" "}
                  {dayjs(c.createdAt).format("HH:mm")}
                </p>
                <p className="text-gray-800">{c.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CCommentCard);
