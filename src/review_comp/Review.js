import React from "react";
import "./Review.css";
import StarRating from "../ratingStar/StarRating";

const Review = (props) => {
  const {
    rating,
    title = "Good",
    usefulness,
    comment = "it 's a good product'",
    name = "shubham",
  } = props;
  return (
    <>
      <div className="review">
        <div className=" profile eborder w-2 d-inline-flex">
          <h2 className="mr-5"> {name}</h2>
          <StarRating
            count={5}
            size={40}
            value={rating}
            activeColor={"red"}
            inactiveColor={"#ddd"}
          />
        </div>
        <p>usefulness:-{usefulness}</p>
        <div className=" comment">
          <p>{title}</p>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

export default Review;
