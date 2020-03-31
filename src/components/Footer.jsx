import React from "react";

function Footer() {
  const date = new Date();

  return (
    <footer>
      <div class="contact-me">
        <h2>Get In Touch</h2>
        <h3>If you love hot wings as much as I do.</h3>
        <p class="contact-message">
          Love hot wings as much as I do? Let's talk about how awesome they are! We can code while we eat hot wings!
        </p>
        <a class="btn" href="mailto:ilove@hotwings.com">
          CONTACT ME
        </a>
      </div>

      <div class="bottom-container">
        <a class="footer-link" href="https://www.linkedin.com/in/angela-yu-963a584b/">
          LinkedIn
        </a>
        <a class="footer-link" href="https://twitter.com/yu_angela">
          Twitter
        </a>
        <a class="footer-link" href="https://www.appbrewery.co/">
          Website
        </a>
        <p class="copyright">Copyright ©{date.getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
