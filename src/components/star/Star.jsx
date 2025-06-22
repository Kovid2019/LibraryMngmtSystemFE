import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
const maxRating = 5;
export const Star = ({ avgRating, totalReviews }) => {
  if (avgRating < 0 || avgRating > 5) {
    return "";
  }
  const halfStar = !Number.isInteger(avgRating);
  const fullStar = Math.floor(avgRating);
  const emptyStar = maxRating - fullStar - (halfStar ? 1 : 0);

  const showStars = [];
  //Full stars to show
  for (let i = 0; i < fullStar; i++) {
    showStars.push(<FaStar className="text-warning" />);
  }
  //Half stars to show
  if (halfStar) showStars.push(<FaStarHalfAlt className="text-warning" />);

  //Empty stars to show
  for (let i = 0; i < emptyStar; i++) {
    showStars.push(<FaRegStar />);
  }
  return (
    <div>
      {showStars} {}
      {totalReviews && totalReviews + "Reviews"}
    </div>
  );
};
