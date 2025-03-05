export default function pathName(value: string | string[]) {
  if (!value) throw new Error("Value is required");
  let path = window.location.pathname;
  if (Array.isArray(value)) {
    return value.some((item) => path.includes(item));
  }
  return path.includes(value) ? true : false;
}
