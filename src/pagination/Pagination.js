import React, { useState, useEffect } from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { addMore } from "../store/store";
const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
    dispatch(addMore(counter));
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  console.log(counter);
  return (
    <div className="d-flex justify-content-center ">
      <button className="btn m-5 " onClick={() => onButtonClick("prev")}>
        <i class="Arrow  fa fa-arrow-left"></i>
      </button>
      <button className="btn m-5" onClick={() => onButtonClick("next")}>
        <i class="Arrow fa fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
