function displayProjects(data) {
  const projectList = document.querySelector("#project-list");
  data.forEach(gitProject => {
    const div = document.createElement("div");
    div.setAttribute("class", "project"),
      (div.innerHTML = `\n    <h3><a target="_blank" href="${
        gitProject.html_url
      }">${gitProject.name}</a></h3>\n    <p>${
        gitProject.description
      }</p>\n    <br />\n    <a target="_blank" class='gray' href="${
        gitProject.html_url
      }">See Code on <i class="fa fa-github fa-2x"></i></a>\n    ${
        gitProject.homepage
          ? "<br /><a class=\"gold\" target='_blank' href=" +
            `${gitProject.homepage}` +
            ">See Live</a>"
          : ""
      }\n  `),
      projectList.appendChild(div);
  });
}
async function getRepos() {
  try {
    const req = await fetch("https://api.github.com/users/Eduardo40/repos");
    const repo = await req.json();
    if (repo) {
      return repo;
    } else {
      return `Something went wrong!`;
    }
  } catch (error) {
    console.log(error);
  }
}

function setNavbar(e) {
  const dropdown = document.querySelector(".dropdown-nav");
  const navItemsLarge = document.querySelector(".navigation-items ul");
  const dropDownButton = document.querySelector(".control");
  if (this.innerWidth <= 768) {
    dropDownButton.classList.remove("hidden");
    navItemsLarge.classList.add("hidden");
  } else {
    dropDownButton.classList.add("hidden");
    dropdown.classList.remove("showDropDown");
  }
}

function setProjects() {
  getRepos().then(data => {
    displayProjects(data);
  });
}

function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown-nav");
  const dropdownItems = document.querySelector(".dropdown-nav ul");
  const dropdownItemsLinks = document.querySelectorAll(".nav-link");
  dropdownItems.classList.toggle("hideDropDown");
  dropdown.classList.toggle("hideDropDown");
  dropdown.classList.toggle("showDropDown");
  toggleShowHideLinks(dropdownItemsLinks);
}

function toggleShowHideLinks(links) {
  links = Array.from(links); //  from NodeList to array
  links.forEach(link => {
    link.classList.toggle("hidden");
  });
}
function dropdownButtonHandler() {
  const dropDownButton = document.querySelector(".control");
  dropDownButton.addEventListener("click", toggleDropdown);
}

function addSmoothScrollEvent(e) {
  e.preventDefault();
  if (e.target.className.includes("nav-link")) {
    document
      .querySelector(e.target.hash)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
function onloadHandler() {
  setProjects();
  setNavbar();
  dropdownButtonHandler();
}

function onResizeHandler() {
  setNavbar();
}

window.addEventListener("load", onloadHandler);
window.addEventListener("resize", onResizeHandler);
window.addEventListener("click", addSmoothScrollEvent);
