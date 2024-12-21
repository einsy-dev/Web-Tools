// src/genKey/index.ts
function genKey(input) {
  return input.id || (input.type == "checkbox" || input.type == "radio" ? input.type + input.name + input.value : null) || input.name || getCoords(input);
}
function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  let top = (box.top + window.scrollY).toString();
  let left = (box.left + window.scrollX).toString();
  return top + left;
}

// src/localStorage/index.ts
var DataManager = class {
  constructor() {
    this.refresh();
  }
  set(key, value) {
    this[key] = value;
    localStorage.setItem("data", JSON.stringify(this));
  }
  get(key) {
    return this[key];
  }
  refresh() {
    const data = JSON.parse(localStorage.getItem("data") || "{}");
    Object.assign(this, data);
  }
  clear() {
    localStorage.clear();
    for (let key in this) {
      delete this[key];
    }
  }
};
var localStorage_default = new DataManager();

// src/findElement/findElement.ts
function findElement(el, fn, data = {
  all: false,
  upLimit: null,
  downLimit: null,
  index: null,
  result: null
}) {
  if (!el) return null;
  if (!el.children.length && fn(el)) {
    data.result = el;
  } else {
    for (let i = 0; i < el.children.length; i++) {
      if (data.index && i == data.index) continue;
      data.result = findElement(el.children[i], fn);
      if (data.result) return data.result;
    }
  }
  if (!data.result && data.upLimit) {
    data.result = findElement(el.parentElement, fn, {
      upLimit: --data.upLimit,
      index: findIndex(el.parentElement, el)
    });
  }
}
function findIndex(array, elem) {
  return array.indexOf(elem);
}
export {
  localStorage_default as LS,
  findElement,
  genKey
};
//# sourceMappingURL=index.mjs.map