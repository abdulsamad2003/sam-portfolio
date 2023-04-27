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
  } else {
    contactShowing.style.display = "block";
    arrowBtn.style.backgroundColor = "#20d9dffa";
    spanContact.style.color = "#000";
  }
});

// select category

let category = document.getElementById("category");
let selectionOption = document.getElementById("selecting-option");
let colorCategory = document.getElementById("color-category");
category.addEventListener("click", () => {
  // contactShowing.classList.toggle("showing-contact")
  if (selectionOption.style.display == "block") {
    selectionOption.style.display = "none";
    category.style.backgroundColor = "#1111";
    colorCategory.style.color = "#fff";
    colorCategory.style.fontWeight = "100";
  } else {
    selectionOption.style.display = "block";
    category.style.backgroundColor = "#20d9dffa";
    colorCategory.style.color = "#000";
    colorCategory.style.fontWeight = "400";
  }
});

