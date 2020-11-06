import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Review from "./Review";
// import "../index.css";
import shortid from "shortid";
import { useSelector } from "react-redux";

const MoreReview = () => {
  // const BASE_URL = " http://www.i2ce.in";
  const [respo, setRespo] = useState();

  const ids = useSelector((state) => state);

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
  }, []);

  //   console.log(respo);
  // const total = respo.reviews;

  // ****************  Sorting methods and  rendering **********************

  let dataRender;
  if (ids.addChoice === "rating" && respo) {
    console.log("this is my rating choice", ids.addChoice);
    console.log(respo.reviews.ratings);
    alert(" usefulness sorting is working");
  } else if (ids.addChoice === "usefullness" && respo) {
    dataRender = respo.reviews.sort((a, b) => {
      return a.usefulness - b.usefulness;
    });
    console.log("this is usefullness data", dataRender);
    dataRender = respo.reviews.map((review) => {
      if (review.friend) {
        return (
          <Review
            key={shortid.generate()}
            rating={review.ratings.Overall}
            title={review.title}
            usefulness={review.usefulness}
            comment={review.comment}
            name={review.reviewer.name}
          />
        );
      } else {
        return null;
      }
    });
  } else if (ids.addChoice === "connection_level" && respo) {
    // console.log("this connection", respo.reviews);
    let connection = respo.reviews;
    console.log("this connection", connection);
    alert(" usefulness sorting is working");
  } else if (respo) {
    dataRender = respo.reviews.slice(ids.more + 2).map((review) => {
      if (review.friend) {
        return (
          <Review
            key={shortid.generate()}
            rating={review.ratings.Overall}
            title={review.title}
            usefulness={review.usefulness}
            comment={review.comment}
            name={review.reviewer.name}
          />
        );
      } else {
        return null;
      }
    });
  }

  // console.log("this is connection list ", connection);

  // console.log("this is dataRender", dataRender);

  return (
    <div className="">
      <div className="justify-content-center ml-5">{dataRender}</div>
    </div>
  );
};

export default MoreReview;
