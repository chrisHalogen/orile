import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Document, Page } from "react-pdf";
import { Document, Page, pdfjs } from "react-pdf";

import { dining_options } from "../../data";
import "./doc.scss";
import { ButtonBack, Spacer } from "../../components";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const DocReader = () => {
  const { id } = useParams();
  const data = dining_options[id - 1].doc;
  const navigate = useNavigate();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

  return (
    <div className="doc-reader-wrap">
      <ButtonBack text="Back to Menus" url="/menu" />

      <Spacer height="1rem" />

      <div className="page-navigation">
        <div className="nav-icon-container" onClick={prevPage}>
          <FaArrowLeft />
        </div>
        <div className="nav-icon-container" onClick={nextPage}>
          <FaArrowRight />
        </div>
      </div>

      <Spacer height="1rem" />
      <Document file={data} onLoadSuccess={onDocumentSuccess}>
        <Page pageNumber={pageNumber}></Page>
      </Document>
    </div>
  );
};

export default DocReader;
