
import React from "react";


const BookAppointment = () => {
  return (
    <div style={{
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '16px 8px',
      marginTop: '40px',
      width: '100%',
      fontSize: '12px',
      backgroundColor: 'white',
      borderRadius: '16px',
      paddingInlineStart: '20px',
      paddingInlineEnd: '20px'
    }}>
      <h3 style={{
        fontSize: '21px',
        fontWeight: 500,

        color: '#2c3e50'
      }}>
        Book Appointment
      </h3>
      <div style={{
        display: 'flex',
        width: '100%',
        marginTop: '32px'
      }}>
        <button style={{
          display: 'flex',
          flex: '1',
          gap: '8px',
          padding: '10px 8px',
          color: 'white',
          whiteSpace: 'nowrap',
          backgroundColor: '#1e90ff',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
          paddingLeft: '16px'
        }}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b626eeca9a86743ea81d31967695f00e6bd399ef03c154d2eef4b48f30371c07?placeholderIfAbsent=true&apiKey=4c137795ca7946528ace3d8e35f13cac"
            alt=""
            style={{
              objectFit: 'contain',
              flexShrink: '0',
              width: '20px',
              aspectRatio: '1 / 1'
            }}
          />
          <span>In-person</span>
        </button>
        <button style={{
          display: 'flex',
          flex: '1',
          gap: '8px',
          padding: '10px 8px',
          borderTop: '1px solid #d1d5db',
          borderRight: '1px solid #d1d5db',
          borderBottom: '1px solid #d1d5db',
          color: 'black',
          opacity: '0.5',
          borderRadius: '8px'
        }}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad1e4452994fb8921cdd7cd1e0f8a2c4605b967fc6673a2d0e1461b2826bc85?placeholderIfAbsent=true&apiKey=4c137795ca7946528ace3d8e35f13cac"
            alt=""
            style={{
              objectFit: 'contain',
              flexShrink: '0',
              width: '20px',
              aspectRatio: '1 / 1'
            }}
          />
          <span style={{ flexBasis: 'auto' }}>Video consultation</span>
        </button>
      </div>
    
      <label htmlFor="place" style={{ marginTop: '32px', color: '#2c3e50' }}>
        Select place
      </label>
      <select
        id="place"
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
          width: '100%',
          padding: '8px',
          whiteSpace: 'nowrap',
          borderRadius: '8px',
          border: '1px solid #1e90ff',
          color: 'black',
          opacity: '0.5'
        }}
      >
        <option>Select</option>
      </select>
      <label htmlFor="insurance" style={{ marginTop: '24px', color: '#2c3e50' }}>
        Select Insurance plan
      </label>
      <select
        id="insurance"
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
          width: '100%',
          padding: '8px',
          whiteSpace: 'nowrap',
          borderRadius: '8px',
          border: '1px solid #1e90ff',
          opacity: '0.5',
          color: 'black'
        }}
      >
        <option>Select</option>
      </select>
      <label htmlFor="date" style={{ marginTop: '24px', color: '#2c3e50' }}>
        Select date
      </label>
      <input
        type="date"
        id="date"
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
          width: '100%',
          padding: '8px',
          whiteSpace: 'nowrap',
          borderRadius: '8px',
          border: '1px solid #1e90ff',
          opacity: '0.5',
          color: 'black'
        }}
      />
      <label htmlFor="slots" style={{ marginTop: '24px', color: '#2c3e50' }}>
        Select slots
      </label>
      <select
        id="slots"
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
          width: '100%',
          padding: '8px',
          whiteSpace: 'nowrap',
          borderRadius: '8px',
          border: '1px solid #1e90ff',
          opacity: '0.5',
          color: 'black'
        }}
      >
        <option>10:30</option>
        <option>10:30</option>
        <option>10:30</option>
      </select>
      <button style={{
        display: 'flex',
        border:'none',
        gap: '10px',
        width: '100%',
        padding: '10px 20px',
        marginTop: '32px',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.5',
        color: 'white',
        backgroundColor: '#1e90ff',
        borderRadius: '8px',
        minHeight: '42px'
      }}>
        Book now
      </button>
    </div>
    
  );
};

export default BookAppointment;
