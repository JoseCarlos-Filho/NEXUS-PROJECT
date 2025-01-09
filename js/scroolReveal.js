export default function scroolR() {
    window.revelar = ScrollReveal({reset: true});
    // topo do site

    revelar.reveal('.scroll-efect', 
    {
        duration: 2000, 
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

    revelar.reveal('.scroll-carrossel-titulo-efect', 
    {
        duration: 2000, 
        distance: '100px',
        delay: 500
    });

    revelar.reveal('.scroll-carrossel-efect', 
    {
        duration: 2000, 
        origin: 'left', 
        distance: '100px',
        delay: 1000
    });

    // titulo e conteudo de depoimento 
    
    revelar.reveal('.scroll-content-titulo-efect', 
    {
        duration: 2000, 
        origin: 'left', 
        distance: '100px',
        delay: 500
    });
    
    revelar.reveal('.scroll-content-descricao-efect', 
    {
        duration: 2000, 
        origin: 'right', 
        distance: '100px',
        delay: 1000
    });

    revelar.reveal('.scroll-depoimentos-efect', 
    {
        duration: 2000, 
        // origin: 'right', 
        distance: '100px',
        delay: 1500
    });
}