import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Review from "./review_comp/Review";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import Pagination from "./pagination/Pagination";
import { Link } from "react-router-dom";
import { SortAction } from "./store/store";
import { useHistory } from "react-router-dom";

const Page = () => {
  // const BASE_URL = " http://www.i2ce.in";
  const history = useHistory();
  const dispatch = useDispatch();
  const [respo, setRespo] = useState(null);
  const [totalLength, setTotalLength] = useState();
  const [option, setOption] = useState();
  // const [load, setLoad] = useState(false);
  const ids = useSelector((state) => state);

  // console.log(ids);

  //geting a data from server
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

  useEffect(() => {
    getUser();
  }, []);

  //********************pagination  idea  ****************** */

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

  // ****************** Rendering the data *********************************

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

  // console.log("this is dataRender", dataRender);

  // ******************Submit function ********************

  const submitChoice = (e) => {
    setOption(e.target.value);
    dispatch(SortAction(e.target.value));
    history.push("/morereview");
  };

  return (
    <div className="">
      <form className="ml-1 mt-3">
        <div class="form-group col-md-1">
          <label for="inputState">Sort By</label>
          <select
            id="choice"
            className="form-control"
            value={option}
            onChange={submitChoice}
          >
            <option selected>Choose...</option>
            <option value="rating">Rating </option>
            <option value="usefullness">usefullness </option>
            <option value="connection_level">connection </option>
          </select>
        </div>
      </form>
      <div className="justify-content-center ml-5">{dataRender}</div>

      <div className=" d-flex pagination">
        <Link to="/morereview">
          <button className="btn m-2 align-content-center align-items-center">
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
