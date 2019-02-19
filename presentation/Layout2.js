// example Layout.js
import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: "#009688"
    }}
  >
    {children}
    <a href="http://www.ractor.ir">Home</a>
  </div>
);
