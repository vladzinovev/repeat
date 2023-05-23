const studentsName=['Max','Vlad','Elena']
//map
console.log(studentsName.map((name,index)=>index +'. '+ name))//[ '0. Max', '1. Vlad', '2. Elena' ]

console.log(studentsName.map((name,index)=>`${index}. ${name}`))//[ '0. Max', '1. Vlad', '2. Elena' ]

console.log(studentsName.map((name,index)=>`${index+1}. ${name}`).join('\n'))
/* 
1. Max
2. Vlad
3. Elena 
*/


const students=[{
    name:'Max',
    age:23
},{
    name:'Vlad',
    age:21
},{
    name:'Elena',
    age:18
}]

//filter
console.log(students.filter((student)=>student.age>20))//[{ name: 'Max', age: 23 }, { name: 'Vlad', age: 21 }]

//push
students.push({name:'Sveta',age:22})
console.log(students)
/* 
[
    { name: 'Max', age: 23 },
    { name: 'Vlad', age: 21 },
    { name: 'Elena', age: 18 },
    { name: 'Sveta', age: 22 }
] */

//slice
console.log(students.slice(0,1))//[ { name: 'Max', age: 23 } ]
