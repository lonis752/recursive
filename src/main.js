// iterative function to get n number of fib sequences in an array.

function fibs(n) {
  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}

console.log(fibs(8));

// Recursive version of the function above.

function fibsRecur(n) {
  // Cases to exclude.
  if (n < 1 || isNaN(n)) return "Invalid Entry";
  // Base Cases
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  return [
    ...fibsRecur(n - 1),
    fibsRecur(n - 1)[n - 2] + fibsRecur(n - 1)[n - 3],
  ];
}

console.log(fibsRecur(8));

// MergeSort function to order an unorganized array.

const arr = [300, 343, 9, 4, 12, 69];

function mergeSort(arr) {
    // Return array if there is on one item since it is already ordered.
  if (arr.length <= 1) {
    return arr;
  }
  // Dividing the array into smaller and smaller groups to be sorted later in acending order.
  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}

// Sorting the divided array elements in acending order.
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  // Making sure there are no remaining numbers to be sorted into results.
  return result.concat(left.slice(i)).concat(right.slice(j))
}

const sortedArray = mergeSort(arr);

console.log(arr);
console.log(sortedArray);
