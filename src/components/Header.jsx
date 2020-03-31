import React from "react";

function Header() {
  return (
    <header>
      <div id="navbar-id">
        <nav class="navbar navbar-expand-lg navbar">
          <a class="navbar-brand" href="#">
            moreno biage
          </a>
          <button class="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/Biagemc">
                  Github
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/morenobiage/">
                  LinkedIn
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
