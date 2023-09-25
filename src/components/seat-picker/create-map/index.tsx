import React, { useState } from "react";
import "../style.css"; // Import your CSS file for styling
import { Col, Row } from "antd";

interface SeatMap {
  name: string;
  order: number;
  sections: {
    name: string;
    rows: number;
  }[];
}

function SeatMapCreator() {
  const [seatMap, setSeatMap] = useState<SeatMap[]>([]); // Store the seat map configuration
  const [currentClass, setCurrentClass] = useState<string>("Class 1");
  const [currentSection, setCurrentSection] = useState<string>("A");
  const [currentRows, setCurrentRows] = useState<number>(2);
  const [orderSeatMap, setOrderSeatMap] = useState<number>(1);

  // Function to add a new class
  const addClass = () => {
    const newClass = {
      name: currentClass,
      order: orderSeatMap,
      sections: [{ name: currentSection, rows: currentRows }],
    };
    setSeatMap([...seatMap, newClass]);
    setOrderSeatMap(orderSeatMap + 1);
  };

  // Function to add a new section to the current class
  const addSection = () => {
    const updatedMap = seatMap.map((item) => {
      if (item.name === currentClass) {
        item.sections.push({
          name: currentSection,
          rows: currentRows,
        });
      }
      return item;
    });
    setSeatMap(updatedMap);
  };

  // Function to remove a class and its sections
  const removeClass = (className: string) => {
    const updatedMap = seatMap.filter((item) => item.name !== className);
    setSeatMap(updatedMap);
  };

  // Function to remove a section from the current class
  const removeSection = (className: string, sectionName: string) => {
    const updatedMap = seatMap.map((item) => {
      if (item.name === className) {
        item.sections = item.sections.filter(
          (section) => section.name !== sectionName
        );
      }
      return item;
    });
    setSeatMap(updatedMap);
  };

  // Function to render the seat map based on rows
  const renderSeatMap = () => {
    const seatRows: JSX.Element[] = [];

    seatMap.forEach((seat) => {
      const { sections } = seat;

      if (sections.length > 0) {
        sections.forEach((sectionItem) => {
          const { name, rows } = sectionItem;
          for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            seatRows.push(
              <div
                key={`row-${seat.name}-${name}-${rowIndex}`}
                className="seat-sanh"
              >
                <div
                  key={`seat-${seat.name}-${name}-${rowIndex}`}
                  className="seat seat-render"
                >
                  {`${seat.name}-${name}-${rowIndex}`}
                </div>
              </div>
            );
          }
        });
      }
    });

    return <div className="seat-grid">{seatRows}</div>;
  };
  return (
    <div className="seat-map-creator-container">
      <h2>Stage Map Creator</h2>
      <div className="seat-map-controls">
        <div>
          <label>Class:</label>
          <input
            type="text"
            value={currentClass}
            onChange={(e) => setCurrentClass(e.target.value)}
          />
        </div>
        <div>
          <label>Section:</label>
          <input
            type="text"
            value={currentSection}
            onChange={(e) => setCurrentSection(e.target.value)}
          />
        </div>
        <div>
          <label>Rows:</label>
          <input
            type="number"
            value={currentRows}
            onChange={(e) => setCurrentRows(parseInt(e.target.value, 10))}
          />
        </div>

        <div>
          <label>Order:</label>
          <input
            type="number"
            value={orderSeatMap}
            onChange={(e) => setOrderSeatMap(parseInt(e.target.value, 10))}
          />
        </div>
        <button onClick={addClass}>Add Class</button>
        <button onClick={addSection}>Add Section</button>
      </div>
      <div className="seat-map-display"></div>
      <Row>
        {seatMap.map((classItem) => (
          <Col lg={12} key={classItem.name} className="class-container">
            <h3>{`${classItem.name} (Order: ${classItem.order})`}</h3>
            <button onClick={() => removeClass(classItem.name)}>
              Remove Class
            </button>
            <div className="section-list">
              {classItem.sections.map((sectionItem) => (
                <div key={sectionItem.name} className="section-container">
                  <h4>{sectionItem.name}</h4>
                  <button
                    onClick={() =>
                      removeSection(classItem.name, sectionItem.name)
                    }
                  >
                    Remove Section
                  </button>
                  {/* seat map */}
                  <div className="seat-grid">
                    {Array.from({ length: sectionItem.rows }, (_, rowIndex) => (
                      <div key={`row-${rowIndex}`} className="seat-row">
                        {/* {Array.from(
                          { length: sectionItem.columns },
                          (_, colIndex) => (
                            <div
                              key={`seat-${rowIndex}-${colIndex}`}
                              className="seat"
                            ></div>
                          )
                        )} */}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        ))}
      </Row>

      <h1>Render map for example</h1>
      {renderSeatMap()}
    </div>
  );
}

export default SeatMapCreator;
