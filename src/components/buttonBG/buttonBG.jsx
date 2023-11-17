import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./buttonBG.scss";

const ButtonBG = ({ text, url }) => {
  return (
    <div className="btn-bg-container">
      <Link to={url} className="btn-bg">
        <span>{text}</span>
        <HiOutlineArrowLongRight />
      </Link>
    </div>
  );
};

export default ButtonBG;
