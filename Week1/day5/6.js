//Object Data Type

//Non Primitive
//Collection of Key value Pair
//Mutable
//Syntax : {}
//Dynamic in size/length
//key=>string, value=>anything
//key=>unique, Value=>can be duplicate

//CRUD

//1. Create
let obj={
    id:18,
    name:'Pragyan',
    hobby:['Travelling','Reading'],
    status:false,
    address:{
        city:'Delhi'
    },
};

//2.Read
console.log(obj)

//3.Update
obj['status']=true
obj.name = 'Galaxy'

//Create A new key value pair
obj.email='p@gmail.com'

console.log(obj);

//4.Delete
delete obj['email']
delete obj.id

console.log(obj);