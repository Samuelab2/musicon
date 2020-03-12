const msToMm = {};

function convertMstoMm(ms) {
  const min = Math.floor(ms / 60000);
  // eslint-disable-next-line no-mixed-operators
  const seg = ((ms % 60000 / 1000).toFixed(0));

  return `${min}:${seg}`;
}

// eslint-disable-next-line func-names
msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => convertMstoMm(val));
};

export default msToMm;
