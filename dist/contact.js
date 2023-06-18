const fragment = document.createDocumentFragment();
const contactContainer = (id, link, image, alt, aria) => {
    const contactTemplate = document.querySelector('#templateContact');
    if (!contactTemplate) {
        return;
    }
    const contactContainer = contactTemplate.content.cloneNode(true);
    const contactLink = contactContainer.querySelector('.contactLink');
    const contactImg = contactContainer.querySelector('.contactImg');
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
