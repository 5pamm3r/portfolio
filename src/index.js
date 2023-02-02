import { contactContainer, fragment } from "./contact.js";
import { projects, fragmentProject } from "./projects.js";

const getContact = (id) => {
  const contact = document.querySelector(id);
  contactContainer(
    "https://www.linkedin.com/in/carlos-massarino-9970b1234/",
    "../public/assets/icons/linkedin-black.svg"
  );
  contactContainer(
    "https://twitter.com/C_Massarino",
    "../public/assets/icons/twitter-black.svg"
  );
  contactContainer(
    "https://github.com/5pamm3r",
    "../public/assets/icons/github.png"
  );
  contact.append(fragment);
};

const getProject = (() => {
  const project = document.querySelector('#projects');
  projects(
    'Expense tracker',
    'React, UX/UI Design',
    'Do you feel that money flies? To optimize expenses, it is important to know what is spent on. There is only one way to do it and that is to keep track of expenses.',
    '../public/assets/images/cryptoWallet.png'
  )
  projects(
    'Umbrella',
    'JavaScript, UX/UI Design',
    'Are you worried about the weather? In this app you will find basic information such as the current weather situation, as well as the forecast for days or hours.',
    '../public/assets/images/umbrella.png'
    
  )
  projects(
    'Wish List',
    'React, UX/UI Design',
    'Organize effectively and say goodbye to stress. Plan, manage and control all your tasks in an application that will improve your efficiency at work and in your personal life',
    '../public/assets/images/featherPens.png',
    '../public/assets/videos/video-wishlist.mp4',
    'https://github.com/5pamm3r/wish-list'
  )
  project.append(fragmentProject)
})();

getContact('#contact')
getContact('#footerContact')

//hacer una func.
document.getElementById('faq-item1').addEventListener('click',e=>{
  const container = document.getElementById('faqHidden-item1')
  if(container.classList.contains('faq-hidden')){
    container.classList.remove('faq-hidden')
    container.classList.add('faq-visible')
    document.getElementById('faqIcon1').classList.add('active')
  } else {
    container.classList.remove('faq-visible')
    container.classList.add('faq-hidden')
    document.getElementById('faqIcon1').classList.remove('active')

  }
})
document.getElementById('faq-item2').addEventListener('click',e=>{
  const container = document.getElementById('faqHidden-item2')
  if(container.classList.contains('faq-hidden')){
    container.classList.remove('faq-hidden')
    container.classList.add('faq-visible')
    document.getElementById('faqIcon2').classList.add('active')

  } else {
    container.classList.remove('faq-visible')
    container.classList.add('faq-hidden')
    document.getElementById('faqIcon2').classList.remove('active')

  }})
document.getElementById('faq-item3').addEventListener('click',e=>{
  const container = document.getElementById('faqHidden-item3')
  if(container.classList.contains('faq-hidden')){
    container.classList.remove('faq-hidden')
    container.classList.add('faq-visible')
    document.getElementById('faqIcon3').classList.add('active')

  } else {
    container.classList.remove('faq-visible')
    container.classList.add('faq-hidden')
    document.getElementById('faqIcon3').classList.remove('active')

  }})

  // document.querySelector('.hamburger').addEventListener('click', (e) => {
  //   e.currentTarget.classList.toggle('is-active');
  // })