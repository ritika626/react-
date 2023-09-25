function maxArr(arr) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  console.log(maxValue);
}

// console.log(maxArr([1, 10, 45, 90, 100]));

// function achieveTarget(arr, sum) {
//   let hashmap = {};
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (hashmap[arr[i]]) {
//       result.push([hashmap[arr[i]], arr[i]]);
//     } else {
//       hashmap[sum - arr[i]] = arr[i];
//     }
//   }
//   console.log(result);
// }

// console.log(achieveTarget([4, 6], 9));

const filteredData = [1, 20, 5, 90].filter((item) => item >= 10);
// console.log(filteredData);

const arrayS = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function findAllPrime(arrayS) {}

console.log(findAllPrime());

var sampleString = "aaa12111";

let twoSum = (array, sum) => {
  let hashMap = {},
    results = [];

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      console.log("hash", i, array[i], hashMap);
      results.push([hashMap[array[i]], array[i]]);
    } else {
      hashMap[sum - array[i]] = array[i];
      console.log("hash2", i, array[i], hashMap);
    }
  }
  return results;
};
// console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 50));

const reverseArray = (arr) => {
  // ========================> Normal reverse loop
  // let empArr = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   empArr = [...empArr, arr[i]];
  // }
  // return empArr;
  // ====================> with unshift method;
  // let empArr = [];
  // arr.forEach((element) => {
  //   return empArr.unshift(element);
  // });
  // return empArr;
  // ======================>with swapping first and last indexes;
  // for (let i = 0; i < arr.length / 2; i++) {
  //   let temp = arr[i];
  //   arr[i] = arr[arr.length - 1 - i];
  //   arr[arr.length - 1 - i] = temp;
  // }
  // return arr;

  // ===============> with while loop
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];

    arr[j] = temp;
    i++, j--;
  }
  return arr;
};

console.log(reverseArray([-1, 4, 7, 6, -2, 17, 8, 10]));

arr = [1, 2, 3, 4];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}
console.log(arr);
