// Hide Preloader ------------
const preloader = document.getElementById("loader-wrapper");

window.onload = setTimeout(function () {
  if (preloader) preloader.hidden = true;
  if (preloader) preloader.style.display = "none";
}, 2000);

window.onload = function () {
  preloader.classList.add("hide-preloader");
};
