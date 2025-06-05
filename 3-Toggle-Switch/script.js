const toggle = document.getElementById("toggleSwitch");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
