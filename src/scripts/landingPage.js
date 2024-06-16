import AOS from 'aos';

$('head').append(
  '<link rel="stylesheet" href="/src/common/owlcarousel/owl.carousel.min.css" />',
);
// $('head').append(
//   '<link rel="stylesheet" href="/src/common/owlcarousel/owl.theme.default.min.css" />',
// );
// $('head').append(
//   '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />',
// );
// $('head').append(
//   '<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />',
// );
// $('head').append('<link rel="stylesheet" href="/src/css/landingstyle.css" />');
// $('head').append(
//   '<link rel="preconnect" href="https://fonts.googleapis.com" />',
// );
// $('head').append('<link rel="preconnect" href="https://fonts.gstatic.com" />');
// $('head').append(
//   '<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />',
// );
// $('head').append(
//   '<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />',
// );

const navbar = $('navbar');

// Initialize AOS
AOS.init();

// Add box shadow to navbar when user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('box-shadow-high');
  } else {
    navbar.classList.remove('box-shadow-high');
  }
});

// Initialize Owl Corousel
// $(document).ready(function () {
//   var owl = $('.owl-carousel');
//   owl.owlCarousel({
//     center: true,
//     loop: true,
//     margin: 30,
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       1000: {
//         items: 2,
//       },
//     },
//   });
//   $('.arrow-next').click(function () {
//     owl.trigger('next.owl.carousel');
//   });
//   $('.arrow-prev').click(function () {
//     owl.trigger('prev.owl.carousel');
//   });
// });
