import './scss/styles.scss';

(function () {
  const n: number = 4;

  function add(a: number, b: number) {
    return a + b;
  }

  console.log('rollup + typescript');
  console.log(`add 5+5 ${add(5, 5)}`);
  console.log('add 5+4: ', add(n, 5));
})();
