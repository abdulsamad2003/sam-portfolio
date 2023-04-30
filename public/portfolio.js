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
