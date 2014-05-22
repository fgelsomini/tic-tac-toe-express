function permutate(array, size, permutations) {
  var permutations = permutations || [];
  for(var i=0;i<array.length;i++) {
    arrayCopy = array.slice(0);
    if (arrayCopy.length > size) {
      arrayCopy = array.filter(function(e) {return e !== array[i]})
    }
    if (arrayCopy.length === size) {
      permutationExists = permutations.some(function(e) {
        return JSON.stringify(e) === JSON.stringify(arrayCopy.sort())
      });
      if (permutationExists === false) {
        permutations.push(arrayCopy.sort());    
      }
    }
    while (arrayCopy.length > size) {
      permutate(arrayCopy,size,permutations);
    }
  }
  return permutations;
}  

function sumArray(array) {
  var sum = array.reduce(function(a, b) {
    return a + b;
  });
  return sum;
}  

function pluckArray(array) {
  i = Math.floor((Math.random() * array.length) + 1);
  return array[i-1];
}

