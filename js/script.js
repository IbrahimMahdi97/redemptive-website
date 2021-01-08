/* ==============================
            Mobile Menu
================================= */
$(document).ready(function() {
  //show mobile nav
  $("#mobile-nav-open-btn").click(function() {
    $("#mobile-nav").css("height", "100%");
  });
  //hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
    $("#mobile-nav").css("height", "0%");
  });
});
