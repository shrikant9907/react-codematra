import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() { 

  // Set Todays date as starting Date
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <p>Example of a React Date Picker</p>
      <DatePicker 
        className="input-ui" 
        selected={startDate} 
        onChange={(date) => 
        setStartDate(date)} 
        dateFormat="dd/MM/yyyy"
      />
    </>
  );
}
export default ReactDatePicker;