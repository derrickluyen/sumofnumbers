function sumFor(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1));
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; }, 0);
}

const arr = [1, 2, 3, 4, 5];
console.log(sumFor(arr));
console.log(sumWhile(arr));
console.log(sumRecursion(arr));
console.log(sumTheSimpleWay(arr));
