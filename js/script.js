/* Show & Hide Navigation */
$(document).ready(function() {
  //show on page load
  showHideNav();
  $(window).scroll(function() {
    //show on window scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 70) {
      //show navigation bar
      $("nav").addClass("white-nav-top");
      // Show Back to Top Button
      $("#back-to-top").fadeIn();
    } else {
      //hide navigation bar
      $("nav").removeClass("white-nav-top");
      // Hide Back to Top Button
      $("#back-to-top").fadeOut();
    }
  }
});

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
