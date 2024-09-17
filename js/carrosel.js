import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

export default function carrosel() {
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
}