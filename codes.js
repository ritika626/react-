/* import { useState } from 'react';
import { compose } from 'redux';
import {todayArr} from './src/ob';

// function hayStack i.e find 5 in array of 15
// fucntion cross add i.e it takes first and last item in array and add then second and second last item and so on..
function crossAdd(input){
    return
}

console.log(crossAdd(todayArr))

const [name,setName]=useState<String>(89) */

const { normalizeUnits } = require("moment")

const tags2 = [{
    id: 1,
    name: 'ritika',
    age: 23,
    basic: {
        empId: 1
    }
},
{
    id: 2,
    name: 'ritika',
    age: 24,
    basic: {
        empId: 2
    }
},
{
    id: 3,
    name: 'ritika',
    age: 25,
    basic: {
        empId: 3
    }
},
{
    id: 4,
    name: 'ritika',
    age: 26,
    basic: {
        empId: 4
    }
},
{
    id: 5,
    name: 'ritika',
    age: 27,
    basic: {
        empId: 5
    }
},
{
    id: 6,
    name: 'ritika',
    age: 28,
    basic: {
        empId: 6
    }
}, {
    id: 7,
    name: 'ritika',
    age: 29,
    basic: {
        empId: 7
    }
},
{
    id: 8,
    name: 'ritika',
    age: 20,
    basic: {
        empId: 8
    }
},
{
    id: 9,
    name: 'ritika',
    age: 30,
    basic: {
        empId: 9
    }
}
]

/* word or sentence reverse
function reverseWord(sentence){
     const a=sentence.split('');
     const emptyArr=[];
     for(let i=a.length-1;i>=0;i--){
         emptyArr.push(a[i]);
     }
     return emptyArr.join("");
}
console.log('reverse the word',reverseWord('shubham ritika')); */

/* append address to the range 
function appendAddress(range,address){
     const emptyArr=[];
     tags.map(i=>{
         if(i.age>range[0] && i.age<range[1]){
             emptyArr.push({...i,address})
         }
         else{
            emptyArr.push({...i})
         }
     })
     console.log('emptyAdd',emptyArr)
}
console.log('appendAddress',appendAddress([26,28],{add:'street5'}))
 */

const nestedObj = {
    a: {
        x: 10,
        y: 20,
        z: 30
    },
    b: {
        j: 40,
        k: 80,
        l: 50
    },
    c: {
        m: 70,
        n: 40,
        o: 10
    }
}
/* output{a:[10,20,30],b:[40,80,50]}
function outP(ob){
    let emptyObj={}
     Object.keys(ob).map(i=>{emptyObj[i]=Object.values(ob[i])})
   console.log(emptyObj);
}
console.log('output for object',outP(nestedObj)); */

/*  1  make pattern
 22
 333
...
function rightPattern(num){
    for(let i=1;i<=num;i++){
        let t=[]
        for(let j=0;j<i;j++){
            t.push(i)
        }
        console.log(t.join(''));
    }
} */

// 1
// 23
// 456
/* function rightPattern(num){
    for(let i=1;i<=num;i++){
        let t=[]
        for(let j=0;j<i;j++){
            t.push(i)
        }
        console.log(t.join(''));
    }
}
console.log('rightPattern',rightPattern(6)); */

const usersData = {
    1: {
        firstName: {
            value: 'ranchod'
        },
        lastName: {
            value: 'das chanchad'
        },
        age: {
            value: 9
        }
    },
    2: {
        firstName: {
            value: 'virus'
        },
        lastName: {
            value: 'chaturvedi'
        }
    },
    3: {
        firstName: {
            value: 'alpha'
        },
        lastName: {
            value: 'chlht'
        }
    },
    4: {
        firstName: {
            value: 'beta'
        },
        lastName: {
            value: 'chlnikl'
        }
    },
    5: {
        firstName: {
            value: 'gamma'
        },
        lastName: {
            value: 'bkvasmtmar'
        }
    },
    6: {
        firstName: {
            value: 'hurrr'
        },
        lastName: {
            value: 'sharma'
        }
    },
}

