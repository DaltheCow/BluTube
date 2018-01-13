export default (arr, func) => {
  const newArr = [];
  arr.forEach(el => {
    const res = func(el);
    if (res !== undefined) newArr.push(res);
  });
  return newArr;
};
