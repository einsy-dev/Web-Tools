class DataManager {
  data: { [key: string]: any } = {};

  constructor() {
    this.refresh();
  }

  set(key: string, value: any) {
    this.data[key] = value;
    localStorage.setItem("data", JSON.stringify(this));
  }

  setAll(data: { [key: string]: any }) {
    localStorage.setItem("data", JSON.stringify(data));
    this.refresh();
  }

  get(key: string) {
    return this.data[key];
  }

  getAll() {
    return this.data;
  }

  refresh() {
    const data = JSON.parse(localStorage.getItem("data") || "{}");
    this.data = data;
  }

  clear() {
    localStorage.clear(); // clear localStorage
    this.data = {};
  }
}

export default new DataManager();