// [{id:1,firstName:'',lastName:''},...]
/* function makeArrObj(data) {
    let result = [];
    Object.keys(data).map(i => {
        const objct={}
        Object.keys(data[i]).map(x => {
          objct[x]=data[i][x]['value']
        })
        console.log(objct);
        // result.push({id:i,...objct})
        result=[...result,{id:Number(i),...objct}]
        // when we know the hardcoded keys
        // result=[...result,{id:i,firstName:data[i]['firstName']['value'],lastName:data[i]['lastName']['value']}]
    })
    return result;
}
console.log('makeArrObj', makeArrObj(usersData)); */

// output {1:{details for empId }}

const tags = [{
    id: 1,
    name: 'ritika1',
    age: 23,
    basic: {
        empId: 1
    }
},
{
    id: 2,
    name: 'kriitika2',
    age: 24,
    basic: {
        empId: 2
    }
},
{
    id: 3,
    name: 'gitika3',
    age: 25,
    basic: {
        empId: 3
    }
},
{
    id: 4,
    name: 'ritika4',
    age: 26,
    basic: {
        empId: 4
    }
},
{
    id: 5,
    name: 'nitika5',
    age: 27,
    basic: {
        empId: 5
    }
},
{
    id: 6,
    name: 'ritika6',
    age: 28,
    basic: {
        empId: 6
    }
}, {
    id: 7,
    name: 'ritika7',
    age: 29,
    basic: {
        empId: 7
    }
},
{
    id: 8,
    name: 'ritika8',
    age: 20,
    basic: {
        empId: 8
    }
},
{
    id: 9,
    name: 'ritika9',
    age: 30,
    basic: {
        empId: 9
    }
}
]

const arr1 = [{
    name: {
        firstName: 'geeta',
        lastName: 'kapoor'
    },
    emplData: {
        data: {
            salary: 4,
            age: 2,
            empId: {
                data: {
                    id: 6
                }
            }
        }
    }
},
{
    name: {
        firstName: 'seeta',
        lastName: 'kapoor'
    },
    emplData: {
        data: {
            salary: 6,
            age: 9,
            empId: {
                data: {
                    id: 8
                }
            }
        }
    }
},
{
    name: {
        firstName: 'bhg',
        lastName: 'kapoor'
    },
    emplData: {
        data: {
            salary: 10,
            age: 1,
            empId: {
                data: {
                    id: 7
                }
            }
        }
    }
}]

// output===> [{id:empId,name:firstName+lastName}]

/* function arrayToObject(arr){
    let newObj={};
    arr.map(i=>{
        newObj={...newObj,[i.basic.empId]:i}
    })
    return newObj;
    let emptyArr=[];
    arr.map(i=>{
       const c= arr1.find(x=>i.basic.empId===x.emplData.data.empId.data.id)
        if(c){
            emptyArr=[...emptyArr,{id:i.basic.empId,name:c.name.firstName + " " + c.name.lastName}]
         } 
    });
    console.log(emptyArr);
}
console.log('arraytoObject',arrayToObject(tags)); */

// output====>[{name:'rit'}]
/* function getNames(arr){
   const empArr=[]
   arr.map(i=>{
       const a=i.name.match('kri')
       if(a?.input){
        empArr.push({name:a?.input})
       }
    })
    return empArr;
    arr.map(i=>{
       const a=i.name.startsWith('ri')
       if(a){
           empArr.push({name:i.name})
       }
    })
    return empArr;
}
console.log(getNames(tags)); */

// format digits with k l M b t
/* function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

console.log(nFormatter(1200))
 */
/* var number = 123456.789;
console.log(new Intl.NumberFormat('en-IN').format(number));
console.log(new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number)); */

const previousObj = {
    a: {
        b: {
            c: {
                d: [{
                    value: '10',
                },
                {
                    value: '19',
                },
                {
                    value: '12',
                },
                {
                    value: '13',
                }]
            }
        }
    },
    b: {
        c: {
            d: {
                e: [{
                    value: '15'
                },
                {
                    value: '16'
                },
                {
                    value: '17'
                },
                {
                    value: '18'
                }]
            }
        }
    }
}

