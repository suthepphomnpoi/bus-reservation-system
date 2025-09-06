import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeatGrid from "../components/BusSeatSelection/SeatGrid";
import Legend from "../components/BusSeatSelection/Legend";
import "./BusSeatSelection.css";

export default function BusSeatSelection() {
  const pricePerSeat = 30; // ตัวอย่างค่าโดยสาร (ปรับตามจริงได้)

  // === ผังที่นั่งรถเมย์ไทย (2+2 + ทางเดินกลาง) — ชั้นเดียว ===
  // ใช้รหัส L01..L32 เฉยๆ เพื่อความเรียบง่าย
  const seats = useMemo(
    () => [
      "L01",
      "L02",
      "AISLE",
      "L03",
      "L04",
      "L05",
      "L06",
      "AISLE",
      "L07",
      "L08",
      "L09",
      "L10",
      "AISLE",
      "L11",
      "L12",
      "L13",
      "L14",
      "AISLE",
      "L15",
      "L16",
      "L17",
      "L18",
      "AISLE",
      "L19",
      "L20",
      "L21",
      "L22",
      "AISLE",
      "L23",
      "L24",
      "L25",
      "L26",
      "AISLE",
      "L27",
      "L28",
      "L29",
      "L30",
      "AISLE",
      "L31",
      "L32",
    ],
    []
  );

  // ตัวอย่าง: ที่นั่งถูกจองแล้ว (mock)
  const booked = useMemo(
    () => new Set(["L06", "L07", "L10", "L13", "L14", "L21"]),
    []
  );

  // state: ที่นั่งที่เลือก
  const [selected, setSelected] = useState(new Set());
  const toggleSeat = (code) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  };
  const clearAll = () => setSelected(new Set());

  const selectedList = useMemo(() => Array.from(selected).sort(), [selected]);
  const total = selectedList.length * pricePerSeat;

  return (
    <>
      <Navbar />

      <main className="container my-4">
        <div className="row g-4">
          {/* LEFT: แผนผังที่นั่ง */}
          <div className="col-12 col-lg-8">
            {/* หัวข้อ/ข้อมูลเส้นทางรถเมย์ */}
            <div className="card shadow-sm mb-3">
              <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                <div>
                  <div className="small text-secondary">
                    รถเมย์ไทย • สายตัวอย่าง
                  </div>
                  <div className="fw-semibold">
                    สาย 8 (สะพานพุทธ ↔ แฮปปี้แลนด์)
                  </div>
                  <div className="text-secondary small">
                    เวลาโดยประมาณ ขึ้นกับสภาพการจราจร
                  </div>
                </div>
                <div className="text-end">
                  <div className="small text-secondary">ค่าโดยสารเริ่ม</div>
                  <div className="fs-5 fw-bold text-warning">
                    ฿{pricePerSeat}
                  </div>
                </div>
              </div>
            </div>

            {/* คำอธิบายสถานะ */}
            <Legend pricePerSeat={pricePerSeat} />

            {/* แผนผังที่นั่ง (ชั้นเดียว) */}
            <div className="bg-white border mt-4 rounded shadow-sm p-4">
              <SeatGrid
                seats={seats}
                booked={booked}
                selected={selected}
                onToggle={toggleSeat}
              />
              <div className="text-center text-secondary small mt-2">
                แผนผังที่นั่ง — รถเมย์ชั้นเดียว
              </div>
            </div>
          </div>

          {/* RIGHT: สรุปรายการ */}
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm sticky-lg">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-semibold">สรุปการเลือกที่นั่ง</div>
                  <div className="small text-secondary">
                    กดเลือกบนแผนผังด้านซ้าย
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={clearAll}
                  disabled={selectedList.length === 0}
                >
                  ล้างที่นั่ง
                </button>
              </div>

              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <span className="text-secondary">เส้นทาง</span>
                  <span className="fw-semibold">สะพานพุทธ ↔ แฮปปี้แลนด์</span>
                </div>
                <hr />
                <div className="mb-2 fw-semibold">
                  ที่นั่งที่เลือก{" "}
                  <span className="text-secondary">
                    ({selectedList.length})
                  </span>
                </div>

                <ul className="list-group small mb-3">
                  {selectedList.length === 0 && (
                    <li className="list-group-item text-secondary">
                      ยังไม่ได้เลือก
                    </li>
                  )}
                  {selectedList.map((code) => (
                    <li
                      key={code}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>{code}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => toggleSeat(code)}
                      >
                        ลบ
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-secondary">ราคาต่อที่นั่ง</span>
                  <span>฿{pricePerSeat.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-semibold">รวม</span>
                  <span className="fs-5 fw-bold">
                    ฿{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="card-footer bg-white">
                <button
                  className="btn btn-primary btn-lg w-100"
                  disabled={selectedList.length === 0}
                >
                  ดำเนินการต่อ
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
