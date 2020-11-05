import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Page from "./Page";
import { useSelector, useDispatch } from "react-redux";
import { productAction, viewerAction } from "./store";

function Input() {
  const dispatch = useDispatch();
  // const Ids = useSelector((state) => state);
  // console.log(Ids);

  let history = useHistory();

  const [product, setProduct] = useState("");
  const [viewer, setViewer] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(productAction(product));
    dispatch(viewerAction(viewer));
    setViewer("");
    setProduct("");

    history.push("/rating_page");
  };

  return (
    <div className="container ">
      <form onSubmit={submitHandler} className="form">
        <input
          className="input w-25 "
          type="number"
          placeholder="product_id"
          name="product"
          value={product}
          min="1"
          max="20"
          required
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
        <input
          className="input   w-25 "
          type="number"
          placeholder="viewer_id"
          name="viewer"
          value={viewer}
          min="1"
          max="10"
          required
          onChange={(e) => {
            setViewer(e.target.value);
          }}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;
