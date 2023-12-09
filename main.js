// template string


let name = ' mohammed'

lastName = ' simo '

console.log(`Bonjour ${name } , tu peux contacter ${lastName} `);  



// -------------------------------------------
// Reduce 
// ---------------------------------------------




let people =
[{ names : 'jawad' , age :30 , poste :'  dev',salaire:100},

{ names : 'imane' , age :31 , poste : 'desgin' , salaire : 200},
{ names : 'amin' , age :32 , poste : '  dev', salaire : 300},
{ names : 'yassine' , age :35 , poste : '  sinistre', salaire : 400},
{ names : 'ali' , age :23 , poste : '  sinistre', salaire : 500} ,
{ names : 'imane' , age :24 , poste : '  assistance', salaire : 600} ]

const total = people.reduce(function(acc,current){
console.log(`acc=>${acc}`);
console.log(`curent=>${current.salaire}`);
acc+=current.salaire

   return acc
},0)
console.log(total);




// -------------------------------------------
// Map
// ---------------------------------------------

let myarray= array.map(function(element,index,arr){

console.log(`curent element =>${element}`);
console.log(`curent index =>${index}`);
console.log(`curent array =>${arr}`);    
console.log(`curent this =>${this}`);
return element * element

},10)
console.log(myarray);

// -------------------------------------------
// find
// ---------------------------------------------

let one = people.find(function(student){

    return student.names == "imane" ;
})

console.log(one);


























