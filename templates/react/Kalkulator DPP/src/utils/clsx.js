export default function clsx(...inputs) {
  return inputs.filter(Boolean).join(" ");
}