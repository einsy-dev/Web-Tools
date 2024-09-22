export default function getKey(input: HTMLInputElement | HTMLSelectElement) {
  return (
    input.id ||
    (input.type == "checkbox" ? input.value : null) ||
    input.name ||
    (
      input.getBoundingClientRect().top + input.getBoundingClientRect().left
    ).toString()
  );
}
