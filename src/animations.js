function topSlide() {
  const home = document.getElementById("home");
  const projects = document.querySelectorAll(".project__container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  observer.observe(home);
  projects.forEach((item) => observer.observe(item));
}
export { topSlide };
