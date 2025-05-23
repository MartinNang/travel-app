/**
 * A footer displayed on all pages and containing links to LinkedIn and GitHub as well as an email.
 */

import React, { useEffect } from "react";
import fbImg from "../../images/fb.png";
import instaImg from "../../images/insta.png";
import logoImg from "../../images/logo.png";
import mapImg from "../../images/map.png";
import tiktokImg from "../../images/tiktok.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer class="footer">
      <div>
        <strong>SUPPORT</strong>
        <em />{" "}
        <p>
          <Link
            to="/contact"
            style={{
              fontStyle: "italic",
            }}>
            Contact Us
          </Link>
          <br />
          <Link
            to="/cookies"
            style={{
              fontStyle: "italic",
            }}>
            Cookie Policy
          </Link>
          <br />
        </p>{" "}
        <em />
      </div>
      <div>
        <strong>ABOUT</strong>
        <em>
          <p>
            <HashLink
              to="/about-us"
              style={{
                fontStyle: "italic",
              }}>
              About Us
            </HashLink>
          </p>{" "}
        </em>
      </div>
      <div class="socials">
        <span>
        <Link
            to="/Socials"
            style={{
              fontStyle: "italic",
            }}>
            <img src={fbImg} width="25px" />
          </Link>
        </span>
        <span>
        <Link
            to="/Socials"
            style={{
              fontStyle: "italic",
            }}>
            <img src={instaImg} width="25px" />
          </Link>
        </span>
        <span>
          <Link
            to="/Socials"
            style={{
              fontStyle: "italic",
            }}>
            <img src={tiktokImg} width="25px" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
