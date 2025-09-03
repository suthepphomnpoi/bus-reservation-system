export default function SearchResults({ submitted, results }) {
  // กรอบผลลัพธ์ให้กว้างเท่ากล่องค้นหา
  const Box = ({ children }) => (
    <div className="bg-white border rounded p-4 mx-auto" style={{ maxWidth: 1100 }}>
      {children}
    </div>
  );

  if (!submitted) {
    return (
      <Box>
        <div className="text-center text-secondary py-5">
          เลือกจุดขึ้นรถ–ปลายทาง แล้วกด <strong>ค้นหา</strong> หรือกด <strong>แสดงเส้นทางทั้งหมด</strong>
        </div>
      </Box>
    );
  }

  if (!results.length) {
    return (
      <Box>
        <div className="text-center text-secondary py-5">
          ไม่พบสายรถเมย์ที่ตรงกับเงื่อนไข
        </div>
      </Box>
    );
  }

  return (
    <Box>
      <ul className="list-group list-group-flush">
        {results.map((b, idx) => {
          const full = b.seatsLeft <= 0;
          return (
            <li key={b.id} className="list-group-item px-0">
              <div className="row gy-2 align-items-center">
                {/* ซ้าย: เลขสาย + From→To + ผ่าน */}
                <div className="col-12 col-lg-6 d-flex align-items-start gap-3">
                  <span className={`badge ${full ? "text-bg-secondary" : "text-bg-danger"} fs-6 px-3 py-2`}>
                    สาย {b.line}
                  </span>
                  <div>
                    <div className="fw-semibold">
                      {b.from} <span className="mx-1">➜</span> {b.to}
                    </div>
                    <div className="small text-secondary">ผ่าน: {b.via.join(" • ")}</div>
                  </div>
                </div>

                {/* กลาง: ผู้ให้บริการ + ช่วงเวลาที่วิ่ง + คงเหลือ */}
                <div className="col-12 col-lg-4 text-lg-center">
                  <div className="small text-secondary">ผู้ให้บริการ</div>
                  <div className="fw-semibold">{b.operator}</div>
                  <div className="small text-secondary mt-1">ช่วงเวลาที่วิ่ง</div>
                  <div className="small">{b.times.join(" / ")}</div>
                  <div className="mt-2">
                    {full ? (
                      <span className="badge text-bg-secondary">เต็มแล้ว</span>
                    ) : (
                      <span className="badge text-bg-success">คงเหลือ {b.seatsLeft} ที่นั่ง</span>
                    )}
                  </div>
                </div>

                {/* ขวา: ปุ่มเลือก */}
                <div className="col-12 col-lg-2 text-lg-end">
                  <button className="btn btn-outline-danger fw-semibold w-100" disabled={full}>
                    เลือกสายนี้
                  </button>
                </div>
              </div>

              {/* เส้นคั่น */}
              {idx !== results.length - 1 && <hr className="mt-3 mb-0" />}
            </li>
          );
        })}
      </ul>
    </Box>
  );
}
