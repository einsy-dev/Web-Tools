class DataManager {
  [key: string]: any;

  constructor() {
    const data = JSON.parse(localStorage.getItem("data") || "{}");
    Object.assign(this, data);
  }

  set(key: string, value: any) {
    this[key] = value;
    localStorage.setItem("data", JSON.stringify(this));
  }

  get(key: string) {
    return this[key];
  }
  clear() {
    localStorage.clear();
    for (let key in this) {
      delete this[key];
    }
  }
}

export default new DataManager();
