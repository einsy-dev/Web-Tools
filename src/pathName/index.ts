export default function pathname(value: string) {
  return window.location.pathname.includes(value) ? true : false;
}
