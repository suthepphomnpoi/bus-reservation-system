export default function SeatGrid({
  seats,
  booked,
  femaleOnly,
  selected,
  onToggle,
}) {
  return (
    <div className="seat-grid with-aisle">
      {seats.map((code, idx) => {
        if (code === "AISLE")
          return <div key={`aisle-${idx}`} className="aisle" />;

        const isBooked = booked?.has(code);
        const isSelected = selected?.has(code);
        const isFemale = femaleOnly?.has(code);

        const base = "btn seat-btn";
        let classes = "btn-outline-secondary";
        if (isBooked) classes = "btn-danger text-white";
        else if (isSelected) classes = "btn-success text-white";

        return (
          <button
            key={code}
            type="button"
            className={`${base} ${classes} ${isFemale ? "seat-female" : ""}`}
            title={
              isBooked
                ? "ถูกจองแล้ว"
                : isFemale
                ? "โควตาผู้หญิง (แสดงสถานะ)"
                : "ที่นั่งว่าง"
            }
            disabled={isBooked}
            onClick={() => onToggle(code)}
          >
            {code.replace(/[LU]/, "")}
          </button>
        );
      })}
    </div>
  );
}
