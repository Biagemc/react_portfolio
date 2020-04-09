import React from "react";

function Footer() {
  const date = new Date();

  return (
    <footer>
      <div class="contact-me">
        <h2 class="contact-me">Get In Touch</h2>
        <h3 class="contact-me">If you enjoy a good coffee as much as I do.</h3>
        <p class="contact-message">
          Let's talk about how awesome they programming is! We can code while we drink coffee!
        </p>
        <button type="button" class="btn btn-outline-light" href="biagemc@gmail.com">
          CONTACT-ME
        </button>
      </div>

      <div class="bottom-container">
        <a id="icon" class="footer-link" href="https://www.linkedin.com/in/angela-yu-963a584b/">
          <i class="fab fa-linkedin fa-3x"></i>
        </a>
        <a id="icon" class="footer-link" href="https://twitter.com/yu_angela">
          <i class="fab fa-github fa-3x"></i>
        </a>
        <p class="copyright">Copyright ©{date.getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
