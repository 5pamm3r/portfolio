function skillsList(name, url) {
  const $list = document.createElement('li');
  const $container = document.createElement("figure");
  $container.classList.add("skill__container");
  const $text = document.createElement("figcaption");
  $text.textContent = name;
  const $image = document.createElement("img");
  $image.src = url;
  $image.alt = '';

  $container.append($image, $text);
  $list.append($container)
  document.getElementById("skillsList").append($list);
}
export { skillsList };
