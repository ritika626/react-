/* const CompA = () -> {
const [val, setVal] = useState(0)
const handler = () => {
for(let i =0; i<3; i++){
    setVal(val+1)
}
}
return <button onClick={handler}>{val}</button>
}

{'a': 1, 'b':2} === {'b': 2, 'a':1}

const a = {'a': {'a': 1}}
const b ={...a}
const c = a;
b.a.a=2;
console.log(a)
c.a.a=3;
console.log(a)

const a={'a':1}
const d=a
d=Object.assign */

/* write a function which will take a parameter N, and will return sum of first N odd numbers
for EX: if N =3,
then func should return 9 (1+3+5); */

function getSum(n){
   /* let sum=0;
   curr=1;
    if(n===0){
       return 0;
    }
    for(let i=0;i<n;i++){
     sum+=curr;
     curr+=2
    }
   return sum;  */
   return n*(n)
}

console.log(getSum(9));


//========= first non-consecutive number
/* function nonConsecutive(arr){
   for(let i=0;i<arr.length-1;i++){
      if(arr[i+1]!==arr[i]+1){
          return arr[i+1]
      }
   }
   return null;
}
console.log(nonConsecutive([1,2,3,4,5,6,7]));
 */
function nonConsecutive(arr){
    let result = arr.find((val,index)=>val !== index +arr[0]);
    return Number.isInteger(result)? result :null;
}
// console.log(nonConsecutive([1,2,3,4,6,7]));

//=========== return not ods values from an array

function noOdds(arr){
   /*  let empArr=[];
     for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            empArr=[...empArr,arr[i]];
        }
     }
     return empArr; */

     return arr.filter(val=>val%2===0);
}
// console.log(noOdds([1,2,3,4,6,7,8,9]));

// ROT13.5 CYPHER rotate the characters by 13 alphaets or numbers if numbers .

function rotCypher(){

}
console.log(rotCyher('ritika'));

//==========  find the missing num