/* output ====> [{key:a},{key:b,value:[16>]}]
function logic1(obj){
   const empArray=[];
   Object.keys(obj).map(i=>{
       let err=[]
       // console.log([i]);
       Object.keys(obj[i])
       .map(x=>Object.keys(obj[i][x])
       .map(y=>Object.keys(obj[i][x][y])
       .map(a=>{
           obj[i][x][y][a]
           .map(z=>{
               if(z.value > 16){
                  err=[...err,z.value]
               }
           })
       }
      )));
       empArray.push({key:i,value:err})
   })
   console.log(empArray)
}
console.log(logic1(previousObj)); */

const logic2Arr = [
    {
        id: '1',
        name: {
            a: [
                {
                    class: [1, 2, 3, 4, 5]
                },
                {
                    toppers: [{
                        name: 'shubham1',
                        studentId: 1
                    },
                    {
                        name: 'shubham2',
                        studentId: 2
                    },
                    {
                        name: 'shubham3',
                        studentId: 3
                    },
                    {
                        name: 'shubham4',
                        studentId: 4
                    },
                    {
                        name: 'shubham5',
                        studentId: 5
                    }
                    ]
                },
                {
                    marks: [349, 455, 333, 350, 290]
                }
            ]
        }
    },
    {
        id: '2',
        name: {
            a: [
                {
                    studentIds: [1, 2, 5]
                },
                {
                    companyName: ['shubham1', 'shubham2', 'shubham5']
                },
                {
                    code: [349, 455, 333, 350, 290]
                },
            ]
        }
    }
]

const logic3Obj = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: 'end'
                    }
                }
            }
        }
    },
    b: {
        c: 'end'
    },
    c: {
        d: {
            e: {
                f: {
                    g: {
                        h: ''
                    }
                }
            }
        }
    },
    d: {
        e: {
            f: {
                g: 'end'
            }
        }
    }
}

let logic4Arr = {
    'EMP-ID_2': {
        name: {
            data: ["bhardwaj", "shubham"],
        },
        since: {
            data: {
                value: '2016-01-21'
            }
        },
        shortName: 'pyare',
        country: 'UAE'
    },
    'EMP-ID_4': {
        name: {
            data: ["sharma", "ritika"],
        },
        since: {
            data: {
                value: '2021-01-27'
            }
        },
        shortName: 'kiko',
        country: 'IN'
    },
    'EMP-ID_6': {
        name: {
            data: ["doe", "john"],
        },
        since: {
            data: {
                value: '2022-01-27'
            }
        },
        shortName: 'bla bla',
        country: 'US'
    },
}


/*  output====>[{
    name:'',
    studentId:'',
    class:'',
    marks:'',
    companyName:''
}] */

function logic2Arr1(arr, classId, placement) {
    let empArr = [];
    // arr.map(i=>{
    classId.map((x) => {
        if (arr[0].name.a[0].class.includes(x)) {
            const index = arr[0].name.a[0].class.findIndex(y => y === x);
            const student = arr[0].name.a[1].toppers[index];
            const marks = arr[0].name.a[2].marks[index]
            if (placement) {
                const index1 = arr[1].name.a[0].studentIds.findIndex(a => a === student.studentId)
                const companyName = arr[1].name.a[1].companyName[index1]
                if (arr[1].name.a[0].studentIds.includes(student.studentId)) {
                    empArr = [...empArr, { name: student.name, studentId: student.studentId, class: x, marks: marks, companyName: companyName }]
                }
            }
            else {
                empArr = [...empArr, { name: student.name, studentId: student.studentId, class: x, marks: marks }]
            }
        }
    })
    // });
    console.log(empArr);
}
// console.log(logic2Arr1(logic2Arr,[3],true));

// output ['abcdef','bc','defg'];
// output logic4Arr====>[{
//     id:4,(EMP_ID_4 should give the id last 4)
//    name:'ritika sharma (shortname)', 
//    country:'Unites Arb emirates from abbre UAE'
// }]

