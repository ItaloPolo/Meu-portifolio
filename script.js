// Efeito de fade nos cards de projetos
document.addEventListener('DOMContentLoaded', () => {
  const projetos = document.querySelectorAll('.projeto');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });


  // Efeito fade-in ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('aparecer');

  // Transição ao clicar em links internos
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    const url = link.getAttribute('href');
    if (url && url.endsWith('.html')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.remove('aparecer');
        setTimeout(() => {
          window.location.href = url;
        }, 400); // tempo do fade-out
      });
    }
  });
});


  projetos.forEach(projeto => observer.observe(projeto));
});

console.log("Portfólio de Ítalo Polo carregado!");
