import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating }) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-container">
      {Array.from({ length: maxRating }, (_, i) => {
        return <Star key={i} full={rating <= i + 1} />;
      })}
    </div>
  );
};

export default StarRating;
