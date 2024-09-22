import { LS, getKey } from "../shared";

// if return true then for cicle will continue
export default function selectOne(
  input: HTMLInputElement,
  set: boolean = false
) {
  const types = ["select-one"];
  if (!types.includes(input.type)) return false;
  let children: HTMLOptionElement[] = Array.from(
    input.children
  ) as HTMLOptionElement[];
  if (!children.length) return true;

  if (set) {
    let selected = children
      .filter((option) => option.selected)
      .map((option) => option.value);
    if (!selected.length) return true;
    LS.set(getKey(input), selected);
  } else {
    children.forEach((option) => {
      let value = LS.get(getKey(input));
      if (!value || !value.length) return true;
      if (value.includes(option.value)) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
  }

  return true;
}
