
function sayMyName(){
    console.log("p");
    console.log("a");
    console.log("l");
    console.log("a");
    console.log("k");
}
//sayMyName()

function addTwoNumbers(number1, number2)//parameter
{
    console.log(number1+number2)
}
//addTwoNumbers(1,4)//arguements
function addTwoNumbers(number1,number2){
let result = number1+number2
return result
}
const result = addTwoNumbers(1,4)
console.log("result is: ", result);

function loginUserMessage(username){
    if(username=== undefined){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
//console.log(loginUserMessage())


/////////
function subTwo(number1,number2){
    console.log(number1-number2)
}
subTwo(9,8)
//+++++++++++++++++++++++++++++++++




