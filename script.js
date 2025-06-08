let sidebar = document.querySelector(".sidebar");
let side = document.querySelector(".side");
let menu = document.querySelector(".menu");

// Toggle sidebar on button click
side.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

// Toggle menu
function toggleMenu() {
  menu.classList.toggle("active");
}

// Close sidebar when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".sidebar") && !e.target.closest(".side")) {
    sidebar.classList.remove("active");
  }
});
