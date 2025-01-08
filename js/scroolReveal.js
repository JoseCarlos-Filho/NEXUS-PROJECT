export default function scroolR() {
    window.revelar = ScrollReveal({reset: true});
    // topo do site
    revelar.reveal('.scroll-efect', 
    {
        duration: 2000, 
        origin: 'top', 
        distance: '100px'
    });

    // banner page
    revelar.reveal('.scroll-banner-efect', 
    {
        duration: 3000, 
        origin: 'left', 
        distance: '100px'
    });

    revelar.reveal('.scroll-carrossel-efect', 
    {
        duration: 3000, 
        origin: 'left', 
        distance: '100px'
    });
    
}