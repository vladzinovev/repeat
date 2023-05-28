
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





//ES11
//Optional chaining
const phone={
    model:{name:'Samsung'},
    price:1000
}
//old
if(phone.brand){
    console.log(phone.brand);
}
//new
console.log(phone?.brand);

//Nullish Coalescing '||'
const brand=phone?.brand || 'Apple'
console.log(brand)//Apple

const age=0;
console.log(age ?? 23)//0
console.log(age || 23)//23


//ES12
//replaceAll
const text=' Max fgfg max dggf maximum'
console.log(text.replaceAll('max',''))//Max fgfg  dggf imum

//new logical assignment operators
let newText=''
//old
newText=newText||text;
//new
newText||=text;
console.log(newText)// Max fgfg max dggf maximum

//Numeric literal separators
const priceNum=100000;
const priceNumber=100_000;
console.log(priceNum===priceNumber)//true