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
    let a = null;
    let b = arr1.find(i => i.age > num)?.name;
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
function logic20Obj22(arr1) {
    let empObj = {};
    for (let i = 0; i < arr1.length; i++) {
        //console.log(arr1[i]);
        empObj = { ...empObj, [arr1[i].id]: { name: arr1[i].name, age: arr1[i].age } }
    }
    console.log(empObj);
}
//console.log(logic20Obj22(logic20Obj1));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '%', '/', 'clr', 'x', '=']

function divideArr(arr1) {
    let empArr = []
    const col = 3
    let row = arr1.length / col
    console.log(row);
    for (let i = 0; i < arr1.length; i++) {
        let test = i / 3
        console.log(test.toString().split('.').length === 1)
        /* if(i%3 != 0){

        } */
    }
}
//console.log(divideArr(arr))

/* const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4] */
const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
function intersectionArr(arr1) {
    let empArr = [];
    for (let i = 0; i < nums1.length; i++) {
        //console.log(nums2[i]);
        if (nums2.includes(nums1[i])) {
            empArr = [...empArr, nums1[i]]
        }
    }
    console.log(empArr);
}
//console.log(intersectionArr(nums1))

function logic20Arr21(obj) {
    let empObj = null || {};
    for (let i in obj) {
        //console.log(obj[i]);
        //empObj={...empObj,[obj[i][0].name]:obj[i]}
        let empArr = [];
        for (let x = obj[i].length - 1; x >= 0; x--) {
            //console.log(obj[i][x]);
            empArr = [...empArr, obj[i][x]]
        }
        empObj = { ...empObj, [obj[i][0].name]: empArr }
    }
    console.log(empObj);
    //console.log(null && {});
}
//console.log(logic20Arr21(logic15Obj))

const obj1 = {
    name: 'ritika',
    age: 23
}

function inCheck(num) {
    const obj2 = { 5: 8 }
    if (num in obj2) {
        console.log(obj2[num])
    }
}
//console.log(inCheck(5))

// string reverse ouptut=>'akitir'

function reverseString(str) {
    let arrStr = str.split('')
    let empArr = [];
    for (let i = arrStr.length - 1; i >= 0; i--) {
        empArr = [...empArr, arrStr[i]]
    }
    console.log(empArr.join(''));
}
//console.log(reverseString('ritika is the best'))

function countCharacter(str, char) {
    let arr = str.split('');
    //let count=0
    //let count=arr.filter(i=>i===char).length   (optimised correct method )
    /* for(let i=0;i<arr.length;i++){         (correct)
       if(arr[i]===char){
          count++
       }
    } */
    console.log(count);
}
//console.log(countCharacter('shussam','s'))

//output=>[[1,3],[1,4],[2,3],[2,4]]
function permutations(arr1, arr2) {
    let empArr = [];
    for (let i = 0; i < arr1.length; i++) {
        //console.log(arr1[i]);
        for (let j = 0; j < arr2.length; j++) {
            //console.log(arr1[i],arr2[j]);
            empArr = [...empArr, [arr1[i], arr2[j]]]
        }
    }
    console.log(empArr)
}
//console.log(permutations([1,2],[3,4]))

function palindrome(str) {
    let strArr = str.split('');
    let empArr = []
    for (let i = strArr.length - 1; i >= 0; i--) {
        //console.log(strArr[i]);
        empArr = [...empArr, strArr[i]]
    }
    if (strArr.join('') === empArr.join('')) {
        console.log('true')
    }
    else {
        console.log('false');
    }
}
//console.log(palindrome('madam'));

//output=>[1,2,4,6,3,7,9,0] need two values from array whose sum should be equal to parameter.
function sumOfTwoValues(arr, num) {
    let empArr = [];
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        for (let j = 0; j < arr.length; j++) {
            //console.log(arr[j]);
            if (arr[i] + arr[j] === num) {
                empArr = [arr[i], arr[j]]
                //return empArr; ( only if first needed occurence)
            }
        }
    }
    console.log(empArr);
}
//console.log(sumOfTwoValues([1,2,4,6,3,7,9,0],12))

