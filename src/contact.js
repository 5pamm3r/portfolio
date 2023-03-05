const fragment = document.createDocumentFragment()

const contactContainer = (id, link, image, alt, aria) => {
  const contactContainer = document.querySelector('#templateContact').content;
  contactContainer.querySelector('.imageContact__container').id = id;
  contactContainer.querySelector('.contactLink').href = link;
  contactContainer.querySelector('.contactLink').setAttribute('aria-label', aria);
  contactContainer.querySelector('.contactImg').src = image;
  contactContainer.querySelector('.contactImg').alt = alt;
  const clone = document.importNode(contactContainer, true)
  fragment.append(clone)

}

export { contactContainer, fragment }