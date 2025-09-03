import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import SeatGrid from "../components/BusSeatSelection/SeatGrid";
import Legend from "../components/BusSeatSelection/Legend";
import "./BusSeatSelection.css";

export default function BusSeatSelection() {
  const pricePerSeat = 600;

  // === Layout (มี AISLE คั่นกลาง) ===
  const lowerSeats = useMemo(
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

  const upperSeats = useMemo(
    () => [
      "U01",
      "U02",
      "AISLE",
      "U03",
      "U04",
      "U05",
      "U06",
      "AISLE",
      "U07",
      "U08",
      "U09",
      "U10",
      "AISLE",
      "U11",
      "U12",
      "U13",
      "U14",
      "AISLE",
      "U15",
      "U16",
      "U17",
      "U18",
      "AISLE",
      "U19",
      "U20",
      "U21",
      "U22",
      "AISLE",
      "U23",
      "U24",
    ],
    []
  );

  // จองแล้ว / โควตาผู้หญิง (mock)
  const booked = useMemo(
    () =>
      new Set(["L06", "L07", "L10", "L13", "L14", "L21", "U05", "U11", "U12"]),
    []
  );
  const femaleOnly = useMemo(() => new Set(["L03", "U03", "U04"]), []);

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
          {/* LEFT */}
          <div className="col-12 col-lg-8">
            {/* Trip summary */}
            <div className="card shadow-sm mb-3">
              <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                <div>
                  <div className="small text-secondary">เที่ยวรถ</div>
                  <div className="fw-semibold">
                    Satnam Travels • AC Sleeper (2+1)
                  </div>
                  <div className="text-secondary small">
                    ออก 18:00 • ถึง 03:00 • 9 ชั่วโมง
                  </div>
                </div>
                <div className="text-end">
                  <div className="small text-secondary">ราคาเริ่ม</div>
                  <div className="fs-5 fw-bold text-warning">₹600</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <Legend pricePerSeat={pricePerSeat} />

            {/* Deck Tabs */}
            <ul className="nav nav-tabs" id="deckTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="lower-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#lower"
                  type="button"
                  role="tab"
                >
                  Lower Deck
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="upper-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#upper"
                  type="button"
                  role="tab"
                >
                  Upper Deck
                </button>
              </li>
            </ul>

            <div className="tab-content bg-white border border-top-0 p-3 rounded-bottom shadow-sm">
              {/* Lower */}
              <div
                className="tab-pane fade show active"
                id="lower"
                role="tabpanel"
              >
                <SeatGrid
                  seats={lowerSeats}
                  booked={booked}
                  femaleOnly={femaleOnly}
                  selected={selected}
                  onToggle={toggleSeat}
                />
                <div className="text-center text-secondary small mt-2">
                  LOWER DECK
                </div>
              </div>
              {/* Upper */}
              <div className="tab-pane fade" id="upper" role="tabpanel">
                <SeatGrid
                  seats={upperSeats}
                  booked={booked}
                  femaleOnly={femaleOnly}
                  selected={selected}
                  onToggle={toggleSeat}
                />
                <div className="text-center text-secondary small mt-2">
                  UPPER DECK
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm sticky-lg">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-semibold">สรุปรายการ</div>
                  <div className="small text-secondary">
                    เลือกที่นั่งแล้วชำระเงิน
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
                  <span className="text-secondary">ผู้ให้บริการ</span>
                  <span className="fw-semibold">Satnam Travels</span>
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
                  <span>₹{pricePerSeat.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-semibold">รวม</span>
                  <span className="fs-5 fw-bold">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="card-footer bg-white">
                <button
                  className="btn btn-warning w-100"
                  disabled={selectedList.length === 0}
                >
                  ดำเนินการต่อ
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