function missingConsecutiveNum(arr) {
    let empArr = [];
    let sortArr = arr.sort((a, b) => a - b)
    for (let i = 0; i < sortArr.length - 1; i++) {
        //console.log(arr[i]);
        if (arr[i] + 1 != arr[i + 1]) {
            empArr = [...empArr, arr[i] + 1]
        }
    }
    console.log(empArr);
}
//console.log(missingConsecutiveNum([1,2,6,3,4,7,9,0]));

function missingNumber(arr) {
    let empArr = [];
    let max = Math.max(...arr);
    for (let i = 0; i <= max; i++) {
        if (!arr.includes(i)) {
            empArr = [...empArr, i]
        }
    }
    console.log(empArr);
}
//console.log(missingNumber([1,2,6,3,4,7,9,0,100]))

//output=>>>[110,120,10,20,30,70,102,104,160] count the no. of zeros

function countZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        let zeroIn = arr[i].toString().split('');
        let zeros = zeroIn.filter(i => i === '0').length;
        if (zeros) {
            count = count + zeros;
        }
    }
    console.log(count);
}
//console.log(countZeros([110,120,10,20,30,70,102,104,160,1001]));

const arr21Obj = [
    {
        id: 1,
        name: 'ritika1',
        testId: 101
    },
    {
        id: 2,
        name: 'ritika2',
        testId: 102
    },
    {
        id: 2,
        name: 'ritika2',
        testId: 108
    },
    {
        id: 3,
        name: 'ritika3',
        testId: 103
    },
    {
        id: 5,
        name: 'ritika4',
        testId: 104
    },
    {
        id: 4,
        name: 'ritika5',
        testId: 105
    },
    {
        id: 4,
        name: 'ritika6',
        testId: 106
    }
]
// output===>{1:[{id:testId,name:'roitiks'}]}

function logic22Obj(arr) {
    let empObj = {};
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if (empObj[arr[i].id]) {
            empObj[arr[i].id] = [...empObj[arr[i].id], { id: arr[i].testId, name: arr[i].name }]
        }
        else {
            empObj[arr[i].id] = [{ id: arr[i].testId, name: arr[i].name }]
        }
    }
    console.log(empObj);
}
//console.log(logic22Obj(arr21Obj))

// output===>[1,3,6,10]
function sumOfPreviousValues(arr) {
    let empArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        count += arr[i]
        empArr = [...empArr, count]
    }
    console.log(empArr);
}
//console.log(sumOfPreviousValues([1,2,3,4,5,6,0,8]))

function compareArr(arr1, arr2, check) {
    //check arr are same , then values are same, whether input is array or obj
    /*  try {
         if (arr1.length === arr2.length) {
             let str=''
             for(let i=0;i<arr1.length;i++){
                  if(arr1[i]===arr2[i]){
                     str=true;
                  }
                  else{
                     str=false;
                  }
             }
             return str;
         }
     }
     catch (err) {
         console.log('kkk');
     } */
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        return arr1.every((_, index) => arr1[index] === arr2[index]);
    }
    else {
        return false;
    }
}
//console.log(compareArr([2, 3, 4], [2, 3, 4], 'deep'))

// Find the largest and smallest number in an unsorted array of integers ({ "max": 100, "min": 1 })

function findNum(arr) {
    let num = arr[0];
    let num1 = arr[0];
    let empObj = {};
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if (arr[i] <= num) {
            num = arr[i]
            empObj = { ...empObj, 'min': num }
        }
        if (arr[i] >= num1) {
            num1 = arr[i]
            empObj = { ...empObj, 'max': num1 }
        }
    }
    //  /console.log(empObj);
}
//console.log(findNum([60,1, 2, 36, 4,-1, 51, 6,340, 78, 8, 9, 12, 20, 32,320]))

function largerThan20(arr, callback) {
    let empArr = [];
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        if (arr[i] >= 20) {
            empArr = [...empArr, arr[i]]
        }
    }
    callback('1', empArr);
    /*  arr.map((i,index)=>{

     }) */
}
/* largerThan20([60,1, 2, 36, 4,-1, 51, 6,340, 78, 8, 9, 12, 20, 32,320],(str,value)=>{
    console.log(str,value);
}) */