function logic3Obj1(obj) {
    let empArr = [];
    // const countryNames = [{
    //     name: 'Unites Arb emirates',
    //     abb: 'UAE'
    // },
    // {
    //     name: 'India',
    //     abb: 'IN'

    // }, {
    //     name: 'America',
    //     abb: 'US'
    // }
    // ];
    const countryNames = { UAE: 'United arab emirates', IN: 'India', US: 'America' }
    Object.keys(obj)
        .map((i, index) => {
            // console.log(obj[i])
            // const empId=i[7];
            let countryNameResAbbre = '';
            const empId = i.split('_');
            const nameEmp = obj[i]['name']['data'];
            const abbreCountryName = obj[i]['country'];
            // const abbrName=countryNames.find(i=>i.abb===abbreCountryName) (if countryNames is array of objs)
            // if(abbreCountryName==='UAE'){
            //     countryNameResAbbre=countryNames[0]
            // }
            // if(abbreCountryName==='IN'){
            //     countryNameResAbbre=countryNames[1]
            // }
            // if(abbreCountryName==='US'){
            //     countryNameResAbbre=countryNames[2]
            // }
            // console.log(nameEmp);
            empArr = [...empArr, { id: empId[1], name: nameEmp[1] + ' ' + nameEmp[0] + ' ' + '(' + obj[i]['shortName'] + ')', country: countryNames[abbreCountryName] }]
        })
    console.log(empArr)
}
// console.log(logic3Obj1(logic4Arr))

const logic3Arr = [[1, 2, 3, 4, 5, 6, 7, 8], ['ritika', 'shubham', 'niks', 'rits', 'carl', 'lala', 'htt', 'mote']]

// output====>[{
//     1:'ritika',
//     2:'shubham',
//     3:'',
//     4:''
// },{
//     5:'',
//     6:'',
//     ...
// }]

function logic3Arr2(arr) {
    arr.map((i, index) => {
        let empArr = [];
        let quot = i.length / 2;
        // console.log(Math.round(quot));
        // console.log(i[quot-1])
        i.map((y, index) => {
            let empObj = {};
            //    if(i.length%2===0){
            //     empArr.push({y:'k'})
            //  }
        })
        // console.log(empArr)
    })
}
// console.log(logic3Arr2(logic3Arr));

function logic4Arr4(arr, id, test) {
    arr.map((i, index) => {
        if (id.includes(i.basic.empId)) {
            i.test = test
        }
    })
    console.log(arr);
}
// console.log(logic4Arr4(tags,[2],'test'));

const logic5Obj = {
    a: 10,
    b: 23,
    c: 45,
    d: 80,
    e: 20,
    f: 15
}
// output={odd:[],even:[]}
function logic5Obj5(obj) {
    let empObj = {}
    Object.keys(obj)
        .map((i, index) => {
            obj[i]
            if (obj[i] % 2 === 0) {
                if (empObj.even) {
                    empObj = { ...empObj, even: [...empObj.even, obj[i]] }
                } else {
                    empObj = { ...empObj, even: [obj[i]] }
                }
            }
            else {
                if (empObj.odd) {
                    empObj = { ...empObj, odd: [...empObj.odd, obj[i]] }
                } else {
                    empObj = { ...empObj, odd: [obj[i]] }
                }
                // empObj.odd=[...empObj?.['odd'],obj[i]]
            }
        })
    console.log(empObj);
}
//console.log(logic5Obj5(logic5Obj));

//output {1:'ritika1',2:'roitika2}
function logic6Obj6(arr) {
    const empObj = {};
    arr.map((i, index) => {
        //empObj={...empObj,[i.id]:i.name}
        empObj[i.id] = i.name
    })
    console.log(empObj);
}
//console.log(logic6Obj6(tags));

const logic7Arr = [1, 2, 3, 4, 5, 5, 5, 1, 3]
//output [{1:'2',5:'3'}]
function logic7Obj7(arr, num) {
    let count = 0;
    /*  arr.map((i,index)=>{
         console.log(arr[i]);
         if(i===num){
              count=count+1
         }
         let empObj={}
         empObj={...empObj,}
         arr={...empObj}
     }) */
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])

    }
    /*  console.log(count); */
}

