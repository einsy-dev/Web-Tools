class LocalStorage {
  constructor() {}

  set(key: string, value: any) {
    if (typeof value == "object") value = JSON.stringify(value);
    if (!key) return;
    localStorage.setItem(key, value);
  }

  get(key: string) {
    let value: any = localStorage.getItem(key);
    if (!value) return null;
    if (value.startsWith("{") || value.startsWith("[")) {
      value = JSON.parse(value);
    }
    if (value === "true") value = true;
    if (value === "false") value = false;
    return value;
  }
}

export default new LocalStorage();
