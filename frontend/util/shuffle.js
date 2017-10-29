export default (b) => {
  const a = b.slice();
  for (var i = a.length - 1; i > 0; i--){
    var rand_i = Math.floor(Math.random() * i);
    [a[i], a[rand_i]] = [a[rand_i], a[i]];
  }
  return a;
};
