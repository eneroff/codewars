function snail(snailMap) {
    let result = [];
  
    while (snailMap.length) {

      result = result.concat(snailMap.shift());
  
      if (snailMap.length) {
        for (let row of snailMap) {
          result.push(row.pop());
        }
      }
  
      if (snailMap.length) {
        result = result.concat(snailMap.pop().reverse());
      }
  
      if (snailMap.length) {
        for (let i = snailMap.length - 1; i >= 0; i--) {
          result.push(snailMap[i].shift());
        }
      }
    }
  
    return result;
  }
  
  console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

  console.log(snail([[1]]));

  console.log(snail([[]]));