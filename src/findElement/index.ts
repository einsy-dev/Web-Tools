import { dataI } from "./interface";

const defaultData: dataI = {
  all: false,
  upLimit: 0,
  skip: null,
  result: []
};

export default function findElement(el: HTMLElement | Element | null, fn: (element: any) => boolean, data: dataI = {}): any {
  data = Object.assign({}, defaultData, data);

  if (!el || !data.result || !fn) throw new Error("Missing argument");

  if (fn(el)) data.result.push(el);
  if (el.children.length && (!data.result.length || data.all)) {
    let newData = {
      ...data,
      upLimit: 0,
      skip: null
    };
    for (let i = 0; i < el.children.length; i++) {
      if (i == data.skip) continue;
      findElement(el.children[i], fn, newData);
      if (data.result.length && !data.all) break;
    }
  }

  if (el.parentElement && (!data.result.length || data.all) && data.upLimit) {
    --data.upLimit;
    data.skip = Array.from(el.parentElement.children).indexOf(el);
    console.log(data);
    findElement(el.parentElement, fn, data);
  }

  return data.result.length == 1 ? data.result[0] : data.result.length < 1 ? null : data.result;
}
