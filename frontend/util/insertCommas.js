const insertCommas = num => {
  const n = String(num);
  const len = n.length;
  return num > 999 ? insertCommas(Math.floor(num / 1000)) + ',' + n.slice(len - 3, len) : String(num);
};

export default insertCommas;
