interface dataI {
  all?: boolean | null;
  upLimit?: number | null;
  downLimit?: number | null;
  index?: number | null;
  result?: (HTMLElement | Element)[] | null;
}

export default function findElement(
  el: any,
  fn: (element: any) => boolean,
  data: dataI = {
    all: false,
    upLimit: null,
    downLimit: null,
    index: null,
    result: null
  }
): any {
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
      index: findIndex(el.parentElement, el),
      
    });
  }
}

function findIndex(
  array: (HTMLElement | Element)[],
  elem: HTMLElement | Element
): number {
  return array.indexOf(elem);
}
