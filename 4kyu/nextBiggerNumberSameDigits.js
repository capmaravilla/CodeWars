// * -------------------------------------------------------------------
// * Next bigger number with the same digits - 4kyu
// https://www.codewars.com/kata/55983863da40caa2c900004e
// * -------------------------------------------------------------------

function nextBigger(n) {
  let cache = n.toString().split('').map(Number)
  for (let i = cache.length - 2; i >= 0; i--) {
    let rang = cache.slice(i)
    let rangMax = cache.slice(i).sort((a, b) => b - a)

    console.log(rang)
    console.log(rangMax)
    let tail = [...rang].sort()
    console.log(tail)

    let n = tail.splice(1,1)
    console.log(tail)
    console.log(n)

    if (rangMax > rang) {

      console.log(cache.slice(0,i))
      console.log(rang)
      console.log(tail)
      console.log(cache.slice(0, i).join('') + ' '+ n + ' '+ tail.join(''))

      return Number(cache.slice(0, i).join('') + n + tail.join(''))

    }
  }
  return -1
}

// * -------------------------------------------------------------------

function nextBigger1(n){
  console.log(n);
  let chars = n.toString().split('');
  let i = chars.length-1;
  // Hace un bucle hasta que detecte un mayor al
  // indice anterior con lo que tiene el rango a
  // tratar
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  // Si recorre todo es que es el numero maximo
  if (i == 0) return -1;
  // Aqui divide el rango a tratar de inicio que
  // no cambiara
  let suf = chars.splice(i).sort();
  console.log(suf)
  console.log(chars)
  // tomamos el valor final del inicio
  let t = chars[chars.length-1];
  console.log(t)
  console.log(chars)
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  console.log(chars)
  chars[chars.length-1] = suf[i]
  suf[i] = t;
  let res = chars.concat(suf);
  let num = parseInt(res.join(''));
  console.log("->" +num);
  return num;
}
// * -------------------------------------------------------------------

const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger2(n){

  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  console.log(arr)
  console.log(max)
  for(let i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }

  return -1;
}
// * -------------------------------------------------------------------

// console.log(nextBigger1(29965200)) //50022699
console.log(nextBigger2(72510))
console.log(nextBigger(12)) //21
// console.log(nextBigger(513)) //531
// console.log(nextBigger(2017)) //2071
// console.log(nextBigger(414)) //441
// console.log(nextBigger(144)) //414

// * -------------------------------------------------------------------



