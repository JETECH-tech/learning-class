// am learning error handling 
try{
    let result= 10/0
    console.log(result)
    undefinedfunction()
    console.log("this message will not run")

}catch(error){
    console.log("An error occured:" + error.name +error.message)
};
console.log("the program continues here")


try{
    let age =25
    console.log(age.length())

}catch(error){
    console.log("An error occured :" + error.name +error.message)
}
// amlearning git 
