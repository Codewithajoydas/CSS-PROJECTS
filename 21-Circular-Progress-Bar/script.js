const allProgressBars = document.querySelectorAll(".circular-progress");

allProgressBars.forEach((progress) => {
  const value = parseInt(progress.getAttribute("data-value"));
  progress.style.background = `conic-gradient( #4caf50 0% ${value}%,rgba(151, 224, 122, 0.34) ${value}% 100%)`;

  const innerText = progress.querySelector(".inner-text");
  if (innerText) {
    innerText.textContent = `${value}%`;
  }
});
