const person={
    name:'Max',
    age:23,
    city:'Moscow',
    getName:function(){
        return this.name
    },
    getAge:()=>{
        return this.age
    }
}
console.log(person.getName())//Max
console.log(person.getAge())//undefined

const dividend={
    profit:'$100 000'
}
//объединили вариант 1
console.log(Object.assign(person,dividend))
/* {
    name: 'Max',
    age: 23,
    city: 'Moscow',
    getName: [Function: getName],
    getAge: [Function: getAge],
    profit: '$100 000'
} */

//объединили вариант 1
console.log({...person, ...dividend})
/* {
    name: 'Max',
    age: 23,
    city: 'Moscow',
    getName: [Function: getName],
    getAge: [Function: getAge],
    profit: '$100 000'
} */

//Entries элементы объекта в массив
console.log(Object.entries(person))
/* [
    [ 'name', 'Max' ],
    [ 'age', 23 ],
    [ 'city', 'Moscow' ],
    [ 'getName', [Function: getName] ],
    [ 'getAge', [Function: getAge] ]
] */

//Keys and Values
console.log(Object.keys(person))//[ 'name', 'age', 'city', 'getName', 'getAge' ]
console.log(Object.values(person))//[ 'Max', 23, 'Moscow', [Function: getName], [Function: getAge] ]