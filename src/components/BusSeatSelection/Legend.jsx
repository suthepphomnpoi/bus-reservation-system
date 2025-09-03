export default function Legend({ pricePerSeat }) {
  return (
    <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
      <span className="legend-box available" />
      <span className="small">ว่าง</span>

      <span className="legend-box selected" />
      <span className="small">เลือกอยู่</span>

      <span className="legend-box booked" />
      <span className="small">ถูกจองแล้ว</span>

      <span className="ms-auto small text-secondary">
        ราคาต่อที่นั่ง: <strong>฿{pricePerSeat.toLocaleString()}</strong>
      </span>
    </div>
  );
}
