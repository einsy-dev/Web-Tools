import { checkbox, selectOne, selectMultiple, text } from "./components";

const inputs: any = document.querySelectorAll("input, select, textarea");

document.addEventListener("keydown", function (event: KeyboardEvent) {
  if (event.altKey && event.key == "s") {
    for (let i = 0; i < inputs.length; i++) {
      let skip = checkbox(inputs[i]);
      if (skip) continue;
      skip = selectOne(inputs[i]);
      if (skip) continue;
      skip = selectMultiple(inputs[i]);
      if (skip) continue;
      skip = text(inputs[i]);
    }
    console.log("event", event);
  }
});

document.addEventListener("keydown", function (event: KeyboardEvent) {
  if (event.altKey && event.key == "c") {
    window.localStorage.clear();
  }
});

document.addEventListener("change", function (event: any) {
  handleChange(event);
});
document.addEventListener("click", function (event: any) {
  handleClick(event);
});

function handleClick(event: Event) {
  let target = event.target as HTMLInputElement;
  let skip = checkbox(target, true);
  if (skip) return;
}

function handleChange(event: any) {
  let skip = selectOne(event.target, true);
  if (skip) return;
  skip = selectMultiple(event.target, true);
  if (skip) return;
  skip = text(event.target, true);
  if (skip) return;
}
