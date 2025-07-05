// * -------------------------------------------------------------------
// * Data Reverse - 6kyu
// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
// * -------------------------------------------------------------------

function dataReverse(data) {
  const arr = [...data];
  const cache = [];
  for (let i = 1; i <= data.length / 8; i++) {
    const sample = arr.splice(0, 8);
    cache.push(sample);
  }
  let final = [];
  for (let j = cache.length - 1; j >= 0; j--) {
    final = final.concat(cache[j]);
  }
  return final;
}



// * -------------------------------------------------------------------

const dataReverse1 = (data) => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};

// * -------------------------------------------------------------------

const dataReverse2 = (data) => {
  const result = [];
  while (data.length) {
    result.push(...data.splice(-8));
  }
  return result;
};

// * -------------------------------------------------------------------

const data1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
const data2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1];

// console.log(dataReverse(data1))
// console.log(dataReverse1(data1))
// console.log(dataReverse2(data1))
