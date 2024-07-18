import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating, color }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className="star-container">
      {Array.from({ length: maxRating }, (_, i) => {
        return (
          <Star
            key={i}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            onRate={() => {
              setRating(i + 1);
            }}
            color={color}
            onHoverIn={() => {
              setHoverRating(i + 1);
            }}
            onHoverOut={() => {
              setHoverRating(0);
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
