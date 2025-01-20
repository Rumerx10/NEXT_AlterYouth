"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = ({phone, setPhone}) => {
  return (
    <PhoneInput
      country={"bd"} // Default country: Bangladesh
      value={phone}
      onChange={(phone) => setPhone(phone)}
      inputStyle={{
        width: "100%", // Ensures the input takes full width
        height:"50px",
        paddingLeft: "50px",
        paddingTop: "12px",
        paddingRight: "12px",
        paddingBottom: "12px",
        border: "1px solid #E5E5E5",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "300",
        color: "black",
        outline: "none",
        lineHeight: "20px", // Set line height
        transition: "border-color 0.5s", // Matches transition-colors duration-500
      }}
      buttonStyle={{
        backgroundColor: "transparent",
        border: "none",
        padding: "0 6px",
      }}
      containerStyle={{
        width: "100%",
      }}
      dropdownStyle={{
        fontSize: "20px",
      }}
      
    />
  );
};

export default PhoneNumberInput;
