import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

function DatetimePickerPage() { 

  return (
    <>
    
      <p>Example of a Date Picker</p>
      <Datetime 
        className="input-ui" 
        timeFormat = {false}
        dateFormat = "DD/MM/YYYY"
      />
      <hr />
      <p>Example of a Time Picker</p>
      <Datetime 
        className="input-ui" 
        dateFormat = {false}
      />
      <hr />
      <p>Example of a React Date Time Picker</p>
      <Datetime 
        className="input-ui" 
        dateFormat = "DD/MM/YYYY"
      />
    </>
  );
}
export default DatetimePickerPage;