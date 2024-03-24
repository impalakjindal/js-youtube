//singleton not made when declared as literals but made when made with constructors
//object literals= object declaration
 /*const JsUser= {
    name : "Agastya",
    age:2,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
}
console.log((JsUser.email)*/

///
const tinderUser = new Object()
tinderUser.id="123abc"//declaration of objects
tinderUser.name="sammy"
tinderUser.isLoggedIn= false

//console.log(tinderUser)
const regularUser= {
 email:"some@gmail.com",
 fullname:{//nested objects
    userfullname:{
        firstname: "Palak",
        lastname:"Jindal"
    }
 }   
}
console.log(regularUser.fullname.userfullname.lastname)