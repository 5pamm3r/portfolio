function styles(): void {
  const toggleAccordion = (accordionId: string, hiddenItemId: string, iconId: string, sectionId: string): void => {
    const accordion = document.getElementById(accordionId);
    const container = document.getElementById(hiddenItemId);
    const icon = document.getElementById(iconId);
    const section = document.getElementById(sectionId);

    if (!accordion || !container || !icon || !section) {
      return;
    }

    const isHidden = container.classList.contains("faq-hidden");
    const windowWidth = window.innerWidth;

    if (isHidden) {
      accordion.setAttribute("aria-expanded", "true");
      container.classList.remove("faq-hidden");
      container.classList.add("faq-visible");
      icon.classList.add("active");
      section.classList.add("active");
      section.removeAttribute("hidden");
      container.style.height = windowWidth >= 720 ? "200px" : "280px";
      setTimeout(() => {
        section.style.opacity = "1";
      }, 300);
    } else {
      accordion.setAttribute("aria-expanded", "false");
      container.classList.remove("faq-visible");
      container.classList.add("faq-hidden");
      icon.classList.remove("active");
      container.style.height = "20px";
      section.classList.remove("active");
      setTimeout(() => {
        section.setAttribute("hidden", "");
        section.style.opacity = "0";
      }, 300);
    }
  };

  document.getElementById("faq-accordion1")?.addEventListener("click", () => {
    toggleAccordion("faq-accordion1", "faqHidden-item1", "faqIcon1", "sect1");
  });

  document.getElementById("faq-accordion2")?.addEventListener("click", () => {
    toggleAccordion("faq-accordion2", "faqHidden-item2", "faqIcon2", "sect2");
  });

  document.getElementById("faq-accordion3")?.addEventListener("click", () => {
    toggleAccordion("faq-accordion3", "faqHidden-item3", "faqIcon3", "sect3");
  });
}

export { styles };
