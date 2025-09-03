export default function SearchForm({
  places,
  timeSlots,
  fromPlace,
  toPlace,
  selectedTime,
  onChangeFrom,
  onChangeTo,
  onChangeTime,
  onSwap,
  onSubmit,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row g-3 align-items-end">
        <div className="col-md-4">
          <label className="form-label fw-semibold">จุดเริ่มต้น (ขึ้นรถ)</label>
          <select
            className="form-select"
            value={fromPlace}
            onChange={(e) => onChangeFrom(e.target.value)}
          >
            <option value="">เลือกจุดขึ้นรถ</option>
            {places.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="col-md-1 d-flex align-items-end justify-content-center">
          <button
            type="button"
            className="btn btn-outline-secondary"
            title="สลับต้นทาง/ปลายทาง"
            onClick={onSwap}
          >
            ↔
          </button>
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold">จุดปลายทาง (ลงรถ)</label>
          <select
            className="form-select"
            value={toPlace}
            onChange={(e) => onChangeTo(e.target.value)}
          >
            <option value="">เลือกจุดปลายทาง</option>
            {places.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label fw-semibold">ช่วงเวลา</label>
          <select
            className="form-select"
            value={selectedTime}
            onChange={(e) => onChangeTime(e.target.value)}
          >
            <option value="">ทุกช่วงเวลา</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col text-end">
          <button type="button" className="btn btn-danger px-5 fw-bold" onClick={onSubmit}>
            ค้นหา
          </button>
        </div>
      </div>
    </form>
  );
}
