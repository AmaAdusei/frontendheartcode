import React from "react";
import "schedulepage/style.css"; // Import the corresponding styles

// Component definition
const Schedule = () => {
  return (
    <div className="schedule-page">
      <header className="schedule-header">
        <h1>MEDTech Future</h1>
        <h2>My Schedule</h2>
      </header>
      <div className="calendar">
        <table>
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data; replace with dynamic data */}
            <tr>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Export the component
export default Schedule;
