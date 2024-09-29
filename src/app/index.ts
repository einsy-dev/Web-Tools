import { checkbox, selectMultiple, selectOne, text } from "../components";
import { DM } from "../shared";

const inputs: any = document.querySelectorAll("input, select, textarea");

export default function main() {
  document.addEventListener("keydown", function (event: KeyboardEvent) {
    if (event.altKey && event.key == "z") {
      handleInputs(true);
    }
    if (event.altKey && event.key == "x") {
      handleInputs();
    }
    if (event.altKey && event.key == "c") {
      DM.clear();
    }
  });
}

function handleInputs(set = false) {
  for (let i = 0; i < inputs.length; i++) {
    let skip = checkbox(inputs[i], set);
    if (skip) continue;
    skip = text(inputs[i], set);
    if (skip) continue;
    skip = selectOne(inputs[i], set);
    if (skip) continue;
    skip = selectMultiple(inputs[i], set);
    if (skip) continue;
  }
}
