
// * -------------------------------------------------------------------
// * Range Extraction - 4kyu
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/javascript
// * -------------------------------------------------------------------


function printable(el){
  if(el.length === 1){
    return `${el[0]}`
  }else if(el.length === 2){
    return `${el[0]},${el[el.length -1]}`
  }else if(el.length > 2){
    return `${el[0]}-${el[el.length -1]}`
  }
}

function solution(list){
  let cache = []
  let pre = [list[0]]
  for(let i = 1; i < list.length; i++){
    if(list[i] === pre[pre.length -1] + 1){
      pre.push(list[i])
    } else {
      cache.push(pre)
      pre = [list[i]]
    }
  }
  cache.push(pre)
  return cache.map(printable).join(',')
}

// * -------------------------------------------------------------------------

function solution1(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

// * -------------------------------------------------------------------------

function solution2(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}


// * -------------------------------------------------------------------------
const nums = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

console.log(solution(nums))
console.log(solution1(nums))
console.log(solution2(nums))
