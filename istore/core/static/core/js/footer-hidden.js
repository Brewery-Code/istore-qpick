document.addEventListener("DOMContentLoaded", function () {
  function checkScreenWidth() {
    if (window.innerWidth <= 992) {
      document.getElementById("footer").style.display = "none";
    } else {
      document.getElementById("footer").style.display = "block";
    }
  }

  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
});