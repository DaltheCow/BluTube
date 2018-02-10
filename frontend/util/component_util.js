//each mapped item that is undefined is not put into new array

export const mapFilter = (arr, func, test) => {
  const newArr = [];
  arr.forEach(el => {
    const res = func(el);
    if (test(res)) newArr.push(res);
  });
  return newArr;
};

export const shuffle = (b) => {
  const a = b.slice();
  for (var i = a.length - 1; i > 0; i--){
    var rand_i = Math.floor(Math.random() * i);
    [a[i], a[rand_i]] = [a[rand_i], a[i]];
  }
  return a;
};

export const insertCommas = num => {
  const n = String(num);
  const len = n.length;
  return num > 999 ? insertCommas(Math.floor(num / 1000)) + ',' + n.slice(len - 3, len) : String(num);
};

export const whenPosted = (time) => {
  const lapsed = Date.now() - time;
  const times = [60000, 60, 24, 7, 4, 12];
  const timeAmounts = [1,2,3,4,5,6].
    map(int => Math.floor(lapsed / times.slice(0,int).reduce((tot, time) => tot * time)));
  const index = [timeAmounts[0], timeAmounts[1], timeAmounts[2], timeAmounts[3], timeAmounts[4], timeAmounts[5]].indexOf(0);
  if (timeAmounts[5] > 0) {
    return timeAmounts[5] + ` year${timeAmounts[5] === 1 ? '' : 's'} ago`;
  } else if (timeAmounts[4] > 0) {
    return timeAmounts[4] + ` month${timeAmounts[4] === 1 ? '' : 's'} ago`;
  } else if (timeAmounts[3] > 0) {
    return timeAmounts[3] + ` week${timeAmounts[3] === 1 ? '' : 's'} ago`;
  } else if (timeAmounts[2] > 0) {
    return timeAmounts[2] + ` day${timeAmounts[2] === 1 ? '' : 's'} ago`;
  } else if (timeAmounts[1] > 0) {
    return timeAmounts[1] + ` hour${timeAmounts[1] === 1 ? '' : 's'} ago`;
  } else if (timeAmounts[0] > 0) {
    return timeAmounts[0] + ` minute${timeAmounts[0] === 1 ? '' : 's'} ago`;
  }
  return "less than 1 minute ago";
};
