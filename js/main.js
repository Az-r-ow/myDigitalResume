// Dinamically rendering the projects

// Getting the paths of the logos
const cpp = "./images/cpp_logo.png";
const c = "./images/c_logo.png";
const css = "./images/css_logo.png";
const discord = "./images/discord_logo.png";
const html = "./images/html_logo.png";
const js = "./images/js_logo.png";
const mongodb = "./images/mongodb_logo.png";
const nodejs = "./images/nodejs_logo.png";
const python = "./images/python_logo.png";

const projects = [
  {
    name: "NeuralNet",
    repoUrl: "https://github.com/Az-r-ow/NeuralNet",
    technos: [cpp, python],
    description:
      "My attempt on creating a general purpose Neural Network that can be parametrized to your liking.",
  },
  {
    name: "Connect (Puissance) 4 Terminal",
    technos: [c],
    repoUrl: "https://github.com/Az-r-ow/connect4#readme",
    description:
      "Terminal implementation of the connect 4 game that could be enjoyed with an adversary or against the computer. The experience is powered with ncurses.",
  },
  {
    name: "NFT Project Ranker",
    repoUrl: "https://github.com/Az-r-ow/rarity-bot",
    technos: [discord, js, mongodb, nodejs],
    description:
      "I implemented an algorithm that calculates the rarity score of an NFT in a certain Collection based on the probability of recurrence of its trait. Then the program ranks the NFTs in the collection and stores them in the Database. The user could check the rarity and rank through the discord bot made just for the project.",
  },
  {
    name: "Password Vault",
    repoUrl: "https://github.com/Az-r-ow/newpwdserver#readme",
    technos: [mongodb, nodejs, js],
    description:
      "This project was the final project for the CS50 course. I used express for the backend and EJS for the front and a library for encryption called bcrypt. Nothing fancy I know ! It's sole purpose was to familiarise with the concepts learned throughout the course such as data structures, resource management and security.",
  },
  {
    name: "Digital Resume",
    technos: [html, css, js],
    repoUrl: "https://github.com/Az-r-ow/myDigitalResume#readme",
    description:
      "The digital resume is the website you're currently on right now. I could've made it with some frawework, but to go with the old school theme I decided to go with jquery, html and css (and ejs but shhhhh).",
  },
  {
    name: "Discord Casino Bot",
    technos: [js, nodejs, discord],
    repoUrl: "https://github.com/Az-r-ow/casino-bot",
    description:
      "I created this bot for an NFT project of casino partouche. It has its own currency system, where user can claim daily amounts of money and gamble them on games like BlackJack, High Low, Roulette and much more.",
  },
  {
    name: "AI Tic-Tac-Toe",
    technos: [python],
    repoUrl: "https://github.com/Az-r-ow/cs50-ai#readme",
    description:
      "This was an assignment from the CS50 AI course, I have my progress in the course so far on my github account with my commentary on each project in the README of the repo.",
  },
];

const projectsEjs = `
  <% projects.forEach((project, index) => { %>
    <div class="project-div" id="<%= index %>">
      <h3><%=project.name%></h3>
      <div class="information" id="<%= index %>">
        <% project.technos.forEach((tech) => { %>
          <span><img src=<%=tech %> width="50" height="50"></span>
        <% }) %>
        <p><%=project.description%></p>
        <div class="play-btn-div">
          <span><a href=<%= project.repoUrl %> target="_blank"><img src="./images/play_btn.png" height="50" width="150" alt="play_btn" /></a><span>
        </div>
      </div>
    </div>
  <% }) %>
`;
// Render the project's section
const projectsHtml = ejs.render(projectsEjs, { projects: projects });
$(".projects-section").append(projectsHtml);

// Hide the informatiom
$(".information").css("display", "none");

// On Click display them
$(".project-div").click(function () {
  const id = $(this).attr("id");

  $(`#${id}.information`).slideToggle("slow");
});

// Starting the page from the top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Using this function to wait for the promise
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Getting the table rows
let rows = document.querySelectorAll("tr");

// Using the observer api to check when the element is on the screen
const observer = new IntersectionObserver(async (entries) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      for (const row of rows) {
        for (const td of row.children) {
          await sleep(100);
          if (!td.classList.length) continue;
          td.style.opacity = 1;
        }
      }
      return;
    }
    removeWhiteBars();
  });
});

// When the table is visible load the rows
let table = document.querySelector("table");
observer.observe(table);

// Getting rid of the bars
const removeWhiteBars = () => {
  for (let i = 0; i < rows.length; i++) {
    for (const td of rows[i].children) {
      if (!td.classList.length) continue;
      td.style.opacity = 0;
    }
  }
};

removeWhiteBars();
