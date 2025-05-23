/**
 * A footer displayed on all pages and containing links to LinkedIn and GitHub as well as an email.
 */

import React, { useEffect } from "react";
import fbImg from "../images/fb.png";
import instaImg from "../images/inst.png";
import tiktokImg from "../images/tiktok.png";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer class="footer">
      <div>
        <strong>SUPPORT</strong>
        <em>{" "}
        <p>
          Contact Us
          <br />
          Cookie Policy
          <br />
          Privacy Policy
        </p>{" "}
        </em>
      </div>
      <div>
        <strong>ABOUT</strong>
        <em>
          <p>
            About Us
            <br />
            Mission Statement
          </p>{" "}
        </em>
      </div>
      <div class="socials">
        <span>
          <img src={fbImg} width="25px" alt={"facebook logo"}/>
        </span>
        <span>
          <img src={instaImg} width="25px" alt={"instagram logo"}/>
        </span>
        <span>
          <img src={tiktokImg} width="25px" alt={"tiktok logo"}/>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
