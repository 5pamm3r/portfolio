function styles() {
  document.getElementById("faq-accordion1").addEventListener("click", (e) => {
    const container = document.getElementById("faqHidden-item1");
    const windowWidth = window.innerWidth;
    if (container.classList.contains("faq-hidden")) {
      container.classList.remove("faq-hidden");
      container.classList.add("faq-visible");
      document.getElementById("faqIcon1").classList.add("active");
      document.getElementById("sect1").classList.add("active");
      document.getElementById("sect1").removeAttribute("hidden");
      setTimeout(() => {
        document.getElementById('sect1').style.opacity = '1';
      }, 320);
      if(windowWidth >= 720) {
        document.getElementById("faqHidden-item1").style.height = '200px'
      } else if(windowWidth < 720 ) {
        document.getElementById("faqHidden-item1").style.height = '250px'
      }
    } else {
      container.classList.remove("faq-visible");
      container.classList.add("faq-hidden");
      document.getElementById("faqIcon1").classList.remove("active");

      document.getElementById("faqHidden-item1").style.height = "20px";
      document.getElementById("sect1").classList.remove("active");
      setTimeout(() => {
        document.getElementById("sect1").setAttribute("hidden", "");
        document.getElementById('sect1').style.opacity = '0';
      }, 300);

    }
  });
  document.getElementById("faq-accordion2").addEventListener("click", (e) => {
    const container = document.getElementById("faqHidden-item2");
    if (container.classList.contains("faq-hidden")) {
      container.classList.remove("faq-hidden");
      container.classList.add("faq-visible");
      document.getElementById("faqIcon2").classList.add("active");
      document.getElementById("sect2").classList.add("active");
      document.getElementById("sect2").removeAttribute("hidden");
      document.getElementById("faqHidden-item2").style.height = '200px'
      setTimeout(() => {
        
        document.getElementById('sect2').style.opacity = '1';
      }, 300);

    } else {
      container.classList.remove("faq-visible");
      container.classList.add("faq-hidden");
      document.getElementById("faqIcon2").classList.remove("active");
      
      document.getElementById("faqHidden-item2").style.height = '20px';
      document.getElementById("sect2").classList.remove("active");
      setTimeout(() => {
        document.getElementById("sect2").setAttribute("hidden", "");
        document.getElementById('sect2').style.opacity = '0';
        
      }, 300);
    }
  });
  document.getElementById("faq-accordion3").addEventListener("click", (e) => {
    const container = document.getElementById("faqHidden-item3");
    if (container.classList.contains("faq-hidden")) {
      container.classList.remove("faq-hidden");
      container.classList.add("faq-visible");
      document.getElementById("faqIcon3").classList.add("active");
      document.getElementById("sect3").classList.add("active");
      document.getElementById("sect3").removeAttribute("hidden");
      document.getElementById("faqHidden-item3").style.height = '200px'
      setTimeout(() => {
        document.getElementById('sect3').style.opacity = '1';
      }, 300);
    } else {
      container.classList.remove("faq-visible");
      container.classList.add("faq-hidden");
      document.getElementById("faqIcon3").classList.remove("active");

      document.getElementById("faqHidden-item3").style.height = "20px";
      document.getElementById("sect3").classList.remove("active");
      setTimeout(() => {
        document.getElementById("sect3").setAttribute("hidden", "");
        document.getElementById('sect3').style.opacity = '0';
      }, 300);
    }
  });
}
export { styles };
