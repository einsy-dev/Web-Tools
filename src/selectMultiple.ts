import LS from "./localStorage";
// if return true then for cicle will continue
export default function selectMultiple(
  input: HTMLSelectElement,
  set: boolean = false
) {
  const types = ["select-multiple"];
  if (!types.includes(input.type)) return false;
  let children: HTMLOptionElement[] = Array.from(
    input.children
  ) as HTMLOptionElement[];
  if (!children.length) return true;
  if (set) {
    LS.set(
      input.id,
      children.filter((option) => option.selected).map((option) => option.value)
    );
  } else {
    let value = LS.get(input.id || input.name);
    if (!value) return true;
    children.forEach((option) => {
      if (value.includes(option.value)) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
  }

  return true;
}
