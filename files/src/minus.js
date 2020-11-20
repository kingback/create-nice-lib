export default function minus(...args) {
  const init = args.shift() || 0;
  return args.reduce((prev, cur) => prev - cur, init);
}
