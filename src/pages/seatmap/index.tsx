import React from "react";
import SeatPickerComponent from "../../components/seat-picker";
const SeatMapPage = () => {
  const rows = [
    [
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2, tooltip: "Cost: 15$" },
      {
        id: 3,
        number: "3",
        isReserved: true,
        orientation: "east",
        tooltip: "Reserved by Rogger",
      },
      null,
    ],
    [
      {
        id: 7,
        number: 1,
        isReserved: true,
        tooltip: "Reserved by Matthias Nadler",
      },
      { id: 8, number: 2, isReserved: true },
      { id: 9, number: "3", isReserved: true, orientation: "east" },
      null,
      { id: 10, number: "4", orientation: "west" },
      { id: 11, number: 5 },
      { id: 12, number: 6 },
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
      { id: 15, number: 3, isReserved: true, orientation: "east" },
      null,
      { id: 16, number: "4", orientation: "west" },
      { id: 17, number: 5 },
      { id: 18, number: 6 },
    ],
    [
      { id: 19, number: 1, tooltip: "Cost: 25$" },
      { id: 20, number: 2 },
      { id: 21, number: 3, orientation: "east" },
      null,
      { id: 22, number: "4", orientation: "west" },
      { id: 23, number: 5 },
      { id: 24, number: 6 },
    ],
    [
      { id: 25, number: 1, isReserved: true },
      { id: 26, number: 2, orientation: "east" },
      { id: 27, number: "3", isReserved: true },
      null,
      { id: 28, number: "4", orientation: "west" },
      { id: 29, number: 5, tooltip: "Cost: 11$" },
      { id: 30, number: 6, isReserved: true },
    ],
  ];

  return (
    <div>
      {/* <SeatPicker
        rows={rows}
        maxReservableSeats={6}
        number
        visible
        selectedByDefault
        tooltipProps={{ multiline: true }}
      /> */}
      <SeatPickerComponent />
    </div>
  );
};

export default SeatMapPage;

// https://booking.seatmap.pro/
// https://github.com/topics/seat-map
// https://observablehq.com/@d3/zoomable-sunburst?intent=fork
// https://seatmap.pro/docs/#_introduction
// https://codesandbox.io/s/seat-bookig-component-pt8q2?file=/src/SeatAllocationComponent.jsx
// https://codesandbox.io/s/tongariro-cinema-website-j3mgnw?file=/src/pages/movie/Movie.jsx
// https://github.com/topics/react-typescript-boilerplate
