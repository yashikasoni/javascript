function saymyName() {
    console.log("y");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("k");
    console.log("a");
    
}

// saymyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
// function addTwoNumbers(number1, number2){

//   let result = number1 + number2
//   return result
    
// }
//  const result = addTwoNumbers(2, 5) 
//  console.log("Result:", result);
 


function loginuserMessage(username){
    if(username===undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuserMessage("yash"));
// console.log(loginuserMessage());

function calaulateCartPrice(...num1){
    return num1
}

// console.log(calaulateCartPrice(200, 400, 500,2000))

const user ={
    username:"yash",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username:"yash",
    price: 399
}) 


const mynewArray =[200, 400, 600, 100]

function returnsecondValue(getArray){
    return getArray[1]
}

// console.log(returnsecondValue(mynewArray));
console.log(returnsecondValue([200, 400, 500, 1000]));

