$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: true,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 3000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: true,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 3
                }
            }
        });            
    }

})

const d = new Date();
document.getElementById("currentyear").innerHTML = d.getFullYear();

window.sr = ScrollReveal({ reset: true, easing: 'cubic-bezier(0.5, 0, 0, 1)',interval: 16 });

// HOME-PAGE-SCROLL-REVEAL=========================================HOME-PAGE-SCROLL-REVEAL
sr.reveal('.intro-card-2, .contact-us-2, .industries-standing-fan, .contact-button, .gallery-btn, .icon-holder .fas ', {
  distance: '200px',
  duration: 1200,
  origin: 'bottom',
  scale: 0.85,
  opacity: 0
});
sr.reveal('.cooling-tech-img, .special-sale-text,  .ceiling-industries-card-1, .intro-card-1, .contact-us-1, .years, .qualities-icon .fas, .fan-specifications', {
  // distance: '200px',
  duration: 1200,
  origin: 'left',
  scale: 0.85,
  opacity: 0
});
sr.reveal('.cooling-tech-text, .special-sale-img, .social-icons,  .ceiling-industries-card-2, .intro-card-3, .contact-us-3', {
  // distance: '200px',
  duration: 1200,
  origin: 'right',
  scale: 0.85,
  opacity: 0
});
sr.reveal('.team-header', {
  distance: '200px',
  duration: 1200,
  origin: 'top',
  scale: 0.85,
  opacity: 0
});

// HOME-PAGE-SCROLL-REVEAL=========================================HOME-PAGE-SCROLL-REVEAL