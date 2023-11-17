import React, { Fragment } from "react";
import "./listing.scss";
import { Spacer, PageTitle, ButtonBG, ButtonBack } from "../../components";
import { dining_options } from "../../data";
import { useNavigate, useParams } from "react-router-dom";

const Listing = () => {
  const { id } = useParams();
  const data = dining_options[id - 1];

  const exportString = (str) => {
    const lines = str.split(/\n/);
    const withBreaks = lines.flatMap((line, index) =>
      index > 0
        ? [<br key={`br-${index}`} />, <Fragment key={index}>{line}</Fragment>]
        : [line]
    );

    return withBreaks;
  };

  const navigate = useNavigate();

  if (!data) {
    navigate("/");
  }

  return (
    <div className="listing">
      <PageTitle title={`${data.name} Menu`} />
      <Spacer height="1.25rem" />

      <ButtonBack text="Back to Menus" url="/menu" />

      <Spacer height="0.25rem" />

      <div className="all-listing">
        {data.menu.map((category, count) => (
          <div className="single-category" key={count}>
            <h2 className="category-title" key={count}>
              {category.type}
            </h2>

            {category.varieties.map((item, index) => (
              <p key={index} className="category-item">
                <span className="item-name">{exportString(item.title)}</span>
                <span className={`item-price category-${id}`}>
                  {item.price}
                </span>
              </p>
            ))}

            {count !== data.length && <Spacer height="2rem" />}
          </div>
        ))}
      </div>

      <Spacer height="1.5rem" />

      <ButtonBG text="Place Your Order" url="https://wa.me/09136800000" />

      <Spacer height="1.5rem" />

      <p className="global-paragraph">
        All Prices Are In Naira
        <br />
        <br />
        <strong>
          All Prices Are Exclusive of VAT 7.5% and Consumption Tax 5%
        </strong>
        <br />
        <br />
        We Operate Stricly A CASHLESS POLICY | All Payment Are To Be Made To
        Company's Account ONLY
      </p>
    </div>
  );
};

export default Listing;
