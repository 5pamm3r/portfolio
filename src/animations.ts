((): void => {
  const home: HTMLElement | null = document.getElementById("home");
  const projects: NodeListOf<Element> = document.querySelectorAll(".project__container");

  const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  if (home) {
    observer.observe(home);
  }
  projects.forEach((item: Element) => observer.observe(item));
})();
