import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Review from "./Review";
import "./index.css";
import { useSelector } from "react-redux";
const Page = () => {
  // const BASE_URL = " http://www.i2ce.in";
  const [respo, setRespo] = useState("");
  // const [prodId, setProdId] = useState("");
  // const [reviewId, setReviewId] = useState("");

  const ids = useSelector((state) => state);
  console.log(ids);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://www.i2ce.in/reviews/${ids.product_id}/${ids.viewer_id}`
        );
        setRespo(response.data);
      } catch (error) {
        console.error(`this Error has Occured ${error}`);
      }
    };
    getUser();
  }, [ids]);
  const data = respo.reviews;

  console.log(data);

  return (
    <div className="">
      {data.map((review) => {
        if (review.friend) {
          return (
            <Review
              rating={review.ratings.Overall}
              title={review.title}
              usefullness={review.usefullness}
              comment={review.comment}
              name={review.reviewer.name}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Page;
