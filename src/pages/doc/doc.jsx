import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { dining_options } from "../../data";
import "./doc.scss";
import { ButtonBack, Spacer } from "../../components";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

// ----------------------------------
// ----------------------------------

const DocReader = () => {
  const { id } = useParams();
  const data = dining_options[id - 1].doc;
  const navigate = useNavigate();

  if (!data) {
    navigate("/");
  }

  return (
    <div className="webviewer">
      <iframe src={data} frameborder="0" width="100%"></iframe>
    </div>
  );
};

const DocReader_ = () => {
  const { id } = useParams();
  const data = dining_options[id - 1].doc;
  const navigate = useNavigate();

  if (!data) {
    navigate("/");
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber >= numPages ? pageNumber : pageNumber + 1);
  };

  return <div className="doc-reader-wrap">{""}</div>;
};

export default DocReader;
