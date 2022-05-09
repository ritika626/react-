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
    const countryNames={UAE:'United arab emirates',IN:'India',US:'America'}
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