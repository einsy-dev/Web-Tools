export default function genKey(input: HTMLInputElement | HTMLSelectElement) {
  return (
    input.id ||
    (input.type == "checkbox" || input.type == "radio"
      ? input.type + input.name + input.value
      : null) ||
    input.name ||
    getCoords(input)
  );
}

function getCoords(elem: HTMLElement) {
  let box = elem.getBoundingClientRect();
  let top = (box.top + window.scrollY).toString();
  let left = (box.left + window.scrollX).toString();
  return top + left;
}
