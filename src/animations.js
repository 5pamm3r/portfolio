function topSlide() {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const projects = document.querySelectorAll(".project__container");
  const profile = document.getElementById("imgProfile");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  observer.observe(home);
  observer.observe(about);
  observer.observe(profile);
  projects.forEach((item) => observer.observe(item));
}
export { topSlide };
