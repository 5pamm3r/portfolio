function styles() {
  document.getElementById("faq-item1").addEventListener("click", (e) => {
    const container = document.getElementById("faqHidden-item1");
    const boxHeight = document.getElementById('hidden1').clientHeight;
    if (container.classList.contains("faq-hidden")) {
      container.classList.remove("faq-hidden");
      container.classList.add("faq-visible");
      document.getElementById("faqIcon1").classList.add("active");
      document.getElementById("hidden1").classList.add("active");
      document.getElementById("hidden1").classList.remove("hidden");
      document.getElementById('faqHidden-item1').style.height = `${boxHeight + 40}px`
    } else {
      container.classList.remove("faq-visible");
      container.classList.add("faq-hidden");
      document.getElementById("faqIcon1").classList.remove("active");
      
      document.getElementById('faqHidden-item1').style.height = '20px'
      document.getElementById("hidden1").classList.add("hidden");
      document.getElementById("hidden1").classList.remove("active");
    }
  });
  document.getElementById("faq-item2").addEventListener("click", (e) => {
    const container = document.getElementById("faqHidden-item2");
    const boxHeight = document.getElementById('hidden2').clientHeight;
    if (container.classList.contains("faq-hidden")) {
      container.classList.remove("faq-hidden");
      container.classList.add("faq-visible");
      document.getElementById("faqIcon2").classList.add("active");

      document.getElementById("hidden2").classList.add("active");
      document.getElementById("hidden2").classList.remove("hidden");
      document.getElementById('faqHidden-item2').style.height = `${boxHeight + 40}px`

    } else {
      container.classList.remove("faq-visible");
      container.classList.add("faq-hidden");
      document.getElementById("faqIcon2").classList.remove("active");

      document.getElementById("hidden2").classList.add("hidden");
      document.getElementById("hidden2").classList.remove("active");
      document.getElementById('faqHidden-item2').style.height = `0px`

    }
  });
  document.getElementById("faq-item3").addEventListener("click", (e) => {
    const container = document.getElementById("faqHidden-item3");
    const boxHeight = document.getElementById('hidden3').clientHeight;

    if (container.classList.contains("faq-hidden")) {
      container.classList.remove("faq-hidden");
      container.classList.add("faq-visible");
      document.getElementById("faqIcon3").classList.add("active");

      document.getElementById("hidden3").classList.add("active");
      document.getElementById("hidden3").classList.remove("hidden");
      document.getElementById('faqHidden-item3').style.height = `${boxHeight + 40}px`

    } else {
      container.classList.remove("faq-visible");
      container.classList.add("faq-hidden");
      document.getElementById("faqIcon3").classList.remove("active");

      document.getElementById("hidden3").classList.add("hidden");
      document.getElementById("hidden3").classList.remove("active");
      document.getElementById('faqHidden-item3').style.height = '0px'

    }
  });
}
export { styles }