"use strict";
(() => {
    var _a, _b, _c;
    const toggleAccordion = (accordionId, hiddenItemId, iconId, sectionId) => {
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
        }
        else {
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
    (_a = document.getElementById("faq-accordion1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        toggleAccordion("faq-accordion1", "faqHidden-item1", "faqIcon1", "sect1");
    });
    (_b = document.getElementById("faq-accordion2")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        toggleAccordion("faq-accordion2", "faqHidden-item2", "faqIcon2", "sect2");
    });
    (_c = document.getElementById("faq-accordion3")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        toggleAccordion("faq-accordion3", "faqHidden-item3", "faqIcon3", "sect3");
    });
})();
