import React from "react";
import "./home.scss";
import { Spacer, PageTitle, ButtonBG, SocialLinks } from "../../components";

const home = () => {
  return (
    <div className="home">
      <PageTitle title="Welcome to Orile" />

      <Spacer height="1.25rem" />

      <p className="global-paragraph">
        ORILE RESTAURANT AND BAR is a restaurant and bar located in the heart of
        Lekki Lagos being culture inclined creating a well crafted Afro-fusion
        menu focusing on the Ethnic and contemporary cuisine with the option of
        dining in or taking out, providing excellent quality customer service to
        ensure the satisfaction of customers beyond expectation.
      </p>

      <Spacer height="1.5rem" />

      <ButtonBG text="Explore Our Menu" url="/menu" />

      <Spacer height="1rem" />

      <p className="global-paragraph">Connect with us on social media.</p>

      <Spacer height="1rem" />

      <SocialLinks />
    </div>
  );
};

export default home;
