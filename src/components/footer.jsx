/**
 * A footer displayed on all pages and containing links to LinkedIn and GitHub as well as an email.
 */

import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer class="footer">
      {/* Link to contact form */}
      <section class="contact"></section>
    </footer>
  );
};

export default Footer;
