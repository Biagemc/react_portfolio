import React from "react";

function Body() {
  return (
    <body>
      <header>
        <div id="navbar-id">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
              Moreno Biage
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/Biagemc" target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="https://www.linkedin.com/in/morenobiage/" target="_blank">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    <i class="fas fa-envelope fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div id="top-container">
        <div class="top-left-container">
          <div class="title-text">
            <h2>Hey there,</h2>
            <h2>I'm Moreno</h2>
          </div>
        </div>
        <div class="top-right-container">
          <div class="profile">
            <h2>
              a <span class="pro">FullStack</span> Developer
            </h2>
            <p class="intro">
              Developing ideas from paper and working towards a goal to be able to make the difference is my aspiration
              of as a professional, developing and drinking coffee is a hobby, passion that I enjoy on my day to day.
            </p>
          </div>
        </div>
      </div>

      <div class="skills">
        <div class="jumbotron jumbotron-fluid" id="mid-container">
          <div class="container">
            <h1 class="display-4">My Skills.</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>

        <div class="skill-row">
          <img class="code-img" src="./images/Ruby_On_Rails.png" alt="code-img"></img>

          <h3>Design & Development</h3>
          <p>
            I was 10 years old when I started diving into tech. I loved learning new tools on my computer and everything
            connected. Over time, gained experience developing projects in construction. But, my passion into tech push
            me back to do what I always wanted, developing apps.
          </p>
        </div>
        <div class="skill-row">
          <img class="chilli-img" src="images/chillies.png" alt="chillies-img"></img>
          <h3>Hot Wings Challenge</h3>
          <p>
            But my best skill is actually in eating hot wings. I am the undisputed queen of hot wing challenges. Ghost
            Peppers and Carolina Reapers are my favourite snacks.
          </p>
        </div>
      </div>
    </body>
  );
}

export default Body;
