(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);


function getUserLocation() {
      if (!navigator.geolocation) {
          alert("Geolocation is not supported by this browser.");
          return;
      }

      navigator.geolocation.getCurrentPosition(
          function (pos) {
              const latitude = pos.coords.latitude;
              const longitude = pos.coords.longitude;
              const accuracy = pos.coords.accuracy;

              console.log("Latitude :", latitude);
              console.log("Longitude:", longitude);
              console.log("Accuracy :", accuracy, "meters");

              alert(
                  "Your Location:\n" +
                  "Latitude: " + latitude + "\n" +
                  "Longitude: " + longitude + "\n" +
                  "Accuracy: " + accuracy + " meters"
              );

              // OPTIONAL → send to backend API
              /*
              fetch("/api/save-location", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ latitude, longitude, accuracy })
              });
              */
          },
          function (err) {
              console.log("Geolocation Error:", err.message);

              let message = "";
              switch (err.code) {
                  case err.PERMISSION_DENIED:
                      message = "Permission denied. Please allow location access.";
                      break;
                  case err.POSITION_UNAVAILABLE:
                      message = "Location unavailable.";
                      break;
                  case err.TIMEOUT:
                      message = "Location request timed out.";
                      break;
                  default:
                      message = "An unknown error occurred.";
              }

              alert(message);
          },
          {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
          }
      );
  }

