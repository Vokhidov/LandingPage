$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: [
    "<button class='carousel-icon'><i class='icon-left'></i></button>",
    "<button class='carousel-icon'><i class='icon-right'></i></button>",
  ],
  items: 1,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
      dots: false,
    },
    1000: {
      items: 1,
      nav: true,
      dots: false,
      loop: true,
    },
    1210: {
      items: 1,
      nav: true,
      dots: false,
      loop: true,
    },
  },
});

$(document).ready(function () {
  $(".med-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-button button-left'><i class='icon-left-open' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-button button-right'><i class='icon-right-open' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar-list");
  const navLinks = document.querySelectorAll(".navbar-list li");

  burger.addEventListener("click", () => {
    //toogle nav
    nav.classList.toggle("nav-active");

    //animation
    burger.classList.toggle("toggle");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navSlide();
AOS.init();
