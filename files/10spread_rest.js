const language={
    name:'RU',
    level:'difficult'
}

const languagePopulation={
    population:400000000
}

console.log({...language,...languagePopulation})

const jeep=['Jeep', 'Range Rover','Land rover']
const sportCar=['Lamborgini','Ferrari','Koenigsegg']
const car=[...jeep,...sportCar]
console.log(car)


const {name,...rest}={
    name:'Oleg',
    secondName:'Ivanov',
    age:25
}
console.log(name)//Oleg
console.log(rest)//{ secondName: 'Ivanov', age: 25 }
console.log(rest.age)//25