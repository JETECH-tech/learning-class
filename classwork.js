
const numbers=[1,2,3,4,5,6]
Doubled_numbers=numbers.map(num=> {
    return num*2
})
console.log(Doubled_numbers)

const scores=[250, 300,350,200,400,180,160]
fillt_score=scores.filter(function(scores){
return scores >= 300
})
console.log(fillt_score)

const sum=[2000, 5000, 2000, 100,200]
reduce_sum=sum.reduce(function(accumulator,currentprice){
    return accumulator+currentprice
},0)
console.log(reduce_sum)

const color=["Blue", "red", "yellow"]
push_color=color.push("green")
pop_red=color.pop("red")
slice_way=color.slice(1)
console.log(slice_way)
console.log(push_color)
console.log(pop_red)