import React from "react";
import "./menu.scss";
import { Spacer, PageTitle, ButtonBack } from "../../components";
import { dining_options } from "../../data";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <PageTitle title="Rise and shine!" />

      <Spacer height="1.25rem" />

      <p className="global-paragraph">
        It's time to tailor your culinary journey. Whether you're craving the
        freshness of breakfast, the hearty flavors of lunch, or the indulgence
        of dinner, we've got a feast waiting for you.
        <br />
        <br />
        Click below to choose your dining experience:
      </p>

      <div className="dining-options">
        {dining_options.map((item) => (
          <Link
            to={`/menu/doc/${item.id}`}
            className="listing-link"
            key={item.id}
          >
            <div className="single" key={item.id}>
              <p className="option-name">{item.name}</p>
              <span className="option-description">{item.description}</span>
            </div>
          </Link>
        ))}
      </div>

      <Spacer height="1.5rem" />

      <ButtonBack text="Back to Home" url="/" />
    </div>
  );
};

export default Menu;
