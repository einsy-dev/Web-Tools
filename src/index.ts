import checkbox from "./checkbox";
import selectMultiple from "./selectMultiple";
import selectOne from "./selectOne";
import text from "./text";

const inputs: any = document.querySelectorAll("input, select");

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].type == "submit" || inputs[i].type == "hidden") continue;
  let skip = checkbox(inputs[i]);
  if (skip) continue;
  skip = selectOne(inputs[i]);
  if (skip) continue;
  skip = selectMultiple(inputs[i]);
  if (skip) continue;
  skip = text(inputs[i]);
}

document.addEventListener("input", function (event: any) {
  let skip = checkbox(event.target, true);
  if (skip) return;
  skip = selectOne(event.target, true);
  if (skip) return;
  skip = selectMultiple(event.target, true);
  if (skip) return;
  skip = text(event.target, true);
  if (skip) return;
});
