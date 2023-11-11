import React from "react";

const Sider = () => {
  console.log("Sider rerendered")
  return (
    <div className="sider">
      <nav className="nav">
        {new Array(9).fill(null).map((item, index) => (
          <div className="nav-item" key={index}>
            Option {index}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sider;
