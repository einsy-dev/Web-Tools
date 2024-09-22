import LS from "./localStorage";
// if return true then for cicle will continue
export default function checkbox(
  input: HTMLInputElement,
  set: boolean = false
) {
  const types = ["checkbox", "radio"];
  if (!types.includes(input.type)) return false;

  if (set) {
    LS.set(input.id || input.name, input.checked);
  } else {
    let value = LS.get(input.id || input.name);
    if (!value) return true;
    input.checked = Boolean(value);
  }
  return true;
}
