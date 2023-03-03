const fragmentProject = document.createDocumentFragment();

const projects = (title, subtitle, description, image, video, link) => {
  const projectsContainer = document.getElementById("templateProjects").content;
  projectsContainer.getElementById("projectTitle").textContent = title;
  projectsContainer.getElementById("projectSubtitle").textContent = subtitle;
  projectsContainer.getElementById("projectDescription").textContent = description;
  projectsContainer.getElementById("projectImg").src = image;
  projectsContainer.getElementById("projectVideo").src = video;
  projectsContainer.getElementById("projectLink").href = link;
  projectsContainer.getElementById("videoLink").href = link;

  const clone = document.importNode(projectsContainer, true);
  fragmentProject.append(clone);
};
export { projects, fragmentProject };
