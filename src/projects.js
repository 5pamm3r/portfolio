const fragmentProject = document.createDocumentFragment();

const projects = (title, subtitle, description, image, video, link) => {
  const projectsContainer = document.querySelector("#templateProjects").content;
  projectsContainer.querySelector(".project__title").textContent = title;
  projectsContainer.querySelector(".project__subtitle").textContent = subtitle;
  projectsContainer.querySelector(".project__description").textContent = description;
  projectsContainer.querySelector(".project__img").src = image;
  projectsContainer.querySelector(".project__video").src = video;
  projectsContainer.querySelectorAll('a').forEach(e=>{
    e.href = link;
  });
  const clone = document.importNode(projectsContainer, true);
  fragmentProject.append(clone);
};
export { projects, fragmentProject };
