
const todos=[
    {
        name:'shop',
        isCompleted:true
    },
    {
        name:'Cleaning',
        isCompleted:true
    },
    {
        name:'Buy t-shirt',
        isCompleted:false
    }
]

//Local Storage
localStorage.setItem('todos',JSON.stringify(todos))
console.log(JSON.parse(LocalStorage.getItem('todos')))

//Session Storage
sessionStorage.setItem('todos',JSON.stringify(todos))
console.log(JSON.parse(sessionStorage.getItem('todos')))

//Cookies
document.cookie=`todos=${JSON.stringify(todos)};path=/`
