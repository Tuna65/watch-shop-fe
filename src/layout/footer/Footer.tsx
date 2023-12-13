import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="my-5">
      <div className="p-5 rounded-lg bg-green-900">
        <div className="">
          <div className="flex justify-between mb-5">
            <div className="flex flex-col gap-3">
              <h6 className="font-semibold text-xl text-white ">Hỗ Trợ - Dịch Vụ</h6>
              <ul className="flex flex-col gap-2">
                <li className="text-white">
                  Chính sách và hướng dẫn mua hàng trả góp
                </li>
                <li className="text-white">
                  Hướng dẫn mua hàng và chính sách vận chuyển
                </li>
                <li className="text-white">Tra cứu đơn hàng</li>
                <li className="text-white">Chính sách đổi mới và bảo hành</li>
                <li className="text-white">Dịch vụ bảo hành mở rộng</li>
                <li className="text-white">Chính sách bảo mật</li>
                <li className="text-white">Chính sách giải quyết khiếu nại</li>
                <li className="text-white">Quy chế hoạt động</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h6 className="font-semibold text-xl text-white ">Thông Tin Liên Hệ</h6>
              <ul className="flex flex-col gap-2">
                <li className="text-white">Thông tin các trang TMĐT</li>
                <li className="text-white">Dịch vụ sửa chữa Hoàng Hà Care</li>
                <li className="text-white">Khách hàng doanh nghiệp (B2B)</li>
                <li className="text-white">Tra cứu bảo hành</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h6 className="font-semibold text-xl text-white ">
                Hệ thống 127 siêu thị trên toàn quốc
              </h6>
              <ul className="flex flex-col gap-2">
                <li className="text-white">
                  Danh sách 127 siêu thị trên toàn quốc
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-white">
            © 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST:
            0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký
            thay đổi ngày 24/11/2022)
          </p>
          <h6 className="text-center text-white">
            GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021
          </h6>
          <p className="text-center text-white">
            Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Hoàng Mai,
            Thành Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm
            nội dung: <b>Hoàng Ngọc Chiến.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
