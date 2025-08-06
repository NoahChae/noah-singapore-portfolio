document.addEventListener("DOMContentLoaded", () => {
  const hiddenItems = document.querySelectorAll(".is-hidden");

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        entry.target.classList.remove("is-hidden");
        obs.unobserve(entry.target);         // animate only once
      }
    });
  }, { threshold: 0.15 });

  hiddenItems.forEach(el => io.observe(el));
});
