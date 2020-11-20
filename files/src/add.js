export default function add(...args) {
  return args.reduce((prev, cur) => prev + (Number(cur) || 0), 0);
}
