// contact info showing

let arrowBtn = document.getElementById("down-menu");
let contactShowing = document.getElementById("contact-down");
let spanContact = document.getElementById("show-contact");

arrowBtn.addEventListener("click", () => {
  // contactShowing.classList.toggle("showing-contact")
  if (contactShowing.style.display == "block") {
    contactShowing.style.display = "none";
    arrowBtn.style.backgroundColor = "#1111";
    spanContact.style.color = "#fff";
    contactShowing.style.transition = "all s";
  } else {
    contactShowing.style.display = "block";
    arrowBtn.style.backgroundColor = "#20d9dffa";
    spanContact.style.color = "#000";
    contactShowing.style.transition = "all 5s";
  }
});

// filteration of projects
const buttons = document.querySelectorAll(".select-btn");
const storeItems = document.querySelectorAll(".portfolio-project");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filterButtons = e.currentTarget.dataset.item;
    // console.log(filterButtons);

    storeItems.forEach((image) => {
      if (filterButtons === "all") {
        // console.log(image);
        image.style.display = "block";
      } else {
        if (image.classList.contains(filterButtons)) {
          image.style.display = "block";
          // console.log(image)
        } else {
          image.style.display = "none";
        }
      }
    });
  });
});
// filteration of projects Ends

// drop-down selecting category
let category = document.getElementById("category");
let selectionOption = document.getElementById("selecting-option");
let colorCategory = document.getElementById("color-category");
category.addEventListener("click", () => {
  if (selectionOption.style.display == "block") {
    selectionOption.style.display = "none";
    category.style.backgroundColor = "#1111";
    colorCategory.style.color = "#fff";
    colorCategory.style.fontWeight = "400";
  } else {
    selectionOption.style.display = "block";
    colorCategory.style.color = "#0000";
    colorCategory.style.fontWeight = "600";
    category.style.backgroundColor = "#20d9dffa";
  }
});

function show(anything) {
  document.getElementById("color-category").value = anything;
  document.getElementById("color-category").style.color = "black";
  let selectionOption = document.getElementById("selecting-option");
  selectionOption.addEventListener("click", () => {
    selectionOption.style.display = "none";
    selectionOption.style.transition = "all 1s";
  });
}
// drop-down selecting category ends



const canvas = document.querySelector("Canvas");
const ctx = canvas.getContext("2d");
const PARTICLES_ARRAY = [];
const COLORS = [
  "#20d9dffa",
  "#20d9dffa"
];
const SPEEDS = [0.2, -0.2, 0.3, -0.3, 0.4, -0.4, 1, -1];
const SIZES = [2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8]

// function definitions
function main() {
  setCanvasDimensions();
  window.addEventListener("resize", setCanvasDimensions);
  animate();
}

function setCanvasDimensions() {
  const contact = document.getElementById("profile");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

function handleParticles() {
  for (let i = 0; i < PARTICLES_ARRAY.length; i++) {
    PARTICLES_ARRAY[i].update();
    PARTICLES_ARRAY[i].draw();
  }
}

// class definitions
class Particle {
  constructor() {
    this.x = Math.random() * window.innerWidth + 1;
    this.y = Math.random() * window.innerHeight + 1;
    this.size = SIZES[Math.floor(Math.random() * (SIZES.length - 1)) + 1];
    this.speedX = SPEEDS[Math.floor(Math.random() * (SPEEDS.length - 1)) + 1];
    this.speedY = SPEEDS[Math.floor(Math.random() * (SPEEDS.length - 1)) + 1];
    this.color = COLORS[Math.floor(Math.random() * (COLORS.length - 1)) + 1];
  }

  update() {
    if (this.x < 1) {
      this.speedX = Math.max(this.speedX, -this.speedX);
      this.x += this.speedX;
    } else {
      this.x += this.speedX;
    }

    if (this.y < 1) {
      this.speedY = Math.max(this.speedY, -this.speedY);
      this.y += this.speedY;
    } else {
      this.y += this.speedY;
    }

    if (this.x > window.innerWidth - 1) {
      this.speedX = Math.min(this.speedX, -this.speedX);
      this.x += this.speedX;
    } else {
      this.x += this.speedX;
    }

    if (this.y > window.innerHeight - 1) {
      this.speedY = Math.min(this.speedY, -this.speedY);
      this.y += this.speedY;
    } else {
      this.y += this.speedY;
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < 180; i++) {
  PARTICLES_ARRAY.push(new Particle());
}

main();

