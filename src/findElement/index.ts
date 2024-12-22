import { dataI } from "./interface";

const defaultData: dataI = {
  all: false,
  upLimit: 0,
  downLimit: null,
  index: null,
  result: []
};

export default function findElement(
  el: HTMLElement | Element | null,
  fn: (element: any) => boolean,
  data: dataI
): any {
  if (!el) throw new Error("No element provided to findElement()");
  if (!fn) throw new Error("No function provided to findElement()");
  Object.assign(data, defaultData);

  if (fn(el)) data.result!.push(el);
  if (el.children.length && data.all) {
    for (let i = 0; i < el.children.length; i++) {
      if (data.index && i == data.index) continue;
      findElement(el.children[i], fn, data);
    }
  }

  if (data.upLimit! > 0 && el.parentElement) {
    data.result = findElement(el.parentElement, fn, {
      upLimit: --data.upLimit!,
      index: findIndex(el.parentElement.children, el)
    });
  }
}

function findIndex(
  array: HTMLCollectionOf<HTMLElement | Element>,
  elem: HTMLElement | Element
): number {
  return Array.prototype.indexOf.call(array, elem);
}
