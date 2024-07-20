import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = () => {
  const [date, setDate] = useState(null);

  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <body style={{backgroundColor:'lightgray'}}> 
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{color:'brown',fontFamily:'Poppins',fontSize:'30px'}}>Pick a Date</h2>
      <DatePicker
        selected={date}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      
    </div>
    </body>
  );
};

export default DateSelector;