"use strict";
let bars = document.querySelector(".bars"),
  closeSidebar = document.querySelector(".close-sidebar"),
  sidebar = document.querySelector(".sidebar");
bars.addEventListener("click", () => {
  sidebar.classList.add("toggle-sidebar");
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("toggle-sidebar");
});
const categoryButtons = document.querySelectorAll(".categories-sc .button");
const cards = document.querySelectorAll(".cards-sc .card");
function filterCards(category) {
  cards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
  categoryButtons.forEach((btn) => btn.classList.remove("active"));
  const activeButton = document.querySelector(`a[data-category="${category}"]`);
  activeButton.classList.add("active");
}
const savedCategory = localStorage.getItem("selectedCategory");
const initialCategory = savedCategory || "all";
filterCards(initialCategory);
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    localStorage.setItem("selectedCategory", category);
    filterCards(category);
  });
});
const sendEmailBtns = document.querySelectorAll(".send-email-btn");
const emailForm = document.querySelector(".email-form");
const darkerOverlay = document.querySelector(".darker-overlay");
const formCloseBtn = document.querySelector("#close-email-form");
const acceptPrivacyCheckbox = document.getElementById("accept-terms");
const formSubmitBtn = document.getElementById("email-form_send");
sendEmailBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!emailForm.classList.contains("show-form")) {
      darkerOverlay.style.display = "block";
      emailForm.style.display = "flex";
      sidebar.classList.remove("toggle-sidebar");
      setTimeout(() => {
        emailForm.classList.add("show-form");
        darkerOverlay.style.opacity = "1";
      }, 100);
    } else {
      emailForm.classList.remove("show-form");
      darkerOverlay.style.opacity = "0";
      setTimeout(() => {
        emailForm.style.display = "none";
        darkerOverlay.style.display = "none";
      }, 300);
    }
  });
});
formCloseBtn.addEventListener("click", () => {
  emailForm.classList.remove("show-form");
  darkerOverlay.style.opacity = "0";
  setTimeout(() => {
    emailForm.style.display = "none";
    darkerOverlay.style.display = "none";
  }, 300);
});
document.addEventListener("click", (e) => {
  const isClickInsideForm = emailForm.contains(e.target);
  const isClickOnButton = Array.from(sendEmailBtns).some((btn) =>
    btn.contains(e.target)
  );
  if (!isClickInsideForm && !isClickOnButton) {
    emailForm.classList.remove("show-form");
    darkerOverlay.style.opacity = "0";
    setTimeout(() => {
      emailForm.style.display = "none";
      darkerOverlay.style.display = "none";
    }, 300);
  }
});
formSubmitBtn.disabled = true;
acceptPrivacyCheckbox.addEventListener("change", function () {
  formSubmitBtn.disabled = !acceptPrivacyCheckbox.checked;
});
