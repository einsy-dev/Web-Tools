import LS from "./localStorage";
// if return true then for cicle will continue
export default function text(input: HTMLInputElement, set: boolean = false) {
  const types = ["text", "search", "tel", "url", "email", "password"];
  if (!types.includes(input.type)) return false;
  if (set) {
    LS.set(
      input.id ||
        input.name ||
        (
          input.getBoundingClientRect().top + input.getBoundingClientRect().left
        ).toString(),
      input.value
    );
  } else {
    let value = LS.get(
      input.id ||
        input.name ||
        (
          input.getBoundingClientRect().top + input.getBoundingClientRect().left
        ).toString()
    );
    if (!value) return true;
    input.value = value;
  }
  return true;
}
