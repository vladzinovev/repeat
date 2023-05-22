function getStatusAge(age){
    if(age<14) return 'Children'
    if(age<20) return 'Teenager'
    if(age<50) return 'Adult'
    return 'Old'
}

const getStatusAge2=(age)=>age<14?'Children':age<20?'Teenager':age<50?'Adult':'Old'

function getPrice(model){
    switch(model){
        case 'Mercedes':
        case 'Alfa Romeo':
            return '$100 000';
        case 'BMW':
            return '$90 000';
        case 'McLaren':
            return '$300 000';
        default: 
            return null   
    }
}
console.log(getPrice('Lada'))