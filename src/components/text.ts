import { LS, getKey } from "../shared";

// if return true then for cicle will continue
export default function text(input: HTMLInputElement, set: boolean = false) {
  const types = [
    "text",
    "search",
    "tel",
    "url",
    "email",
    "password",
    "number",
    "textarea"
  ];
  if (!types.includes(input.type)) return false;
  if (set) {
    LS.set(getKey(input), input.value);
  } else {
    let value = LS.get(getKey(input));
    if (!value) return true;
    input.value = value;
  }
  return true;
}
