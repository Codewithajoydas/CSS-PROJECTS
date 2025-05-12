let cr = document.querySelector(".cr");
let btnb = document.querySelector(".btnb"); // Left button
let btp = document.querySelector(".btnp"); // Right button

btnb.addEventListener("click", function () {
  cr.scrollLeft -= 300;
  updateButtons();
});

btp.addEventListener("click", function () {
  cr.scrollLeft += 300;
  updateButtons();
});

// Function to update button visibility
function updateButtons() {
  if (cr.scrollLeft <= .1) {
    btnb.style.opacity = "0";
  } else {
    btnb.style.opacity = "1";
  }

  if (cr.scrollLeft + cr.offsetWidth >= cr.scrollWidth) {
    btp.style.opacity = "0";
  } else {
    btp.style.opacity = "1";
  }
}

updateButtons();

let acc = document.querySelectorAll(".accordion h2");

acc.forEach((el) => {
  el.addEventListener("click", function () {
    let panel = this.nextElementSibling;
    let isActive = panel.classList.contains("active");

    document.querySelectorAll(".accordion p").forEach((p) => {
      p.classList.remove("active");
    });

    if (!isActive) {
      panel.classList.add("active");
    }
  });
});
