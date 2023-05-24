
//ES7
//default parameter
const getBran= (name='100$')=> {
    if(name==='Apple') return '1000$'
    if(name==='Xiaomi') return '400$'
}

//ES8
//async/await

//ES10
//flat
const cars=['mercedes','lada','audi',['lamborgini','ferrari']]
console.log(cars.flat())//[ 'mercedes', 'lada', 'audi', 'lamborgini', 'ferrari' ]
console.log(cars)//[ 'mercedes', 'lada', 'audi', [ 'lamborgini', 'ferrari' ] ]

//Object.fromEntries в объкт превращаем 
const personArray=[['name','Max'],['age','23']]
console.log(Object.fromEntries(personArray))//{ name: 'Max', age: '23' }

//toString
const price=1000;
console.log(price.toString())//'1000'
console.log(String(price))//'1000'

//converer to Number
const priceStr='1000';
console.log(+priceStr)//1000
console.log(Number(priceStr))//1000