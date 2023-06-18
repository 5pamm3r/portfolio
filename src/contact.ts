const fragment: DocumentFragment = document.createDocumentFragment();

const contactContainer = (id: string, link: string, image: string, alt: string, aria: string): void => {
  const contactTemplate: HTMLTemplateElement | null = document.querySelector('#templateContact');
  if (!contactTemplate) {
    return;
  }

  const contactContainer: DocumentFragment = contactTemplate.content.cloneNode(true) as DocumentFragment;
  const contactLink: HTMLAnchorElement | null = contactContainer.querySelector('.contactLink');
  const contactImg: HTMLImageElement | null = contactContainer.querySelector('.contactImg');

  if (contactLink) {
    contactLink.href = link;
    contactLink.setAttribute('aria-label', aria);
  }

  if (contactImg) {
    contactImg.src = image;
    contactImg.alt = alt;
  }

  fragment.append(contactContainer);
};

export { contactContainer, fragment };
