import React from "react";

function Logo({ title, role }) {
  return (
    <div className="logo">
      <span role="img">{role}</span>
      <h1>{title}</h1>
    </div>
  );
}

export default Logo;
