import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Review from "./review_comp/Review";
import "./index.css";
import { useSelector } from "react-redux";
import shortid from "shortid";
import Pagination from "./pagination/Pagination";
import { Link } from "react-router-dom";
const Page = () => {
  // const BASE_URL = " http://www.i2ce.in";
  const [respo, setRespo] = useState();
  const [totalLength, setTotalLength] = useState();

  const ids = useSelector((state) => state);
  // console.log(ids);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://www.i2ce.in/reviews/${ids.product_id}/${ids.viewer_id}`
        );
        setRespo(response.data);
        setTotalLength(response.data.reviews.length);
      } catch (error) {
        console.error(`this Error has Occured ${error}`);
      }
    };
    getUser();
  }, []);

  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  console.log(respo);
  // const total = respo.reviews;

  let dataRender;
  if (respo) {
    dataRender = respo.reviews
      .slice(pagination.start, pagination.end)
      .map((review) => {
        if (review.friend) {
          return (
            <Review
              key={shortid.generate()}
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
      });
  }

  console.log("this is dataRender", dataRender);

  return (
    <div className="">
      <div className="justify-content-center ml-5">{dataRender}</div>

      <div className=" d-flex pagination">
        <Link to="/morereview">
          <button className="btn m-2 align-content-center">
            More.. <i class="Arrow fa fa-angle-double-down"></i>
          </button>
        </Link>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={totalLength}
        />
      </div>
    </div>
  );
};

export default Page;
