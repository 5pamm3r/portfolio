const fragmentProject: DocumentFragment = document.createDocumentFragment();

const projects = (
  title: string,
  subtitle: string,
  description: string,
  image: string,
  video: string,
  link: string
): void => {
  const projectTemplate: HTMLTemplateElement | null = document.querySelector("#templateProjects");
  if (!projectTemplate) {
    return;
  }

  const projectsContainer: DocumentFragment = projectTemplate.content.cloneNode(true) as DocumentFragment;

  const projectTitle: HTMLElement | null = projectsContainer.querySelector(".project__title");
  const projectSubtitle: HTMLElement | null = projectsContainer.querySelector(".project__subtitle");
  const projectDescription: HTMLElement | null = projectsContainer.querySelector(".project__description");
  const projectImg: HTMLImageElement | null = projectsContainer.querySelector(".project__img");
  const projectVideo: HTMLVideoElement | null = projectsContainer.querySelector(".project__video");
  const projectLinks: NodeListOf<HTMLAnchorElement> | null = projectsContainer.querySelectorAll('a');

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
    projectLinks.forEach((linkElement: HTMLAnchorElement) => {
      linkElement.href = link;
    });
  }

  fragmentProject.append(projectsContainer);
};

export { projects, fragmentProject };