function arrayOfObjCompare(arr1, arr2) {
    /* const a = arr1.every((i,index)=>JSON.stringify(i)===JSON.stringify(arr2[index]))  (desi method as told by shubham)
    return a */
    if (arr1.length === arr2.length) {
        /* for(let i=0;i<arr1.length;i++){   ( with for loop code )
                   if(arr1[i].name===arr2[i].name && arr1[i].age===arr2[i].age){
                    console.log('objects are same')
                   }
                   else{
                    console.log('objects are not same');
                   }
        } */
        arr1.some((element, index) => {
            //console.log(element.name)
            if (element.name === arr2[index].name && element.age === arr2[index].age) {
                console.log('objects are same');
            }
            else {
                console.log('objects are not same');
            }
        });
    }
    else {
        console.log('arrays not same');
    }
}
//console.log(arrayOfObjCompare([{name:'ritika',age:24},{name:'shubham',age:26}],[{name:'ritika',age:25},{name:'shubham',age:26}]))

//multiply(5)(6)

function multiply(a) {
    return function multiply(b) {
        return function multiply(c) {
            return a * b * c
        }
    }
}
//console.log(multiply(2)(5))

//output==>[[1,2,3,4,5],[6,7,8,9,0]]

function sumOfValues(arr) {
    let sum = 0;
    /*  for(let i=0;i<arr.length;i++){
         for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j])
            sum+=arr[i][j]
         }
     } */
     arr.map((i, index) => i.map((j, index) => {
         sum += j 
        }));
        return sum
}
//console.log(sumOfValues([[1, 2, 3, 4, 5], [6, 7, 8, 9, 0], [100,80]]));

const arrOfObj=[{
    id:1,
    name:'ritika',
    age:25,
    country:'India',
    code:'abc'
},
{
    id:2,
    name:'ritika1',
    age:26,
    country:'India',
    code:'xyz'
},
{
    id:3,
    name:'ritika2',
    age:25,
    country:'India',
    code:'abc'
},
{
    id:4,
    name:'ritika3',
    age:26,
    country:'India',
    code:'xyz'
}
]

const arrOfObj2=[
{
    id:2,
    name:'ritika1',
    age:26,
    country:'India',
    class:'12th'
},
{
    id:1,
    name:'ritika sharma',
    age:25,
    country:'India',
    class:'11th'
},
{
    id:5,
    name:'ritika4',
    age:26,
    country:'India',
    class:'15th'
}]

//output=>merge the array

function mergeObj(arr1,arr2){
     let empArr=[];
     for(let i=0;i<arr2.length;i++){
          //console.log(arr1[i]);
          let empObj={}
          if(arr1.some(j=>j.id===arr2[i].id)){
            empObj={...arr1[i],...arr2[i]}
          }
          else{
            empObj={...arr2[i]}
          }
          empArr=[...empArr,empObj]
     }
     console.log(empArr);
}
//mergeObj(arrOfObj,arrOfObj2);

function findVowels(str){
      const strSplit=str.split('');
       return strSplit.filter(i=>'aeiou'.includes(i)).length
      
}
//console.log(findVowels('ritikaii'));

//compare objects

const sArr=[{name:'z',age:50},{name:'a',age:20},{name:'k',age:21},{name:'s',age:20},{name:'b',age:21},{name:'e',age:21},{name:'c',age:17},{name:'ritika',age:1}]

//output==>{ 20: [{ name: 'ritika', age: '20' }] }

function groupObjects(arr){
    let empObj={};
    for (let i=0;i<arr.length;i++){
        //console.log(arr[i]);
        if(empObj[arr[i].name]){
            empObj={...empObj,[arr[i].name]:[...empObj[arr[i].name],arr[i]]}
        }
        else{
            empObj={...empObj,[arr[i].name]:[arr[i]]}
        }
    }
    console.log(empObj);
}
//groupObjects(sArr);

