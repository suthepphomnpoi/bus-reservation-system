export default function SeatGrid({
  seats,
  booked,
  femaleOnly,
  selected,
  onToggle,
}) {
  return (
    <div className="seat-grid with-aisle" role="grid" aria-label="Seat map">
      {seats.map((code, idx) => {
        if (code === "AISLE") {
          return (
            <div key={`aisle-${idx}`} className="aisle text-center">
              <span className="aisle-label">AISLE</span>
            </div>
          );
        }

        const isBooked = booked?.has(code);
        const isSelected = selected?.has(code);
        const isFemale = femaleOnly?.has(code);

        let classes = "btn seat-btn btn-outline-secondary";
        if (isBooked) classes = "btn seat-btn btn-danger text-white";
        else if (isSelected) classes = "btn seat-btn btn-success text-white";

        return (
          <button
            key={code}
            type="button"
            className={classes}
            title={
              isBooked
                ? "ถูกจองแล้ว"
                : isFemale
                ? "โควตาผู้หญิง"
                : "ที่นั่งว่าง"
            }
            aria-pressed={isSelected}
            disabled={isBooked}
            onClick={() => onToggle(code)}
          >
            <span className="seat-number">{code.replace(/[LU]/, "")}</span>

            {/* ป้ายมุม: ผู้หญิง */}
            {isFemale && <span className="badge-female">♀</span>}

            {/* ป้ายมุม: เลือกแล้ว */}
            {isSelected && <span className="badge-tick">✓</span>}
          </button>
        );
      })}
    </div>
  );
}
