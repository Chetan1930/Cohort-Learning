// let fruit1= "apple"
// let fruit2 = "mango"
// let fruit3 = "orange"


// array is group of data....
// in js array can have hetrogenous type of data 



const _array1 = ["apple","mango","oragne", 1, 2, 3];
console.log(_array1)

let array2 = [];

array2.push("first_element")

console.log(array2)

console.log(_array1[0])
console.log(_array1[1]="mango red")
console.log(_array1[3])
console.log(_array1[5])

array2.pop();

console.log(array2)
console.log(_array1)


console.log("=============================")


console.log("this is the length of our array1: ",_array1.length)

for(let i =0 ;i<_array1.length;i++){
    console.log(_array1[i])
}


let result  = _array1.map((dataaa,i)=>console.log("this is from map",dataaa,i),)

console.log(" this is result of map function ",result)




