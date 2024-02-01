//const array: number[] = [14, 48, 66, 52, 20, 36];

function largest_Element(arr: number[]): number {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function largest_Element_02(arr: number[]): number {
  // this also sorts the array.
  //   let newArr = arr.sort((a, b) => a - b);
  //   return newArr[newArr.length - 1];

  return Math.max(...arr);
}

//console.log(`largest Element in array: ${largest_Element_02(array)}`);

let second_Largest_Element = (arr: number[]): number => {
  let max: number = arr[0];
  let secMax: number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    }
    if (arr[i] < max && arr[i] > secMax) {
      secMax = arr[i];
    }
  }

  return secMax;
};

/* console.log(
   `Second largest Element in array: ${second_Largest_Element(array)}`
); */

function sortArray(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}

//console.log(`the array is sorted: ${sortArray(array)}`);

//let array02: number[] = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4];
let removeDuplicates01 = (arr: number[]) => {
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }

  return result;
};

// console.log(`duplicate removed from the array first way: ${removeDuplicates01(array02)}`);

let removeDuplicates02 = (arr: number[]) => {
  let set = new Set(arr);

  arr.length = 0;

  set.forEach((item) => {
    arr.push(item);
  });

  return arr;
};

// console.log(`duplicate removed from the array second way: ${removeDuplicates02(array02)}`);

let removeDuplicates03 = (arr: number[]) => {
  let temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === temp) {
      arr.splice(i, 1);
      i--;
    } else {
      temp = arr[i];
    }
  }

  return arr;
};

/* console.log(
  `duplicate removed from the array third way: ${removeDuplicates03(array02)}`
); */

let removeDuplicates04 = (arr: (number | string)[]) => {
  let temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (temp === arr[i]) {
      arr[i] = "_";
    } else {
      temp = arr[i];
    }
  }

  arr.sort();

  arr = arr.filter((x) => x !== "_");

  return arr;
};

/* console.log(
  `duplicate removed from the array fourth way: ${removeDuplicates04(array02)}`
); */

function removeDuplicates05(arr: number[]) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// const k = removeDuplicates05(array02);
// console.log(k);
// console.log(array02);
// console.log("The array after removing duplicate elements is:");
// for (let i = 0; i < k; i++) {
//   console.log(array02[i]);
// }

let rotateLeftByOne01 = (arr: number[]) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  let temp: number = arr[0];
  arr.shift();
  arr.push(temp);

  return arr;
};

let rotateLeftByOne02 = (arr: number[]) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  let i = arr.length - 1;
  let j = 0;
  while (i > 0) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i--;
  }

  return arr;
};

let rotateLeftByOne03 = (arr: number[]) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  let temp = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = temp;

  return arr;
};

// let array03 = [1, 2, 3, 4, 5];
// console.log(rotateLeftByOne03(array03));

let rotateElement_K_Times01 = (arr: number[], k: number, direct: string) => {
  if (direct === "left") {
    k = Math.floor(k % arr.length);

    while (k > 0) {
      let temp = arr[0];
      for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
      arr[arr.length - 1] = temp;
      k--;
    }

    return arr;
  } else if (direct === "right") {
    k = Math.floor(k % arr.length);

    while (k > 0) {
      let temp = arr[arr.length - 1];
      for (let i = arr.length - 2; i >= 0; i--) {
        arr[i + 1] = arr[i];
      }
      arr[0] = temp;
      k--;
    }

    return arr;
  } else {
    throw new Error("Direction to rotate the array is wrong");
  }
};

// let arr = [3, 7, 8, 9, 10, 11];
// console.log(rotateElement_K_Times01(arr, 3, "right"));

let rotateElement_K_Times02 = (arr: number[], k: number, direct: string) => {
  if (arr.length === 0) return "Array is empty";

  let n = arr.length;

  if ((direct = "left")) {
    k = Math.floor(k % n);
    if (k > n) return;

    let temp: number[] = Array(k);

    for (let i = 0; i < k; i++) {
      temp[i] = arr[i];
    }

    for (let i = 0; i < n - k; i++) {
      arr[i] = arr[i + k];
    }

    for (let i = n - k; i < n; i++) {
      arr[i] = temp[i - n + k];
    }
    return arr;
  } else if ((direct = "right")) {
    k = Math.floor(k % n);
    if (k > n) return;

    let temp: number[] = Array(k);

    for (let i = n - k; i < n; i++) {
      temp[i - n + k] = arr[i];
    }

    for (let i = n - k - 1; i >= 0; i--) {
      arr[i + k] = arr[i];
    }

    for (let i = 0; i < k; i++) {
      arr[i] = temp[i];
    }

    return arr;
  } else {
    throw new Error("direction to rotate the array is wrong");
  }
};

let rotateElement_K_Times03 = (arr: number[], k: number, direct: string) => {
  if (arr.length === 0) return;

  let n: number = arr.length;

  function reverse(array: number[], start: number, end: number) {
    if (start >= end) return;

    while (start <= end) {
      let temp: number = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }

    return array;
  }

  if ((direct = "left")) {
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    reverse(arr, 0, n - 1);
    return arr;
  } else if ((direct = "right")) {
    reverse(arr, 0, n - k - 1);
    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - 1);
    return arr;
  } else {
    throw new Error("Direction to rotate array is wrong");
  }
};

// let arr = [1, 2, 3, 4, 5];
// console.log(rotateElement_K_Times01(arr, 2, "left"));
//console.log(rotateElement_K_Times01(arr, 2, "left"));