function logic7Obj8(arr) {
    let empArr = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        let count = 0;
        if (!empArr.some(t => t[arr[i]])) {
            for (let y = 0; y < arr.length; y++) {
                if (arr[i] === arr[y]) {
                    count += 1
                }
            }
            empArr = [...empArr, { [arr[i]]: count }]
        }
    }
    console.log(empArr);
}
/* console.log(logic7Obj8(logic7Arr)); */
const logic8Arr8 = [{
    id: 1,
    name: 'shubham'
},
{
    id: 2,
    name: 'ritika'
},
{
    id: 3,
    name: 'momin'
},
{
    id: 4,
    name: 'kiko'
}]
const logic8Arr9 = [{
    id: 5,
    name: 'shubham1'
},
{
    id: 2,
    name: 'ritika'
},
{
    id: 6,
    name: 'momin1'
},
{
    id: 7,
    name: 'kiko1'
}]

function logic8arr8Merge(arr1, arr2) {
    let empArr = []
    /* for(let i=0;i<arr1.length;i++){    (this is wrong made by me )
        if(!empArr.some(k=>k.id===(arr[i].id && arr2[i].id))){
           for(let j=0;j<arr2.length;j++){
               if(arr1[i].id!==arr2[j].id){
                     empArr=[...empArr,arr1[i],arr2[j]]
               }
           }
        }
    } */
    /* for(let i=0;i<arr1.length;i++){   ( this is right one )
           for(let j=0;j<arr2.length;j++){
               if(!empArr.some(x=>x.id===arr1[i].id || x.id===arr2[j].id)){
                   empArr=[...empArr,arr1[i]]
                   if(!empArr.some(v=>v.id===arr2[j].id)){
                       empArr=[...empArr,arr2[j]]
                   }
               }
       }
    } */

    empArr = [...arr1, ...arr2]
    let cot = [];
    for (let i = 0; i < empArr.length; i++) {
        if (!cot?.some(x => x.id === empArr[i].id)) {
            cot = [...cot, empArr[i]]
        }
    }
    console.log(cot);
}
//console.log(logic8arr8Merge(logic8Arr8,logic8Arr9));

const Types = [
    {
        id: 1,
        name: 'Car'
    },
    {
        id: 2,
        name: 'Mobile'
    },
]

const Type2 = [{ type: 1, models: ['kk', 'kk'] }, { type: 2, models: ['test,gk'] }]

/* output-->{
    car: {
        models: [],
    },
    mobiles: {
        models: []
    }
} */

function logic9obj9(arr1) {
    let empObj = {};
    /* for(let i=0;i<arr1.length;i++){
         for(let j=0;j<arr2.length;j++){
             if(arr1[i].id===arr2[j].type){
                empObj[arr1[i].name]={models:arr2[j].models}
             }
         }
    } */
    arr1.map((i, index) => {
        const values1 = Type2.find(x => x.type === i.id);
        if (values1) {
            empObj[i.name] = { models: values1.models }
        }
    })
    console.log(empObj);
}
/* console.log(logic9obj9(Types)) */
const logic10Arr10 = [{
    id: 1,
    name: {
        data: 'car'
    }
},
{
    id: 2,
    name: {
        data: 'apple'
    }
},
{
    id: 3,
    name: {
        data: 'car'
    }
},
{
    id: 4,
    name: {
        data: 'mango'
    }
},
{
    id: 5,
    name: {
        data: 'mango'
    }
},
{
    id: 6,
    name: {
        data: 'car'
    }
},
{
    id: 7,
    name: {
        data: 'bus'
    }
},
{
    id: 8,
    name: {
        data: 'parleg'
    }
}]
/* output=>['parleg','bus',...] */
function logic10Arr(arr) {
    let empArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!empArr.some(x => x === arr[i].name.data)) {
            empArr = [...empArr, arr[i].name.data]
        }
    }
    console.log(empArr);
}
/* console.log(logic10Arr(logic10Arr10)) */

