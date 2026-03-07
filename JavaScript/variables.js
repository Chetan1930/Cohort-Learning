/* 

variable are something we are required to store the values

input = "user hume input de rha hoga"


console.log(input)

if(input >= 18 ){
    console.log("ye bnda vote de skta h ")
}
else {
    console.log("Aap vote nhi de skte ho ")
}

In JavaScirpt  , Humare paas 3 type ke variable ho skte h 

    1. var

    2. let 
    3. const


jo upper humne input liya tha user se vo actually variable mention krke liya jayega 
for example :

var input = 0; 
let somethingelse = "chetan"
const pie = 3.14 


type of datatype in JS 

basically 8 type ke datatype hote h hmare paas , jisme 7 primitive hote h and 1 non-primitive 

Primitive:
    1. number -> 0,-1, -2, 1, 2, 
    2. string  -> "chetan" or 'chetan' or `chetan ${var_name}`
    3. char  -> 'A' or 'a'
    4. boolean  -> true or false or 1 or 0 
    5. symbol   -> ye ek speacial datatype h 
    6. undefined  -> ye tb hota h jb aap defined kr do kisi chij ko but uski value nhi do toh 
    7. bigint  -> int ke sath jb n lga do toh vo bn jata h bigint

non-primitive 
    8. object -> rest everything is JS is object


    basic difference between var , let and const is 
    var - hoisting mei believe krta h , ye global scope ka hota h 
    let - ye TDZ mei chla jata h and reference error de dega, ye block ya functional scope ka hota h 
    const -  ye toh syntax error de dega , same as let in term of scope 

    const baki dono se ek term mei alg hota h aur vo h , ki const ki value change nhi hoti ek baar bn jane ke baad



    */

// a=5;
// console.log(a) ;

// var a;
// let a;
// const a;

// let c=6;

{
    // var  b = 5; 
    // const  b = 5; 
    // let  b = 5; 

    // console.log(c);
}

// console.log(b);


/*
scope kya hota h ? 

bhar defined kri hui chije ander access ho jati h , but ander  defined kri hui chije bhar access nhi ho skti 


let z = 101;

function xyz(){

    hum z ko yha use kr skte h 

    aur maan lo ab hum es function ke ander kuch bnaye 

    let y = 102;


    {
        y yha access ho skta h 
    }

    y yha access ho skta h 
}


but y yha access nhi ho skta 


toh bhai mere bs yhi hota h scope 

*/