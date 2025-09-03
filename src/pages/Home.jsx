import React, { useState } from "react";
import Navbar from "../components/Navbar";

const provinces = [
  "กรุงเทพมหานคร",
  "กระบี่",
  "กาญจนบุรี",
  "กาฬสินธุ์",
  "กำแพงเพชร",
  "ขอนแก่น",
  "จันทบุรี",
  "ฉะเชิงเทรา",
  "ชัยนาท",
  "ชัยภูมิ",
  "ชุมพร",
  "เชียงราย",
  "เชียงใหม่",
  "ตรัง",
  "ตราด",
  "ตาก",
  "นครนายก",
  "นครปฐม",
  "นครพนม",
  "นครราชสีมา",
  "นครศรีธรรมราช",
  "นครสวรรค์",
  "นราธิวาส",
  "น่าน",
  "นนทบุรี",
  "บึงกาฬ",
  "บุรีรัมย์",
  "ประจวบคีรีขันธ์",
  "ปราจีนบุรี",
  "ปัตตานี",
  "พระนครศรีอยุธยา",
  "พะเยา",
  "พังงา",
  "พัทลุง",
  "พิจิตร",
  "พิษณุโลก",
  "เพชรบุรี",
  "เพชรบูรณ์",
  "แพร่",
  "ภูเก็ต",
  "มหาสารคาม",
  "มุกดาหาร",
  "แม่ฮ่องสอน",
  "ยโสธร",
  "ยะลา",
  "ร้อยเอ็ด",
  "ระนอง",
  "ระยอง",
  "ราชบุรี",
  "ลพบุรี",
  "ลำปาง",
  "ลำพูน",
  "เลย",
  "ศรีสะเกษ",
  "สกลนคร",
  "สงขลา",
  "สตูล",
  "สมุทรปราการ",
  "สมุทรสงคราม",
  "สมุทรสาคร",
  "สระแก้ว",
  "สระบุรี",
  "สิงห์บุรี",
  "สุโขทัย",
  "สุพรรณบุรี",
  "สุราษฎร์ธานี",
  "สุรินทร์",
  "หนองคาย",
  "หนองบัวลำภู",
  "อ่างทอง",
  "อำนาจเจริญ",
  "อุดรธานี",
  "อุตรดิตถ์",
  "อุทัยธานี",
  "อุบลราชธานี",
];

export default function Home() {
  const [fromProvince, setFromProvince] = useState("");
  const [toProvince, setToProvince] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [passenger, setPassenger] = useState(1);

  const timeSlots = [
    "06:00",
    "07:30",
    "09:00",
    "10:30",
    "12:00",
    "13:30",
    "15:00",
    "16:30",
    "18:00",
    "19:30",
    "21:00",
  ];

  const handleSubmit = () => {
    if (fromProvince && toProvince && selectedTime) {
      alert(
        `ค้นหาเส้นทาง: ${fromProvince} → ${toProvince}\nเวลา: ${selectedTime} น.\nผู้โดยสาร: ${passenger} คน`
      );
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1
          className="text-center mb-4"
          style={{ textShadow: "0 2px 8px #000" }}
        ></h1>
        <div
          className="bg-white rounded shadow p-4 mx-auto"
          style={{ maxWidth: 1100 }}
        >
          <form>
            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label fw-bold">จาก</label>
                <select
                  className="form-select"
                  value={fromProvince}
                  onChange={(e) => setFromProvince(e.target.value)}
                >
                  <option value="">เลือกจังหวัดต้นทาง</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 text-center d-flex align-items-end justify-content-center">
                <span className="fs-4">&#8596;</span>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-bold">ถึง</label>
                <select
                  className="form-select"
                  value={toProvince}
                  onChange={(e) => setToProvince(e.target.value)}
                >
                  <option value="">เลือกจังหวัดปลายทาง</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-bold">เวลาเดินทาง</label>
                <select
                  className="form-select"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">เลือกเวลา</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time} น.
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label fw-bold">ผู้โดยสาร</label>
                <select
                  className="form-select"
                  value={passenger}
                  onChange={(e) => setPassenger(Number(e.target.value))}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col text-end">
                <button
                  type="button"
                  className="btn btn-warning px-5 fw-bold"
                  style={{ color: "#fff", fontSize: "1.2rem" }}
                  onClick={handleSubmit}
                >
                  ค้นหา
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-3 text-center">
            <div
              className="bg-orange rounded-circle d-flex flex-column align-items-center justify-content-center mx-auto"
              style={{ width: 120, height: 120 }}
            >
              <i className="bi bi-calendar fs-1 text-white"></i>
              <div className="fw-bold text-white mt-2">เลื่อนตั๋ว</div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div
              className="bg-orange rounded-circle d-flex flex-column align-items-center justify-content-center mx-auto"
              style={{ width: 120, height: 120 }}
            >
              <i className="bi bi-arrow-repeat fs-1 text-white"></i>
              <div className="fw-bold text-white mt-2">คืนตั๋ว</div>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div
              className="bg-orange rounded-circle d-flex flex-column align-items-center justify-content-center mx-auto"
              style={{ width: 120, height: 120 }}
            >
              <i className="bi bi-printer fs-1 text-white"></i>
              <div className="fw-bold text-white mt-2">พิมพ์ตั๋ว</div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .bg-orange {
            background: #ff6600;
          }
          .cursor-pointer {
            cursor: pointer;
          }
          .hover-effect:hover {
            background: #e55a00 !important;
            transform: scale(1.05);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </>
  );
}