const logic11Obj11 = {
    100: {
        name: {
            data: ['car', 'mobile', 'movies', 'trucks']
        }
    },
    102: {
        name: {
            data: ['car', 'volvo', 'bus', 'nano']
        }
    },
    103: {
        name: {
            data: ['movies', 'cricket', 'jail', 'auto']
        }
    },
    104: {
        name: {
            data: ['prison', 'car', 'lady', 'movies']
        }
    }
}
/* output=>[{
    id:1,
    name:['','','',]
}] */
function logic11Obj(obj) {
    let empArr = [];
    let conc = []
    /*  for(let i=0;i<=Object.keys(obj).length;i++){  ( for loop in obj  )
        const a= Object.keys(obj)[i]
          console.log(obj[a])
     } */
    for (let i in obj) {
        /* conc=[...conc,obj[i].name.data] ( wrong )
        const fl=conc.flat();
        const con=[...new Set(fl)];
        console.log(con) */
        for (let y = 0; y < obj[i].name.data.length; y++) {
            if (!conc.some(x => x === obj[i].name.data[y])) {
                conc = [...conc, obj[i].name.data[y]]
            }
        }
    }
    for (let x in obj) {
        empArr = [...empArr, { id: Number(x), name: conc }]
    }
    console.log(empArr);
}
/* console.log(logic11Obj(logic11Obj11)) */

const logic12Arr = [[[1, 2, 3, 4, 5, 5, 6, 5, 4, 7, 8], [1, 2, 3, 4, 4, 5, 2, 6, 7, 8], [1, 2, 3, 4, 3, 5, 5, 6, 7, 2]]]
//outPut=>first parameter the number to be replaced at that particular index , other parameter by which the no will be replaced.
function logic12Arr12(num, rep) {
    for (let i = 0; i < logic12Arr.length; i++) {
        //console.log(logic12Arr[i])
        for (let y = 0; y < logic12Arr[i].length; y++) {
            //logic12Arr[i][y]
            for (let z = 0; z < logic12Arr[i][y].length; z++) {
                // logic12Arr[i][y][z]
                if (logic12Arr[i][y][z] === num) {
                    //console.log('k')
                    logic12Arr[i][y][z] = rep
                }
            }
        }
    }
    console.log(logic12Arr);
}
//console.log(logic12Arr12(7,5))

const logic13Arr = "{{()}]";
//output=>Valid paranthesis {[]}
function logic13Arr13(str) {
    const a = str.split('')
    for (let i = 0; i < a.length; i++) {
        //console.log(a[i]);
        for (let y = i + 1; y < a.length; y++) {
            console.log(a[y]);
        }
    }
}
/* console.log(logic13Arr13(logic13Arr)); */

/* const testFunc = () => {
    const codes = code.split("");
  
    let valid = false;
  
    for (let index = 0; index < codes.length; index++) {
  
      if (codes[index] === "{") {
        if (codes[codes.length - (index + 1)] === "}") {
          valid = true;
        } else {
          valid = false;
        }
      }
  
      if (codes[index] === "(") {
        if (codes[codes.length - (index + 1)] === ")") {
          valid = true;
        } else {
          valid = false;
        }
      }
  
      if
  (codes[index] === "[") {
        if (codes[codes.length - (index + 1)] === "]") {
          valid = true;
        } else {
          valid = false;
        }
      }
    }
  
    return valid;
  }; */

// console.log(testFunc());

const logic14Obj14 = [{
    id: 1,
    name: 'shubham',
    address: {
        city: 'ambala',
        pinccode: 133001
    }
},
{
    id: 2,
    name: 'ritika',
    address: {
        city: 'ambala1',
        pinccode: 1330011
    }
},
{
    id: 3,
    name: 'shubham2',
    address: {
        city: 'ambala2',
        pinccode: 1330013
    }
}]
/* output=> cconvert address to array addrss=[133001,'ambvbala'] */

function logic14Obj(arr) {
    for (let i = 0; i < arr.length; i++) {
        /*  console.log(arr[i]['address']); */
        arr[i]['address'] = [arr[i]['address']['pinccode'], arr[i]['address']['city']]
    }
    console.log(arr);
}
/* console.log(logic14Obj(logic14Obj14)) */

