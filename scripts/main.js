// IMAGE
const myImage = document.getElementById("photo-img");

// BUTTONS
const homeButton = document.getElementById("home-button");
const aboutButton = document.getElementById("about-button");
const skillsButton = document.getElementById("skills-button");

// SECTIONS
const homeSection = document.getElementById("home-section");
const aboutSection = document.getElementById("about-section");
const skillsSection = document.getElementById("skills-section");

// HIDE SECTIONS
homeSection.style.display = "flex";
aboutSection.style.display = "none";
skillsSection.style.display = "none";

// HANDLERS
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imgs/image.png") {
    myImage.setAttribute("src", "imgs/image2.png");
  } else {
    myImage.setAttribute("src", "imgs/image.png");
  }
};

homeButton.onclick = () => {
  homeSection.style.display = "flex";
  aboutSection.style.display = "none";
  skillsSection.style.display = "none";
}

aboutButton.onclick = () => {
  homeSection.style.display = "none";
  skillsSection.style.display = "none";
  aboutSection.style.display = "flex";
}

skillsButton.onclick = () => {
  homeSection.style.display = "none";
  aboutSection.style.display = "none";
  skillsSection.style.display = "flex";
}
