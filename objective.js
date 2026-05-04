// LEARNING OBJECTIVES 
let obj ={
    name:"James Ebube",
    age:25,
    career:"developer"

}

console.log(obj.age)// normal callings
console.log(obj["career"])// calling by arrays 


//DISTRUCTURING 
let employee={
    name: "Jet",
    role:"attend to client",
    salary: 50000,
    city: "lagos"
}

let {name, role, salary}=employee
console.log(name)


let {name:workrname}=employee
console.log(workrname)


let profile={
    name: "Jettech",
    age: 37,
    country: "Nigeria"
}


let updated_profile={
    ...profile,
    food:"bread baked under  coals "
}
console.log(updated_profile)


let user={
    names: "James",
    class:"undergraduate",
    city:"lagos",
    
}

/*for (let key in user){
    console.log(key)
    console.log(user[key])
}



for (let values in user){
    console.log(values)
    console.log(user[values])
}*/

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))