const logic15Obj = {
    1: [{
        id: 1,
        name: 'shubham',
        completed: true
    },
    {
        id: 2,
        name: 'shubham1',
        completed: false
    }],
    2: [{
        id: 3,
        name: 'shubham2',
        completed: true
    },
    {
        id: 4,
        name: 'shubham3',
        completed: true
    },
    ]
}
/* output=>[conditions===>true,id>=2] */
function logic15Obj15(obj) {
    let empArr = [];
    for (let i in obj) {
        //console.log(obj[i]);
        for (let y = 0; y < obj[i].length; y++) {
            //console.log(obj[i][y]);
            if (obj[i][y].completed && obj[i][y].id <= 1) {
                empArr = [...empArr, { [obj[i][y].id]: obj[i][y] }]
            }
        }
    }
    console.log(empArr);
}
//console.log(logic15Obj15(logic15Obj));

const logic16Obj = [{
    id: 100,
    // (id from logic10Arr10 below)
    modelId: 1,
    sales: 2000
},
{
    id: 101,
    // (id from logic10Arr10 below)
    modelId: 2,
    sales: 10000
},
{
    id: 102,
    // (id from logic10Arr10 below)
    modelId: 3,
    sales: 8000
}, {
    id: 103,
    // (id from logic10Arr10 below)
    modelId: 4,
    sales: 9000
}]
//output=>[{id:modelId,name:'car',sales:modelId || 0}]

/* function roundNumbers(num){
      if(num/1000)
} */

function logic16Obj16(arr1, arr2) {
    let empArr = [];

    for (let i = 0; i < arr1.length; i++) {
        const index = arr2.find(k => k.modelId === arr1[i]['id'])
        if (index) {
            empArr = [...empArr, { id: index['modelId'], name: arr1[i]['name']['data'], sales: index['sales'] }]
        }
        else {
            empArr = [...empArr, { id: index?.['modelId'] || 8, name: arr1[i]['name']['data'], sales: 0 }]
        }
        //console.log(arr1[i]);
        /* for(let y=0;y<arr2.length;y++){   (with for loop)
            console.log(arr2[y]);
            if(arr1[i]['id']===arr2[y]['modelId']){
                empArr=[...empArr,{id:arr2[y]['modelId'],name:arr1[i]['name']['data'],sales:arr2[y]['sales']}]
            }
        } */
    }
    console.log(empArr);
}
//console.log(logic16Obj16(logic10Arr10,logic16Obj))

const logic17Arr = {
    1: [1, 2, 3, 4, 5, 6, 7, 8, 98, 56, 33],
    2: [45, 56, 78, 22, 20, 10, 4, 7, 0],
    3: [1, 2, 3, 45, 67, 22, 30, 9, 10, 78],
    4: [49, 58, 78, 23, 20, 11, 4, 7, 0],
    5: [1, 2, 3, 44, 66, 20, 32, 9, 14, 70],
    6: [41, 50, 73, 26, 22, 18, 4, 70, 0]
}

function logic17Arr17(obj) {
    let sum = 0;
    for (let i in obj) {
        //console.log(i);
        if (i % 2 === 0) {
            for (let y = 0; y < obj[i].length; y++) {
                //console.log(obj[i][y]);  (reduce in this case)
                sum += obj[i][y]
            }
        }
    }
    console.log(sum);
}
//console.log(logic17Arr17(logic17Arr));

// Minimum Number in the array 
function MinimumNumber(arr) {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {   /* (with for loop) */
        //console.log(arr[i]);
        if (arr[i] <= minNum) {
            minNum = arr[i];
        }
    }
    console.log(minNum);
}
//console.log(MinimumNumber([1,59,1,4,66,12,44,8]))

