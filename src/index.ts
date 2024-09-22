import { checkbox, selectOne, selectMultiple, text } from "./components";

const inputs: any = document.querySelectorAll("input, select, textarea");

for (let i = 0; i < inputs.length; i++) {
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
