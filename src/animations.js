function topSlide() {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const projects = document.querySelectorAll(".projectSlide");
  const logo = document.getElementById("linkedInContact");
  const logo2 = document.getElementById("twitterContact");
  const logo3 = document.getElementById("githubContact");
  // const downArrow = document.getElementById('downArrow')
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
  projects.forEach((item) => observer.observe(item));
  observer.observe(logo);
  observer.observe(logo2);
  observer.observe(logo3);
  // observer.observe(downArrow)
  observer.observe(profile);
}
export { topSlide };
