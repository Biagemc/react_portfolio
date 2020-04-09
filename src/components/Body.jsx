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
        <div class="top-left-container flex-child">
          <div class="title-text">
            <h2>Hey there,</h2>
            <h2>I'm Moreno</h2>
          </div>
        </div>
        <div class="top-right-container flex-child">
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
            <h1 class="display-4"></h1>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
            <div class="card">
              <img class="card-img-top" src="https://miro.medium.com/max/2544/1*6kiaBHT85iJQvOjRnK6UxA.png" />

              <div class="card-block">
                <h4 class="card-title">Bjj App</h4>

                <div class="card-text">
                  A portal where you can browse through positions to practice and bookmark, post questions and get to
                  know the details of your favourite positions
                </div>
              </div>
              <div class="card-footer">
                <a href="https://github.com/Biagemc/mini_capstone_vue_app">Git hub Link</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
            <div class="card">
              <img class="card-img-top" src="https://miro.medium.com/max/2544/1*6kiaBHT85iJQvOjRnK6UxA.png" />

              <div class="card-block">
                <h4 class="card-title">Bjj App</h4>

                <div class="card-text">
                  A portal where you can browse through positions to practice and bookmark, post questions and get to
                  know the details of your favourite positions
                </div>
              </div>
              <div class="card-footer">
                <a href="https://github.com/Biagemc/mini_capstone_vue_app">Git hub Link</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
            <div class="card">
              <img class="card-img-top" src="https://miro.medium.com/max/2544/1*6kiaBHT85iJQvOjRnK6UxA.png" />

              <div class="card-block">
                <h4 class="card-title">Bjj App</h4>

                <div class="card-text">
                  A portal where you can browse through positions to practice and bookmark, post questions and get to
                  know the details of your favourite positions
                </div>
              </div>
              <div class="card-footer">
                <a href="https://github.com/Biagemc/mini_capstone_vue_app">Git hub Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Body;
