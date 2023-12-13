import { Button, Form, Input, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWatchService } from "../useWatchService";
import { IComment } from "../../../../models/product";
import { useParams } from "react-router-dom";
import { validateMessages } from "../../../../utils/product";
import { TPagination } from "../../../../models";
import CCommentCard from "./CCommentCard";
import { useBoolean } from "../../../../hooks/useBoolean";
const { TextArea } = Input;
type Props = {};

const CComment = (props: Props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { productId } = useParams();
  const { createComment } = useWatchService();

  //State
  const [isFetch, { toggle }] = useBoolean();

  //Handler
  const onFinish = (values: { comment: IComment }) => {
    const { comment } = values;
    const payload = { ...comment };
    payload.productId = productId ?? "";
    createComment({ payload }, toggle);
  };

  return (
    <div className="mt-5">
      <div className="rounded-lg shadow-sm px-10 py-7 flex flex-col gap-6 bg-white">
        <h6 className="font-bold text-base">{t("Bình luận về")}</h6>
        <div className="">
          <div className="">
            <Form
              form={form}
              name="control-hooks w-full"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className="flex items-center justify-between gap-3">
                <Form.Item
                  className="flex-1"
                  name={["comment", "userName"]}
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder={`${t("Họ tên")} *`}
                    className="rounded-lg bg-gray-200 text-black outline-none"
                  />
                </Form.Item>
                <Form.Item
                  className="flex-1"
                  name={["comment", "phone"]}
                  rules={[{ type: "number" }]}
                >
                  <Input
                    placeholder={`${t("Điện thoại")}`}
                    className="rounded-lg bg-gray-200 text-black outline-none"
                  />
                </Form.Item>
                <Form.Item
                  className="flex-1"
                  name={["comment", "email"]}
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder={`${t("Email")}`}
                    className="rounded-lg bg-gray-200 text-black outline-none"
                    type="Email"
                  />
                </Form.Item>
              </div>

              <Form.Item
                className="rounded-lg"
                name={["comment", "content"]}
                rules={[{ required: true }]}
              >
                <TextArea
                  placeholder={`${t("Nội dung tối thiểu 15 ký tự")} *`}
                  className="rounded-lg bg-gray-200 text-black outline-none"
                  rows={4}
                />
              </Form.Item>

              <Form.Item>
                <div className="flex justify-between items-center">
                  <p className="">
                    <i>
                      {t(
                        "Để gửi bình luận, bạn cần nhập tối thiểu trường họ tên và nội dung"
                      )}
                    </i>
                  </p>
                  <Button
                    htmlType="submit"
                    className="rounded-3xl uppercase font-bold space-x-1 "
                  >
                    {t("Gửi bình luận")}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
        <CCommentCard isFetch={isFetch} />
      </div>
    </div>
  );
};

export default React.memo(CComment);
