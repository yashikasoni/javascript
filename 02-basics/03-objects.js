// //  singleton
// //  object.create

// // object literales
// const mysym = Symbol("key1")


// const  jsuser = {
//     name: "yashika",
//     "full name":"yashika soni",
//      [mysym]: "mykey1",
//     age: 19,
//     location: "jaipur",
//     email:"yashika@google.com" ,
//     isLoggedIn: false,
//     lastLoginDays:["monday", "saturday"] 
// }


// // console.log(jsuser.email);
// // console.log(jsuser["email"]);
// // console.log(jsuser["full name"]);
// // console.log(jsuser[mysym]);

// jsuser.email = "yashika@chatgtp.com"
// // Object.freeze(jsuser)
// jsuser.email ="yashika@microsoft.com"
// // console.log(jsuser);

// jsuser.greeting = function(){
//     console.log(" Hello JS users");
    
// }
// jsuser.greetingTwo = function(){
//     console.log(` Hello JS users, ${this.name}`);
    
// }

// console.log(jsuser.greeting());
// console.log(jsuser.greetingTwo());



// singleton / constracter

// const tinderuser = new Object()  //singleton object
// const tinderuser = {} // non singleton object

// tinderuser.Id = "123abc"
// tinderuser.name = "yash"
// tinderuser.isLoggedIn = false



// //console.log(tinderuser);


// const regularuser = {
//     email: "yash@gmail.com"
//     // fullname: {
//     //     userfullname: {
//     //         firstname:"yash"
//     //         lastname:"soni"
//     //     }
//     // }
// }

// // console.log(regularuser.firstname);


// const obj1 = {1: "a" , 2: "b"}
// const obj2 = {3: "a" , 4: "b"}
// const obj4 = {5: "a" , 6: "b"}

// // const obj3 = {obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 ={...obj1, ...obj2}
// // console.log(obj3);


// const users =[
   
//      {
//         id: 1,
//         email: "y@gmail.com",
//     },
//      {
//         id: 1,
//         email: "y@gmail.com",
//     },
//      {
//         id: 1,
//         email: "y@gmail.com",
//     }
// ]

// users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const cource = {
    courcename: "js in hindi",
    price: "999",
    courceTeacher:" yash"
}

const {courceTeacher : teacher}= cource

console.log(teacher);



// {
//     "name " : "yash",
//     "courcename" : "js in hindi",
//     "price" : 
// }


