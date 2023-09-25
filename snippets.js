/* (function test(){
    const a=10
    function inner(){
         a=9
        console.log(a)
    }
    inner()
    console.log(a);
})()
 */

// Memoised result

function numSq(num) {
  return num * num;
}
function memoisedSq() {
  let cache = {};
  return function optimisedFn(num) {
    if (num in cache) {
      console.log("value already in cache");
      return cache[num];
    } else {
      let result = numSq(num);
      console.log("computing result");
      cache[num] = result;
      return result;
    }
  };
}
// console.log(numSq(5));

// input uske upr box toh hum input me  jese hi color likhege toh dropdown autocomplete debounce use krke color change hoga
// rot13 cipher

// const add = (x) => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

// myFunc();// 24
// myFunc(3); // 36

function modifyStr(str) {
  //   if (str.indexOf("New!") === 0) {
  //     return str;
  //   } else {
  //     return `New! ${str}`;
  //   }
  return str.indexOf("New!") === 0 ? "ritika" : "gitika";
}

// console.log(modifyStr("New! ritika"));

function makeNewString(str) {
  //   if (str.length < 3) {
  //     return str;
  //   }
  if (str.length >= 3) {
    let first = str.slice(0, 3);
    let second = str.slice(-3);
    return first + second;
  } else {
    return "not";
  }
}

// console.log(makeNewString("ri"));
