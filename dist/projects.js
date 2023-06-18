const fragmentProject = document.createDocumentFragment();
const projects = (title, subtitle, description, image, video, link) => {
    const projectTemplate = document.querySelector("#templateProjects");
    if (!projectTemplate) {
        return;
    }
    const projectsContainer = projectTemplate.content.cloneNode(true);
    const projectTitle = projectsContainer.querySelector(".project__title");
    const projectSubtitle = projectsContainer.querySelector(".project__subtitle");
    const projectDescription = projectsContainer.querySelector(".project__description");
    const projectImg = projectsContainer.querySelector(".project__img");
    const projectVideo = projectsContainer.querySelector(".project__video");
    const projectLinks = projectsContainer.querySelectorAll('a');
    if (projectTitle) {
        projectTitle.textContent = title;
    }
    if (projectSubtitle) {
        projectSubtitle.textContent = subtitle;
    }
    if (projectDescription) {
        projectDescription.textContent = description;
    }
    if (projectImg) {
        projectImg.src = image;
    }
    if (projectVideo) {
        projectVideo.src = video;
    }
    if (projectLinks) {
        projectLinks.forEach((linkElement) => {
            linkElement.href = link;
        });
    }
    fragmentProject.append(projectsContainer);
};
export { projects, fragmentProject };
