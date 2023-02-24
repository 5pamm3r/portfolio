const fragment = document.createDocumentFragment()

const contactContainer = (id, link, image) => {
  const contactContainer = document.querySelector('#templateContact').content;
  contactContainer.querySelector('.imageContact__container').id = id;
  contactContainer.querySelector('.contactLink').href = link;
  contactContainer.querySelector('.contactImg').src = image;
  const clone = document.importNode(contactContainer, true)
  fragment.append(clone)

}

export { contactContainer, fragment }