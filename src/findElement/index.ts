import { dataI } from "./interface";

const defaultData: dataI = {
  all: false,
  upLimit: 0,
  index: null,
  result: []
};

export default function findElement(el: HTMLElement | Element | null, fn: (element: any) => boolean, data: dataI = {}): any {
  let defaultData = {
    upLimit: 0,
    all: false,
    result: []
  };
  data = Object.assign({}, defaultData, data);
  if (fn(el)) {
    data.result!.push(el!);
  } else if (el!.children.length) {
    for (let i = 0; i < el!.children.length; i++) {
      findElement(el!.children[i], fn, data);
      if (data.result!.length && !data.all) break;
    }
  }
  if ((!data.result!.length || data.all) && data.upLimit) {
    --data.upLimit;
    findElement(el!.parentElement, fn, data);
  }

  return data.result!.length <= 1 ? data.result![0] : data.result;
}

export function findIndex(array: HTMLCollectionOf<HTMLElement | Element>, elem: HTMLElement | Element): number {
  return Array.prototype.indexOf.call(array, elem);
}
