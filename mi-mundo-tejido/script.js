const counters = document.querySelectorAll(".numero");

function animar(counter){
  const target = +counter.dataset.target;
  const duracion = 1500;
  const inicio = performance.now();
  function paso(ahora){
    const progreso = Math.min((ahora - inicio) / duracion, 1);
    counter.innerText = Math.round(target * progreso);
    if (progreso < 1) requestAnimationFrame(paso);
  }
  requestAnimationFrame(paso);
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animar(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  counters.forEach(c => observer.observe(c));
} else {
  counters.forEach(c => c.innerText = c.dataset.target);
}