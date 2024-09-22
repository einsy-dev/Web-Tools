class LocalStorage {
  constructor() {}

  set(key: string, value: any) {
    if (typeof value == "object") value = JSON.stringify(value);
    if (!key) return;
    localStorage.setItem(key, value);
  }

  get(key: string) {
    let value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  }
}

export default new LocalStorage();
