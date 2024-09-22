import LS from "./localStorage";
// if return true then for cicle will continue
export default function text(input: HTMLInputElement, set: boolean = false) {
  const types = ["text", "search", "tel", "url", "email", "password"];
  if (!types.includes(input.type)) return false;
  if (set) {
    LS.set(input.id || input.name, input.value);
  } else {
    let value = LS.get(input.id || input.name);
    if (!value) return true;
    input.value = value;
  }
  return true;
}
