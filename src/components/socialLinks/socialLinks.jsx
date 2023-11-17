import React from "react";
import "./socialLinks.scss";
import { Link } from "react-router-dom";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RiTiktokLine } from "react-icons/ri";

const SocialLinks = () => {
  return (
    <div className="social-container">
      <Link to="https://instagram.com/orilerestaurantandbar" className="social">
        <FaInstagram />
      </Link>

      <Link to="https://www.tiktok.com/@orilerestobar" className="social">
        <RiTiktokLine />
      </Link>

      <Link to="https://wa.me/09136800000" className="social">
        <FaWhatsapp />
      </Link>

      <Link to="https://twitter.com/Orilerestobar" className="social">
        <FaXTwitter />
      </Link>

      <Link to="mailto:Orilerestaurantandbar@gmail.com" className="social">
        <HiOutlineMail />
      </Link>
    </div>
  );
};

export default SocialLinks;
