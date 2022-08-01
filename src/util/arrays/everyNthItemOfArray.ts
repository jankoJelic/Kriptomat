const everyNthItemOfArray = ({n, array}: {n: number; array: number[]}) =>
  array.filter((p, i) => i % n === 0);

export default everyNthItemOfArray;
