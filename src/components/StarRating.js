import React, { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

function StarRating({ maxRating = 5, color = "#fcc419", size = 48 }) {
  const textStyle = {
    lineHeight: "1",
    color: color,
    margin: "0",
    fontSize: `${size / 1.5}px`,
  };

  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}

export default StarRating;
