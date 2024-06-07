// Header :: Start
$(window).scroll(function () {
  if ($(window).scrollTop() >= 150) {
    $("header").addClass("header-sm");
  } else {
    $("header").removeClass("header-sm");
  }
  didScroll = true;
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}

$(".nav-menu-button").on("click", function () {
  if (!$(this).hasClass("dropdown-toggle")) {
    $("body").toggleClass("mobile-menu-open");
  }
});

$(function () {
  var timer;
  $(window).scroll(function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      $("header").removeClass("nav-up").addClass("nav-down");
    }, 250);
  });
});
// Header :: End

// Mobile Javascript
if ($(window).width() <= 767) {
  $(".nav-link").on("click", function () {
    if (!$(this).hasClass("dropdown-toggle")) {
      $("body").removeClass("mobile-menu-open");
    }
  });
}

// Mobile Owl Carousel :: Starts
async function owlInitialize() {
  if ($(window).width() < 767) {
    $(".recent-carousel").owlCarousel("destroy");
    let splitDiv = $(".item-three")?.html();
    let newDivs = splitDiv?.split("<em></em>");
    var twoDivs =
      "<div class='item'>" +
      newDivs[0] +
      "</div><div class='item'>" +
      newDivs[1] +
      "</div>";

    $(twoDivs).insertAfter(".item-three");
    $(".item-three").remove();

    let teamTwo = $("#teamTwo").find("li");
    $("#teamOne").addClass("owl-carousel owl-theme");
    $("#teamOne").append(teamTwo);
    $("#teamTwo").remove();
    triggerMobileOwl();
  } else {
    $(".creators-grid").owlCarousel("destroy");
    $(".investors-grid").owlCarousel("destroy");
  }
}

function triggerMobileOwl() {
  $(".creators-grid").owlCarousel({
    loop: true,
    autoWidth: true,
    responsiveClass: true,
    responsive: {
      0: {
        center: true,
        margin: 14,
      },
    },
  });

  $(".investors-grid").owlCarousel({
    responsiveClass: true,
    autoWidth: true,
    responsive: {
      0: {
        margin: 10,
        items: 3,
      },
    },
  });

  $("#teamOne").owlCarousel({
    responsiveClass: true,
    loop: true,
    autoWidth: true,
    center: true,
    dots: false,
    responsive: {
      0: {
        margin: 30,
        items: 1,
      },
    },
  });

  $(".recent-carousel").owlCarousel({
    responsiveClass: true,
    loop: true,
    autoWidth: true,
    center: true,
    margin: 30,
  });
}

$(document).ready(function (e) {
  owlInitialize();
});

$(window).resize(function () {
  owlInitialize();
});
// Mobile Owl Carousel :: Ends

// Recent Section Carousel :: Starts
$(".recent-carousel.owl-carousel").owlCarousel({
  margin: 30,
  loop: true,
  autoWidth: true,
  nav: true,
  navText: [
    "<img src='images/pre-arrow.png'>",
    "<img src='images/next-arrow.png'>",
  ],
  responsive: {
    0: {
      margin: 14,
      items: 1,
    },
    768: {
      margin: 32,
      autoWidth: true,
    },
  },
});
// Recent Section Carousel :: Ends

// Auction Carousel :: Starts
$(".auction-carousel.owl-carousel").owlCarousel({
  margin: 24,
  loop: true,
  autoWidth: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      center: true,
      margin: 14,
      loop: true,
    },
    768: {
      margin: 30,
      loop: true,
    },
  },
});
// Auction Carousel :: Ends

// FAQs :: Starts
$(".accordian-title").on("click", function () {
  $(this).toggleClass("open");
  $(this).siblings(".accordian-content").slideToggle();
});
// FAQs :: Ends

// Footer :: Starts
$(".footer-links h5").on("click", function () {
  $(this).siblings("ul").slideToggle();
  $(this).toggleClass("open");
});
// Footer :: Ends
