const fragmentProject = document.createDocumentFragment()

const projects = (title, subtitle, description1, description2, description3, image, video) => {
  const projectsContainer = document.querySelector('#templateProjects').content;
  projectsContainer.querySelector('#projectTitle').textContent = title;
  projectsContainer.querySelector('#projectSubtitle').textContent = subtitle;
  projectsContainer.querySelector('#projectDescription1').textContent = description1;
  projectsContainer.querySelector('#projectDescription2').textContent = description2;
  projectsContainer.querySelector('#projectDescription3').textContent = description3;
  projectsContainer.querySelector('#projectImg').src = image;
  projectsContainer.querySelector('#projectVideo').src = video;

  const clone = document.importNode(projectsContainer, true);
  fragmentProject.append(clone);

}
export { projects, fragmentProject}

