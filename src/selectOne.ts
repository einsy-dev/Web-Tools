import LS from "./localStorage";
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
  for (let i = 0; i < children.length; i++) {
    if (set) {
      if (!children[i].selected) continue;
      LS.set(input.id, children[i].value);
    } else {
      if (children[i].value == LS.get(input.id)) {
        children[i].selected = true;
      }
    }
  }

  return true;
}
