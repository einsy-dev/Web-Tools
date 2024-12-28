import findElement from "../findElement";

export default function genKey(input: HTMLInputElement | HTMLSelectElement) {
  return (
    input.id ||
    (input.type == "checkbox" || input.type == "radio"
      ? input.type + input.name + input.value
      : null) ||
    input.name ||
    findElement(input, (el) => el.innerText, { upLimit: 3 }).innerText
  );
}
