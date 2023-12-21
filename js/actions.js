const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
      },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

});