let str1='The ritikadgfuyugsdfgiudhfiudhfui sharma is having guru shubham dsjfhsdhfiusdhiusdh'

function longestWord(str){
     const newStr=str.split(' ');
     let count=0;
     let word;
     for(let i=0 ,len=newStr.length; i<len ;i++){
        //console.log(newStr[i].length);
        if(newStr[i].length>count){
              count=newStr[i].length
              word=newStr[i]     
        }
     }
     console.log(count,word);
}
//longestWord(str1);

//fizzbuzz
function fizzbuzz(num){
    if(num%3===0 && num%5===0){
        return 'FizzBuzz';
    }
    else if(num%5===0){
        return 'Buzz';
    }
    else if(num%3===0){
        return 'Fizz'
    }
    else{
        return '';
    }
}
//console.log(fizzbuzz(20));

/* let s={name:'ritika'};
let n=s;
n.age=1
console.log(n,s); */

function countDigits(num){
    const newNum=num.toString().length;
    console.log(newNum);
}
//console.log(countDigits(56));

//output=>countTrue([true, false, false, true, false]) ➞ 2
function  countTrue(arr){
     const newArr=arr.filter(i=>i).length;
     console.log(newArr);
}
//console.log(countTrue([ false,true, false, false]));

const logic22Arr=[1,2,[1],[[[1]]]]
//output=>normal array [1,2,1,1]

function normalArray(arr){
     //const newArr=arr.flat(20);
     for(let i=0,len=arr.length;i<len;i++){
        normalArray(arr[i]);
     }
}
//console.log(normalArray(logic22Arr))

function removeVowels(str){
    let empStr=[]
    let empArr=[];
    let newStr=str.split('');
    for(let i=0, len=newStr.length;i<len;i++){
        //console.log(newStr[i])
        if(!'aeiou'.includes(newStr[i])){
            empArr=[...empArr,newStr[i]]
         }
    }
    return empArr.join('');
    }
    
//console.log(removeVowels('sun rises'));

function anagram(str1,str2){
     if(str1.length===str2.length){
        let newStr=str1.split('');
        for(let i=0,len=newStr.length;i<len;i++){
            //console.log(newStr[i]);
            if(true){

            }
        }
     }
     else{
        return false
     }
    
}
//console.log(anagram('naps' , 'pan'))

const obj9={'ritIka':[4,4,5,5,6],'shubham':[1,2,3],'shbhaiem':[1,1,2,3]}

function vowelsLength(){
    let result=[];
    for(let i in obj9){
        let vowels=[]
        const splitI=i.split("");
        for(let k=0;k<splitI.length;k++){
             if("aeiou".includes(splitI[k].toLowerCase()) && !vowels.some(x=>x===splitI[k].toLowerCase())){
                vowels=[...vowels,splitI[k].toLowerCase()]
             }
        }
        const sum10=obj9[i].reduce((prev,next)=>prev+next)
        if(vowels.length>=2 && sum10<10 ){
            result=[...result,i]
        }
    }
    console.log(result);
}
//console.log(vowelsLength(obj9));

const obj10 = {
    ok_has_1: [
      { name: "a", value: 2 },
      { name: "b", value: 3 },
    ],
    ok_has_not_2: { address: "abc", phone: "123" },
    ok_has_not_1: { address: "abc1", phone: "23" },
    ok_has_2: [
      { name: "c", value: 4 },
      { name: "d", value: 5 },
    ],
  };

  function appendValues(obj){
     let empObj={};
     let hasNot=[];
     let has=[];
     for(let i in obj){
        if(i.includes('has_not')){
             hasNot=[...hasNot,i]
        }
        else{
            has=[...has,i]
        }
     }
     hasNot.map((x,index)=>{
        
     })
  }
 // console.log(appendValues(obj10));

 function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
      for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
             //console.log(arr[i][j]);
             if(arr[i].includes(elem)){
                   arr[i].filter(k=>k!=elem)
             }
        }
        newArr=arr[i]
      }
    // Only change code above this line
    return newArr;
  }
  
  //console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
