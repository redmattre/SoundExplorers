const footer = document.getElementById('footer');

window.addEventListener('scroll', function () {
  // Ottieni la posizione corrente e l'altezza totale della pagina
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Controlla se l'utente ha raggiunto la fine della pagina
  if (scrollTop + windowHeight >= documentHeight) {
    footer.style.opacity = '1';
    footer.style.pointerEvents = "all";
    // footer.style.display = 'block';
  } else {
    footer.style.opacity = '0';
    footer.style.pointerEvents = "none";
    // footer.style.display = 'none';
  }
});