import { contactContainer, fragment } from "./contact.js";
import { projects, fragmentProject } from "./projects.js";
import { styles } from './styles.js';
import { skillsList } from './skillsList.js';
import { SKILLS } from "./skills.js";
import { topSlide } from "./animations.js";

const getContact = (id) => {
  const contact = document.querySelector(id);
  contactContainer(
    "linkedInContact",
    "https://www.linkedin.com/in/carlos-massarino-9970b1234/",
    "https://5pamm3r.github.io/portfolio/public/assets/icons/linkedin-black.svg"
  );
  contactContainer(
    "twitterContact",
    "https://twitter.com/C_Massarino",
    "https://5pamm3r.github.io/portfolio/public/assets/icons/twitter-black.svg"
  );
  contactContainer(
    "githubContact",
    "https://github.com/5pamm3r",
    "https://5pamm3r.github.io/portfolio/public/assets/icons/github.png"
  );
  contact.append(fragment);
};

const getProject = (() => {
  const project = document.querySelector('#projects');
  projects(
    'Expense tracker',
    'React, UX/UI Design',
    'Do you feel that money flies? To optimize expenses, it is important to know what is spent on. There is only one way to do it and that is to keep track of expenses.',
    'https://5pamm3r.github.io/portfolio/public/assets/images/cryptoWallet.png'
  )
  projects(
    'Umbrella',
    'JavaScript, UX/UI Design',
    'Are you worried about the weather? In this app you will find basic information such as the current weather situation, as well as the forecast for days or hours.',
    'https://5pamm3r.github.io/portfolio/public/assets/images/umbrella.png'
    
  )
  projects(
    'Wish List',
    'React, UX/UI Design',
    'Organize effectively and say goodbye to stress. Plan, manage and control all your tasks in an application that will improve your efficiency at work and in your personal life.',
    'https://5pamm3r.github.io/portfolio/public/assets/images/featherPens.png',
    'https://5pamm3r.github.io/portfolio/public/assets/videos/video-wishlist.mp4',
    'https://github.com/5pamm3r/wish-list'
  )
  project.append(fragmentProject)
})();

const getSkills = () => {
  SKILLS.map(e=>{
    skillsList(e.name, e.icon)
  })
}

getContact('#contact')
getContact('#footerContact')
getSkills()
topSlide()
styles()