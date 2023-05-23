fetch('https://jsonplaceholder.typicode.com/todos/1.com')
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(e=>console.error(e))
    .finally(()=>{
        console.log('finish')
    })

const fetchToDo=async()=>{
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1.com')
        const json=await response.json()
        console.log(json)
    }
    catch(e){
        console.error(e)
    }
    finally{
        console.log('finish')
    }
    
}

const fetchTodo=async()=>{
    await axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then((response) => {
            set(response.data);
        })
        .catch((error) => {
            setError(true);
            setErrorMessage(error.message);
        });
}
