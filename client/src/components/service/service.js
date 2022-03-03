const basicApi=process.env.NODE_ENV==="production" ?
'https://office-mern.herokuapp.com/employee':'http://localhost:8000/employee' 

export const getData=()=>{
    return fetch(basicApi)
    .then(response=>response.json())
    .catch(err=>console.log(err))
}


