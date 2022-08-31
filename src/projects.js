const fragmentProject = document.createDocumentFragment()

const projects = (title, subtitle, description, image, video) => {
  const projectsContainer = document.querySelector('#templateProjects').content;
  projectsContainer.querySelector('#projectTitle').value = title;
  projectsContainer.querySelector('#projectSubtitle').value = subtitle;
  projectsContainer.querySelector('#projectDescription').value = description;
  projectsContainer.querySelector('#projectImg').src = image;
  projectsContainer.querySelector('#projectVideo').src = video;

  const clone = document.importNode(projectsContainer, true);
  fragmentProject.append(clone);

}
export { projects, fragmentProject}

