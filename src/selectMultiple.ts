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
      JSON.stringify(
        [...(input.selectedOptions as any)].map((option) => option.value)
      )
    );
  }
  for (let i = 0; i < children.length; i++) {
    if (JSON.parse(LS.get(input.id) || "[]").includes(children[i].value)) {
      children[i].selected = true;
    }
  }

  return true;
}
