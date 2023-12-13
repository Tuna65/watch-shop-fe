import React from "react";
import "./index.scss";

type Props = {};

const NaPoint = (props: Props) => {
  return (
    <div className="p-2">
      <div className="flex justify-center   ">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 items-center">
              <p className="uppercase font-bold ">bộ giáo dục và đào tạo</p>
              <p className="uppercase font-bold ">
                trường đại học sư phạm hà nội
              </p>
              <p className="font-bold">-----------o0o-----------</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="uppercase font-bold ">
                cộng hòa xã hội chủ nghĩa việt nam
              </p>
              <p className="font-bold">Độc lập - Tự do - Hạnh phúc</p>
              <p className="font-bold">-----------o0o-----------</p>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <h3 className="uppercase text-2xl font-bold">
              bảng điểm học kỳ 2 năm học 2022-2023
            </h3>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Họ và tên</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">Trần Ngọc Anh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Ngày sinh</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">22/07/2004</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Nơi sinh</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">Tỉnh Thanh Hóa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Lớp</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">CLC</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Khóa học</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">72 (2022-2026)</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Mã số SV</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">725603005</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Hệ</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">Hệ đại học</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Khoa</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">Địa lí</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Ngành học</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">
                  Sư phạm Địa lý - Chất lượng cao
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <p className="w-40 font-semibold">Chuyên ngành</p>
                  <p className="font-semibold">:</p>
                </div>
                <span className="font-semibold">
                  Sư phạm Địa lý - Chất lượng cao
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <table className="w-full table">
              <thead>
                <tr>
                  <th style={{ width: "20px" }} className="text-center p-2">
                    TT
                  </th>
                  <th style={{ width: "220px" }} className="text-center p-2">
                    Tên học phần
                  </th>
                  <th style={{ width: "25px" }} className="text-center p-2">
                    Số TC
                  </th>
                  <th style={{ width: "30px" }} className="text-center p-2">
                    Điểm
                  </th>
                  <th style={{ width: "20px" }} className="text-center p-2">
                    Điểm chữ
                  </th>
                  <th style={{ width: "20px" }} className="text-center p-2">
                    TT
                  </th>
                  <th style={{ width: "220px" }} className="text-center p-2">
                    Tên học phần
                  </th>
                  <th style={{ width: "25px" }} className="text-center p-2">
                    Số TC
                  </th>
                  <th style={{ width: "30px" }} className="text-center p-2">
                    Điểm
                  </th>
                  <th style={{ width: "20px" }} className="text-center p-2">
                    Điểm chữ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    1
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    Bản đồ học
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    8.8
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    A
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    Giáo dục thể chất
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    1
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    6.7
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    C+
                  </td>
                </tr>
                <tr>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    3
                  </td>
                  <td className="text-left px-2 ">
                    HP1: Đường lối QP và AN của DCSVN
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    3
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    7.2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    B
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    4
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    HP2: Công tác QP và AN
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    7.2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    B
                  </td>
                </tr>
                <tr>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    5
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    HP3: Quân sự chung
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    1
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    8.1
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    B+
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    6
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    <p className="text-left" style={{ height: "30px" }}>
                      HP4: Kỹ thuật chiến đấu bộ binh và chiến thuật
                    </p>
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    8.5
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    A
                  </td>
                </tr>
                <tr>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    7
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    Kinh tế chính trị Mác - Lênin
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    6.4
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    C+
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    8
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    Nhân học đại cương
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    6.9
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    C+
                  </td>
                </tr>
                <tr>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    9
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    Nhập môn KHXH và nhân văn
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    8.1
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    B+
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    10
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    Thống kê xã hội học
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    6.4
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    C+
                  </td>
                </tr>
                <tr>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    11
                  </td>
                  <td style={{ height: "30px" }} className="text-left px-2">
                    Xã hội học đại cương
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    2
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    7.3
                  </td>
                  <td style={{ height: "30px" }} className="text-center px-2">
                    B
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-3 mr-20">
            <div className="flex flex-col gap-2">
              <p>TBCHT (thang điểm 10): 7.32</p>
              <p>Số tín chỉ tích lũy: 30</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>TBCHT (thang điểm 4): 3.0</p>
              <p></p>
            </div>
            <div className="flex flex-col gap-2">
              <p>TBC tích lũy: 3.0</p>
              <p>Điểm rèn luyện: 86</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Xếp loại: Khá</p>
              <p>Xếp loại: Tốt</p>
            </div>
          </div>
          <div className="flex justify-end mt-8 mr-16">
            <div className="mr-20 italic">Hà nội, ngày 7 tháng 12 năm 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaPoint;
