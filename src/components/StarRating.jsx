import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating, color = 'black' }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className="star-container">
      <div className="stars">
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
      {rating}
    </div>
  );
};

export default StarRating;
