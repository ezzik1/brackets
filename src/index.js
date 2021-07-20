module.exports = function check(str, bracketsConfig) {
  let mass = str.split(''),
      open = [],
      close = [];

  for (let i = 0; i<bracketsConfig.length;i++) {
      open.push(bracketsConfig[i][0]);
      close.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i<mass.length;i++) {
      for (let j=0; j<open.length;j++) {
          if (mass[i] === open[j] && mass[i+1] === close[j]) {
              mass.splice(i,2);
              i = -1;
          }
      }
  }

  if (mass.length > 0) {
      return false
  } else {
      return true
  }
}
