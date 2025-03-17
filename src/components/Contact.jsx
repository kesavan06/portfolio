import React from "react";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <div className="contactHeading">
        <h2>Contact</h2>
      </div>

      <div className="contactInfo">
        <div className="infoLine">
          <p>Email:</p>
          <p>kesavan.t@zohocorp.com</p>
        </div>
        <div className="infoLine">
          <p>Employee ID:</p>
          <p>ZSTTK364/24</p>
        </div>
        <div className="infoLine">
          <p>Phone:</p>
          <p>9342940861</p>
        </div>
      </div>
    </div>
  );
};
