import React from "react";
import "./buttonBack.scss";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ButtonBack = ({ text, url }) => {
  return (
    <div className="btn-back-container">
      <Link to={url} className="btn-back">
        <HiOutlineArrowLongLeft />
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default ButtonBack;
