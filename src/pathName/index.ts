export default function pathName(value: string) {
  return window.location.pathname.includes(value) ? true : false;
}
