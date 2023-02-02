const fragmentProject = document.createDocumentFragment()

const projects = (title, subtitle, description, image, video, link) => {
  const projectsContainer = document.querySelector('#templateProjects').content;
  projectsContainer.querySelector('#projectTitle').textContent = title;
  projectsContainer.querySelector('#projectSubtitle').textContent = subtitle;
  projectsContainer.querySelector('#projectDescription').textContent = description;
  projectsContainer.querySelector('#projectImg').src = image;
  projectsContainer.querySelector('#projectVideo').src = video;
  projectsContainer.querySelector('#projectLink').href = link;

  const clone = document.importNode(projectsContainer, true);
  fragmentProject.append(clone);

}
export { projects, fragmentProject}

