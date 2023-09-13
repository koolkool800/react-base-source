import React, { useState } from "react";
import "./style.css"; // Import your CSS file for styling
import SeatMapCreator from "./create-map";

function SeatPickerComponent() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const classes = ["Economy", "Business"];
  const sections = ["A", "B", "C"];
  const rows = 6;
  const columns = 2;

  // Function to toggle the selected state of a seat
  const toggleSeat = (seatId: string): void => {
    const isSelected = selectedSeats.includes(seatId);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  // Generate a unique seat ID based on class, section, row, and column
  const generateSeatId = (
    c: string,
    s: string,
    r: number,
    col: number
  ): string => {
    return `${c}-${s}-${String.fromCharCode(65 + r)}${col + 1}`;
  };

  return (
    <div className="seat-picker-container">
      <h2>Seat Picker</h2>
      {/* <div className="seat-picker">
        {classes.map((classType) =>
          sections.map((section) => (
            <div key={`${classType}-${section}`} className="class-section">
              <h3>{`${classType} - Section ${section}`}</h3>
              <div className="seat-grid">
                {Array.from({ length: rows }, (_, rowIndex) => (
                  <div key={`row-${rowIndex}`} className="seat-row">
                    {Array.from({ length: columns }, (_, colIndex) => {
                      const seatId = generateSeatId(
                        classType,
                        section,
                        rowIndex,
                        colIndex
                      );
                      const isSelected = selectedSeats.includes(seatId);
                      return (
                        <div
                          key={`seat-${seatId}`}
                          className={`seat ${isSelected ? "selected" : ""}`}
                          onClick={() => toggleSeat(seatId)}
                        >
                          {String.fromCharCode(65 + rowIndex)}
                          {colIndex + 1}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div> */}
      {/* <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seatId) => (
            <li key={seatId}>{`Seat: ${seatId}`}</li>
          ))}
        </ul>
      </div> */}
      <SeatMapCreator />
    </div>
  );
}

export default SeatPickerComponent;
