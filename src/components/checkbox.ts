import { DM, getKey } from "../shared";

// if return true then for cicle will continue
export default function checkbox(
  input: HTMLInputElement,
  set: boolean = false
) {
  const types = ["checkbox", "radio"];
  if (!types.includes(input.type)) return false;

  if (set) {
    DM.set(getKey(input), input.checked);
  } else {
    let value = DM.get(getKey(input));
    if (value && value != input.checked) input.click();
  }
  return true;
}
