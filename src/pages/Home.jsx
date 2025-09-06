import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import SearchForm from "../components/Home/SearchForm";
import SearchResults from "../components/Home/SearchResults";
import Footer from "../components/Footer";

/** ===== Mock data (สั้น กระชับ) ===== */
const PLACES = [
  "สะพานพุทธ",
  "แฮปปี้แลนด์",
  "สนามหลวง",
  "สยาม",
  "หมอชิต",
  "อนุสาวรีย์ชัยฯ",
  "บางนา",
  "สีลม",
  "สาทร",
  "พระราม 2",
  "รังสิต",
];

const BUS_LINES = [
  {
    id: "B001",
    line: "8",
    from: "สะพานพุทธ",
    to: "แฮปปี้แลนด์",
    via: ["วงเวียนใหญ่", "เสาชิงช้า", "อนุสาวรีย์ชัยฯ", "ลาดพร้าว"],
    times: [
      "เช้า (05:00–09:00)",
      "กลางวัน (09:00–16:00)",
      "เย็น (16:00–20:00)",
    ],
    operator: "รถร่วม ขสมก.",
    seatsLeft: 12,
  },
  {
    id: "B002",
    line: "40",
    from: "สนามหลวง",
    to: "บางนา",
    via: ["สยาม", "สีลม"],
    times: [
      "เช้า (05:00–09:00)",
      "กลางวัน (09:00–16:00)",
      "เย็น (16:00–20:00)",
    ],
    operator: "ขสมก.",
    seatsLeft: 0, // เต็ม
  },
  {
    id: "B003",
    line: "73ก",
    from: "สนามหลวง",
    to: "หมอชิต",
    via: ["เสาชิงช้า", "อนุสาวรีย์ชัยฯ"],
    times: ["เช้า (05:00–09:00)", "กลางวัน (09:00–16:00)"],
    operator: "ขสมก.",
    seatsLeft: 7,
  },
  {
    id: "B004",
    line: "511",
    from: "พระราม 2",
    to: "รังสิต",
    via: ["สาทร", "อนุสาวรีย์ชัยฯ"],
    times: [
      "เช้า (05:00–09:00)",
      "กลางวัน (09:00–16:00)",
      "เย็น (16:00–20:00)",
      "ดึก (20:00–24:00)",
    ],
    operator: "รถร่วม ขสมก.",
    seatsLeft: 3,
  },
];

export default function Home() {
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [submitted, setSubmitted] = useState(false); // เคยกดค้นหาหรือยัง
  const [showAll, setShowAll] = useState(false); // โหมดแสดงทุกสาย

  const timeSlots = [
    "เช้า (05:00–09:00)",
    "กลางวัน (09:00–16:00)",
    "เย็น (16:00–20:00)",
    "ดึก (20:00–24:00)",
  ];

  const results = useMemo(() => {
    if (!submitted) return [];
    if (showAll) return BUS_LINES; // โหมดแสดงทั้งหมด

    // โหมดค้นหาปกติ → กรองตามเงื่อนไข
    return BUS_LINES.filter((b) => {
      const matchFrom = fromPlace
        ? b.from.includes(fromPlace) || b.via.includes(fromPlace)
        : true;
      const matchTo = toPlace
        ? b.to.includes(toPlace) || b.via.includes(toPlace)
        : true;
      const matchTime = selectedTime ? b.times.includes(selectedTime) : true;
      return matchFrom && matchTo && matchTime;
    });
  }, [submitted, showAll, fromPlace, toPlace, selectedTime]);

  const handleSubmit = () => {
    if (!fromPlace || !toPlace) {
      alert("กรุณาเลือกจุดเริ่มต้นและจุดปลายทาง");
      return;
    }
    setShowAll(false);
    setSubmitted(true);
  };

  const handleShowAll = () => {
    // กดแสดงทั้งหมด → เปิด submitted + โหมด showAll
    setSubmitted(true);
    setShowAll(true);
  };

  const handleSwap = () => {
    setFromPlace((prevFrom) => {
      const newFrom = toPlace;
      setToPlace(prevFrom);
      return newFrom;
    });
  };

  return (
    <>
      <Navbar />

      <div className="container py-4">
        {/* กล่องค้นหา */}
        <div
          className="bg-white border rounded p-4 mx-auto"
          style={{ maxWidth: 1100 }}
        >
          <div className="mb-3 d-flex flex-wrap justify-content-between align-items-end gap-2">
            <div>
              <h5 className="mb-0">ค้นหาเส้นทางรถเมย์</h5>
              <small className="text-secondary">
                เลือกจุดขึ้น–ลง และช่วงเวลา (ถ้ามี)
              </small>
            </div>

            {/* ปุ่ม "แสดงเส้นทางทั้งหมด" */}
            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={handleShowAll}
              >
                แสดงเส้นทางทั้งหมด
              </button>
            </div>
          </div>

          <SearchForm
            places={PLACES}
            timeSlots={timeSlots}
            fromPlace={fromPlace}
            toPlace={toPlace}
            selectedTime={selectedTime}
            onChangeFrom={setFromPlace}
            onChangeTo={setToPlace}
            onChangeTime={setSelectedTime}
            onSwap={handleSwap}
            onSubmit={handleSubmit}
          />
        </div>

        {/* ผลลัพธ์ */}
        <div className="mt-4">
          <SearchResults submitted={submitted} results={results} />
        </div>
      </div>
      <Footer />
    </>
  );
}
