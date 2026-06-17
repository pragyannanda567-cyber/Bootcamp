//Loops in obj
let obj={
    name:'Pragyan',
    age:18,
    status:true
}

//for...in loop
for(let key in obj){
    console.log(key,typeof key);
    //console.log(obj.key);
    console.log(obj[key]);
}
