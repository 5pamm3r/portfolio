import { contactContainer, fragment } from "./contact.js";
import { projects, fragmentProject } from "./projects.js";

const getContact = (() => {
  const contact = document.querySelector("#contact");
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
})();

const getProject = (() => {
  const project = document.querySelector('#projects');
  project.append(fragmentProject)
})();