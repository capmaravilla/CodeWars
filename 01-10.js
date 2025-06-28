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

function nextBigger(n){
  let cache = n.toString().split('')
  .map(x => parseInt(x)).sort()

  return cache
}

console.log(nextBigger(12)) //21
console.log(nextBigger(513)) //531
console.log(nextBigger(2017)) //2071
console.log(nextBigger(414)) //441
console.log(nextBigger(144)) //414
