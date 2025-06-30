// * -------------------------------------------------------------------
// * RGN to Hex Conversion - 5kyu
// * -------------------------------------------------------------------

function rgb1(r,g,b){
  const trans = (n) => {
    n = n > 255 ? 255 : n
    n = n < 0 ? 0 : n
    return n.toString(16).padStart(2,'0').toUpperCase()
  }
  return [r,g,b].map(trans).join('')
  return `${trans(r)}${trans(g)}${trans(b)}`
}

// * -------------------------------------------------------------------

function rgb2(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}

// * -------------------------------------------------------------------

function rgb3(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
  if(d < 0 ) {return "00";}
  if(d > 255 ) {return "FF";}
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// * -------------------------------------------------------------------

function rgb4(r, g, b) {
  // Utilizamos max y min para crear los topes arriba y abajo
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  let color = (r << 16) + (g << 8) + b;
  console.log(color)

  return ('00000' + color.toString(16).toUpperCase()).slice(-6);
}

// * -------------------------------------------------------------------

// console.log(rgb1(  0,   0,   0)) // '000000'
// console.log(rgb1(  0,   0, -20)) // '000000'
// console.log(rgb1(300, 255, 255)) // 'FFFFFF'
// console.log(rgb1(173, 255,  47)) // 'ADFF2F'

// * -------------------------------------------------------------------
// * Next bigger number with the same digits - 4kyu
// * -------------------------------------------------------------------
// ? Mirar que hacemos en cada momento
function nextBigger(n) {
  // Creamos un array con los numeros separados
  let cache = n.toString().split('').map(Number)

  // Recorremos los bloques de numero de forma inversa
  for (let i = cache.length - 2; i >= 0; i--) {
    // Rango de bloques que estamos trabajando
    let rang = [...cache].slice(i)
    // Maximo numero del rango seleccionado
    let rangMax = [...cache].slice(i).sort((a, b) => b - a)

    // Si el bloque no es el maximo podemos continuar
    if (rangMax > rang) {
      // creamos la cola ordenada
      let sortTail = [...rang].sort()
      // Tengo que el siguiente valor del primer numero para ponerlo delante
      // y el resto sige en orden
      // De la cola sacamos los valores unicos
      // combirtiendola en Set
      let unique = new Set(sortTail)
      // Volvemos a pasarla a array para trabajar con el
      unique = [...unique]
      // buscamos el indice de primer valor
      let idx = unique.indexOf(rang[0])
      // obtenemos el vamor que le seguiria
      let n = unique[idx+1]
      // quitamos el valor de bloque
      sortTail.splice(sortTail.indexOf(n),1)

      // devolvemos el resto del numero + el nuevo valor +
      // el resto del bloque ordenado
      return Number(cache.slice(0, i).join('') + n + sortTail.join(''))

    }
  }
  // Si no existe un numero mayor
  return -1
}

// * -------------------------------------------------------------------
function nextBigger1(n){
  console.log(n);
  let chars = n.toString().split('');
  let i = chars.length-1;
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  console.log(i)
  if (i == 0) return -1;
  let suf = chars.splice(i).sort();
  console.log(suf)
  console.log(chars)
  let t = chars[chars.length-1];
  console.log(t)
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
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

  for(let i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }

  return -1;
}
// * -------------------------------------------------------------------

// console.log(nextBigger1(29965200)) //50022699
console.log(nextBigger1(72510))
// console.log(nextBigger(12)) //21
// console.log(nextBigger(513)) //531
// console.log(nextBigger(2017)) //2071
// console.log(nextBigger(414)) //441
// console.log(nextBigger(144)) //414

// * -------------------------------------------------------------------



