function skillsList(name, url) {
  const $container = document.createElement("figure");
  $container.classList.add("skill__container");
  const $text = document.createElement("figcaption");
  $text.textContent = name;
  const $image = document.createElement("img");
  $image.src = url;
  $image.alt = name;

  $container.append($image, $text);
  document.getElementById("skillsList").append($container);
}
export { skillsList };
