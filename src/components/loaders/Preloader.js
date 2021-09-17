import React from "react";
import Circle from "../../assets/images/circle.svg";

const Preloader = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <img src={Circle} alt="circle" />
    </div>
  );
};

export default Preloader;
