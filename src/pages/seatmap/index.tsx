import React, { useState } from "react";
import "./index.css";

const SeatMap: React.FC = () => {
  const rows: string[] = ["A", "B", "C", "D"];
  const seatsPerRow: number = 3;
  const seatsInLastRow: number = 5;

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seat: string): void => {
    if (!selectedSeats.includes(seat)) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      alert("Ghế này đã được chọn!");
    }
  };

  return (
    <div className="container">
      <div className="busShape">
        <div className="seatMap">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {Array.from(
                {
                  length:
                    rowIndex === rows.length - 1 ? seatsInLastRow : seatsPerRow,
                },
                (_, seatIndex) => {
                  const seat: string = `${row}${seatIndex + 1}`;
                  const isSeatSelected: boolean = selectedSeats.includes(seat);
                  return (
                    <div
                      key={seatIndex}
                      className={`seat ${isSeatSelected ? "selected" : ""}`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      {seat}
                    </div>
                  );
                }
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
