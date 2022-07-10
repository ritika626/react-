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

function numSq(num){
    return num * num
}
function memoisedSq(){
    let cache={}
    return function optimisedFn(num){
       if(num in cache){
           console.log('value already in cache');
           return cache[num]
       }
       else{
          let result=numSq(num)
          console.log('computing result');
          cache[num]=result
          return result
       }
    }
}
console.log(numSq(5))