const logic18Obj = {
    a: {
        a: [1, 2, 3, 4, 5, 6, 7],
        b: [9, 59, 4, 66, 12, 44, 9]
    },
    b: {
        a: [10, 2, 30, 42, 57, 61, 72],
        b: [19, 51, 4, 64, 12, 44, 92]
    }
}
//output=====>['aa,'ab',ba]
function logic18Obj18(obj) {
    let empArr = [];
    for (let i in obj) {
        //console.log(i,obj[i]);
        for (let y in obj[i]) {
            //console.log(obj[i][y]);
            let sum = 0;
            let keyIn = i + y;
            for (let x = 0; x < obj[i][y].length; x++) {
                //console.log(obj[i][y][x]);
                sum += obj[i][y][x]
            }
            if (sum > 100) {
                empArr = [...empArr, keyIn]
            }
            //console.log(sum);
        }
    }
    console.log(empArr)
}
//console.log(logic18Obj18(logic18Obj))

//output===>Fibonnnaci series 0,1,1,2,3,5,8,...n
function fibonnaci(num) {
    let empArr = [];
    let d = 0;
    /* if(num===0){
        empArr.push(0);
    } */
    for (let i = 0; i <= num; i++) {
        if (i === 0 || i === 1) {
            empArr = [...empArr, i]
        }
        else {
            d = empArr[i - 1] + empArr[i]
            empArr = [...empArr, d]
        }
    }
    console.log(empArr);
}
//console.log(fibonnaci(15));

const logic19Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const logic191Arr = [11, 21, 3, 4, 5, 6, 7, 8, 9, 0]
//output===>[11,21](return the difference)

function logic19Arr19(arr1, arr2) {
    let empArr = [];
    /*  for(let i=0;i<arr1.length;i++){  (also correct but long)
         //console.log(arr1[i]);
         for(let y=0;y<arr2.length;y++){
             //console.log(arr2[y])
             if(!arr1.includes(arr2[y])){
                 //console.log('k');
                 if(!empArr.some(k=>k===arr2[y])){
                  empArr=[...empArr,arr2[y]]
                 }
             }
         }
     } */

    for (let y = 0; y < arr2.length; y++) {
        //console.log(arr2[y])
        if (!arr1.includes(arr2[y])) {
            //console.log('k');
            empArr = [...empArr, arr2[y]]
        }
    }
    console.log(empArr)
}
//console.log(logic19Arr19(logic19Arr, logic191Arr))

const logic20Obj = [{
    id: 1,
    name: 'ritika',
    age: 1
},
{
    id: 2,
    name: 'ritika1',
    age: 12
},
{
    id: 3,
    name: 'ritika3',
    age: 31
}, {
    id: 4,
    name: 'ritika',
    age: 41
}]
const logic20Obj1 = [{
    id: 1,
    name: 'ritika',
    age: 1,
    completed: true
},
{
    id: 2,
    name: 'ritika1',
    age: 12,
    completed: false
},
{
    id: 3,
    name: 'kiki',
    age: 31,
    completed: false
}, {
    id: 4,
    name: 'kiki2',
    age: 41,
    completed: false
}]

function logic20Obj20(arr2) {
    let empArr = []
    for (let i = 0; i < arr2.length; i++) {
        //console.log(arr2[i])
        if (!logic20Obj.some(k => k.name === arr2[i]['name'])) {
            empArr = [...empArr, arr2[i]]
        }
    }
    console.log(empArr)
}
//console.log(logic20Obj20(logic20Obj1));

//output====>[name] condition age>4 and completed=true
function logic20Obj21(arr1, num, ope) {
    let a=null;
    let b=arr1.find(i=>i.age>num)?.name;
    /* for (let i = 0; i < arr1.length; i++) {
        //console.log(arr1[i]);
        //console.log(JSON.stringify(ope));
        switch (ope) {
            case '>':
                 a= arr1[i].age > num ? arr1[i].name : ''
                break;
            case '<':
                 a= arr1[i].age < num ? arr1[i].name : ''
                break;
            default:
                break;
        }
    } */
    console.log(b)
}
//console.log(logic20Obj21(logic20Obj1, 4, '>'));

//output {1:{data}}
function logic20Obj22(arr1){
    let empObj={};
    for(let i=0;i<arr1.length;i++){
        //console.log(arr1[i]);
        empObj={...empObj,[arr1[i].id]:{name:arr1[i].name,age:arr1[i].age}}
    }
    console.log(empObj);
}
//console.log(logic20Obj22(logic20Obj1));
