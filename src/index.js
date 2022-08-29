import { contactContainer, fragment } from './contact.js'
const contact = document.querySelector('#contact')


contactContainer('https://www.linkedin.com/in/carlos-massarino-9970b1234/', '../public/assets/icons/linkedin.png');
contactContainer('https://twitter.com/C_Massarino', '../public/assets/icons/twitter.png');
contactContainer('https://github.com/5pamm3r', '../public/assets/icons/github.png');
contact.append(fragment)