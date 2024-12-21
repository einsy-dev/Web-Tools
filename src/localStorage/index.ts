class DataManager {
  [key: string]: any;

  constructor() {
    this.refresh();
  }

  set(key: string, value: any) {
    this[key] = value;
    localStorage.setItem("data", JSON.stringify(this));
  }

  get(key: string) {
    return this[key];
  }

  refresh() {
    const data = JSON.parse(localStorage.getItem("data") || "{}");
    Object.assign(this, data);
  }

  clear() {
    localStorage.clear(); // clear localStorage
    for (let key in this) { // clear this
      delete this[key];
    }
  }
}

export default new DataManager();
