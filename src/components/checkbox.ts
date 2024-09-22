import { LS, getKey } from "../shared";

// if return true then for cicle will continue
export default function checkbox(
  input: HTMLInputElement,
  set: boolean = false
) {
  const types = ["checkbox", "radio"];
  if (!types.includes(input.type)) return false;

  if (set) {
    LS.set(getKey(input), input.checked);
  } else {
    let value = LS.get(getKey(input));
    input.checked = value;
  }
  return true;
}
