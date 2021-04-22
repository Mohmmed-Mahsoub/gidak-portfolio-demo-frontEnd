import React from "react";
const Address = ({ component }) => {
  return (
    <div className="addres">
      <div className="addres-text">
        <i className="fas fa-map-marker-alt"></i>
        <div className="address-info">
          <div className="addres-txt">{component.address}</div>
        </div>
      </div>
    </div>
  );
};

export default Address;
