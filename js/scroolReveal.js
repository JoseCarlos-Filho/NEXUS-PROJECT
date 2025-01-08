export default function scroolR() {
    window.revelar = ScrollReveal({reset: true});
    // topo do site
    revelar.reveal('.scroll-efect', 
    {
        duration: 3000, 
        origin: 'top', 
        distance: '100px',
        delay: 500
    });

    // banner page
    revelar.reveal('.scroll-banner-efect', 
    {
        duration: 2000, 
        origin: 'left', 
        distance: '100px',
        delay: 500
    });

    revelar.reveal('.scroll-banner-img-efect', 
    {
        duration: 2000, 
        origin: 'right', 
        distance: '100px',
        delay: 1500
    });

    // carrossel
    revelar.reveal('.scroll-carrossel-efect', 
    {
        duration: 2000, 
        origin: 'left', 
        distance: '100px',
        delay: 500
    });
    
}