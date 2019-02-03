const array = [1, 2, 3, 4, 5];

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  const sum = _.reduce(list, function (memo, num) { return memo + num; }, 0);
  return sum;
}
console.log(sumFor(array));
console.log(sumWhile(array));
console.log(sumRecursion(array));
console.log(sumTheSimpleWay(array));
