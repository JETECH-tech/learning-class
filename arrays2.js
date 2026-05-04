// learning arrays 
let item1="milk"
let item2= "milo"
let item3= "suger"

let item =["milk", "sugar", "milo"]

console.log(item[0])
console.log(item.length)

let fruits=["mangoes", "fanta", "oranges", "watermelon", "citrus"]

fruits.forEach(function(fruits){
    console.log("i love" + fruits)
})


let bags=["ok", "uk"]
let bag_tags=bags.forEach( bags => console.log("original bags" + bags))



let name=["James", "mike", "precious", "John", "Frank"]
name.forEach(function(name){
    console.log("Jet_cohort_1" + name)
})

//map method

let score= [80, 85, 90, 95, 100]
let new_socre= score.map( score=> score*5)// a one line function 
console.log(new_socre)


let result = [20,30,40,50,60]
let new_result=result.map(result=> {                       // mutltiple line function
    console.log("i love my students and decided to add mark to them")
    return result + 10
})
console.log(new_result)


let afa= ["Jet", "Ruth", "Jessica","Martius","Stephen"]
let afa_tag=afa.map( name=>{
    return "Jet_cohort" + afa
})
console.log(afa_tag)

let school= ["esteeem", "metro", "pmf"]
let school_tag= school.map(function(just){
return "these are the best schools in the world" + just
})

console.log(school_tag)

// FOR FILTER METHOD
let old_score =[20,30,40,50,60,70,80,90]
let now_score=old_score.filter(filt => {
    return filt>=50
})
console.log(now_score)


let an_score=[1,2,3,4,5,6,7,8,9]
let aft_score=an_score.filter(function(fat){
    return fat >5
})
console.log(aft_score)


let jamb_score=[100, 120, 140, 200,230,240,280]
let passing_score=jamb_score.filter(function(pass){
    return pass >=200
})
console.log(passing_score)



// find method

let class_name=["james","peter","james"]
let find_names= class_name.find( names=>{
    return names ==="james"
})
console.log(find_names)

// Reduce method
let count=[1300,2000,5000,599,790]
let re_count=count.reduce(function(acc,new_value){
    return acc + new_value
},0)
console.log(re_count)

digit=count.reduce((ball,goal)=>{
    return ball*goal
},1000)
console.log(digit)

// PUSH, POP, SHIFT, UNSHIFT,

let colors=["red", "yellow", "blue"]
push_color=colors.push("yellow")
console.log(push_color)


pop_color=colors.pop()
console.log(pop_color)

shift_colors=colors.shift()
console.log(shift_colors)

unshift_colors=colors.unshift("red")
console.log(unshift_colors)