let sidebar = document.querySelector(".sidebar");
let side = document.querySelector(".side");
let menu = document.querySelector(".menu");
let preview = document.querySelector(".preview");
let header = document.querySelector("header");
let list = document.querySelector(".list");
let searchInput = document.getElementById("searchInput");
let searchcontainer = document.querySelector(".search-container");
let iksds = document.querySelector(".iksds");
let container = document.querySelector(".container");
document.querySelectorAll("li").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll("li").forEach((item) => {
      item.classList.remove("active");
    });

    el.classList.add("active");
  });
});

// Toggle sidebar
side.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

// Toggle user menu
function toggleMenu() {
  menu.classList.toggle("active");
}

// Close sidebar when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".sidebar") && !e.target.closest(".side")) {
    sidebar.classList.remove("active");
  }
});
document.addEventListener("click", function (e) {
  if (!e.target.closest(".menu") && !e.target.closest(".iksds")) {
    menu.classList.remove("active");
  }
});
// ESC to close search container
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchcontainer.classList.remove("active");
  }
});

// Hide search on outside click

// Restore dark mode on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    header.classList.add("dark");
    sidebar.classList.add("dark");
    preview.classList.add("dark");
      menu.classList.add("dark");
      container.classList.add("dark");
searchcontainer.classList.add("dark");
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.color = "white";
    });
  }

  // Hide search container on project item click
  list.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      searchcontainer.classList.remove("active");
    });
  });
});

// Toggle dark mode
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark");
  header.classList.toggle("dark");
  sidebar.classList.toggle("dark");
  preview.classList.toggle("dark");
    menu.classList.toggle("dark");
    container.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
searchcontainer.classList.toggle("dark");
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.color = isDark ? "white" : "";
  });
}

// Search input listener
searchInput.addEventListener("input", searchProjects);

function openSearchBar() {
  searchcontainer.classList.toggle("active");

  const input = searchcontainer.querySelector("input"); 
  if (input) {
    input.focus(); 
  }
}


// Main search function
function searchProjects() {
  const filter = searchInput.value.toLowerCase();
  const items = list.querySelectorAll("li");
  let matchFound = false;

  items.forEach((item) => {
    const link = item.querySelector("a");

    // Store original text
    if (!link.hasAttribute("data-original")) {
      link.setAttribute("data-original", link.textContent);
    }

    const originalText = link.getAttribute("data-original");
    const text = originalText.toLowerCase();

    if (!filter) {
      link.innerHTML = originalText;
      item.style.display = "block";
      item.style.opacity = 1;
      matchFound = true;
      return;
    }

    if (text.includes(filter)) {
      item.style.display = "block";
      item.style.opacity = 0;
      setTimeout(() => {
        item.style.opacity = 1;
      }, 10);

      const regex = new RegExp(`(${filter})`, "gi");
      link.innerHTML = originalText.replace(regex, `<mark>$1</mark>`);
      matchFound = true;
    } else {
      item.style.opacity = 0;
      setTimeout(() => {
        item.style.display = "none";
      }, 200);
    }
  });

  // Fallback message
  let fallback = document.getElementById("noResults");
  if (!fallback) {
    fallback = document.createElement("li");
    fallback.id = "noResults";
    fallback.style.textAlign = "center";
    fallback.style.padding = "10px";
    fallback.style.color = "gray";
    fallback.textContent = "No matching projects found.";
    fallback.style.opacity = "0";
    list.appendChild(fallback);
  }

  if (!matchFound) {
    fallback.style.display = "block";
    setTimeout(() => (fallback.style.opacity = 1), 10);
  } else {
    fallback.style.opacity = 0;
    setTimeout(() => (fallback.style.display = "none"), 200);
  }
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then((e) => {
    console.log("Yehh! Service Worker registered", e);
  }).catch((e) => {
    console.log("Error registering");
  })
}
