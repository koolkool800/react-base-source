import React, { useState } from "react";
import "../style.css"; // Import your CSS file for styling

function SeatMapCreator() {
  const [seatMap, setSeatMap] = useState<any[]>([]); // Store the seat map configuration
  const [currentClass, setCurrentClass] = useState<string>("Economy");
  const [currentSection, setCurrentSection] = useState<string>("A");
  const [currentRows, setCurrentRows] = useState<number>(6);
  const [currentColumns, setCurrentColumns] = useState<number>(8);

  // Function to add a new class
  const addClass = () => {
    const newClass = {
      name: currentClass,
      sections: [
        { name: currentSection, rows: currentRows, columns: currentColumns },
      ],
    };
    setSeatMap([...seatMap, newClass]);
  };

  // Function to add a new section to the current class
  const addSection = () => {
    const updatedMap = seatMap.map((item) => {
      if (item.name === currentClass) {
        item.sections.push({
          name: currentSection,
          rows: currentRows,
          columns: currentColumns,
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
          (section: any) => section.name !== sectionName
        );
      }
      return item;
    });
    setSeatMap(updatedMap);
  };

  return (
    <div className="seat-map-creator-container">
      <h2>Seat Map Creator</h2>
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
          <label>Columns:</label>
          <input
            type="number"
            value={currentColumns}
            onChange={(e) => setCurrentColumns(parseInt(e.target.value, 10))}
          />
        </div>
        <button onClick={addClass}>Add Class</button>
        <button onClick={addSection}>Add Section</button>
      </div>
      <div className="seat-map-display">
        {seatMap.map((classItem) => (
          <div key={classItem.name} className="class-container">
            <h3>{classItem.name}</h3>
            <button onClick={() => removeClass(classItem.name)}>
              Remove Class
            </button>
            <div className="section-list">
              {classItem.sections.map((sectionItem: any) => (
                <div key={sectionItem.name} className="section-container">
                  <h4>{sectionItem.name}</h4>
                  <button
                    onClick={() =>
                      removeSection(classItem.name, sectionItem.name)
                    }
                  >
                    Remove Section
                  </button>
                  <div className="seat-grid">
                    {Array.from({ length: sectionItem.rows }, (_, rowIndex) => (
                      <div key={`row-${rowIndex}`} className="seat-row">
                        {Array.from(
                          { length: sectionItem.columns },
                          (_, colIndex) => (
                            <div
                              key={`seat-${rowIndex}-${colIndex}`}
                              className="seat"
                            ></div>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatMapCreator;
