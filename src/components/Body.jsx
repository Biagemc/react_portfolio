import React from "react";

function Body() {
  return (
    <body>
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
      <div class="top-container">
        <img class="top-cloud" src="./images/cloud.png" alt="cloud"></img>
        <div class="title-text">
          <h1>Hey there, I'm Moreno</h1>
          <h2>
            a <span class="pro">FullStack</span> Developer
          </h2>
        </div>
        <img class="bottom-cloud" src="images/cloud.png" alt="cloud"></img>
        <img class="mountain" src="images/mountain.png" alt="mountain-img"></img>
      </div>
      <div class="middle-container">
        <div class="profile">
          <img src="" alt=""></img>
          <h2>Hi</h2>
          <p class="intro">
            I am a FullStack Sofwater Developer. I'm the founder and CTO of The App Brewery. I ❤️ coffee and brew my own
            beers.
          </p>
        </div>

        <div class="skills">
          <h2>My Skills.</h2>
          <div class="skill-row">
            <img class="code-img" src="" alt="code-img"></img>

            <h3>Design & Development</h3>
            <p>
              I was 10 years old when I started diving into tech. I loved learning new tools on my computer and
              everything connected. Over time, gained experience developing projects in construction. But, my passion
              into tech push me back to do what I always loved, developing apps.
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
      </div>
    </body>
  );
}

export default Body;
