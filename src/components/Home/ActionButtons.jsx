export default function ActionButtons() {
  return (
    <div className="row justify-content-center g-4">
      {[
        { icon: "bi-geo-alt", label: "ป้ายใกล้ฉัน" },
        { icon: "bi-clock-history", label: "เที่ยวถัดไป" },
        { icon: "bi-info-circle", label: "คู่มือการขึ้นรถ" },
      ].map((b) => (
        <div key={b.label} className="col-4 col-md-3 col-lg-2 text-center">
          <div
            className="bg-orange rounded-circle d-flex flex-column align-items-center justify-content-center mx-auto hover-effect"
            style={{ width: 110, height: 110 }}
          >
            <i className={`bi ${b.icon} fs-1 text-white`} />
            <div className="fw-bold text-white mt-2">{b.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
