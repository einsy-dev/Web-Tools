"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  LS: () => localStorage_default,
  findElement: () => findElement,
  genKey: () => genKey
});
module.exports = __toCommonJS(index_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LS,
  findElement,
  genKey
});
//# sourceMappingURL=index.js.map