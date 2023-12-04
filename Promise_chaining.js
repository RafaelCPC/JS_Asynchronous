/*Write a first promise that takes as parameter the variable isLogged . 
If the variable is true, then we return a random number from the resolve, 
otherwise we dispatch an error. We write a second promise that 
takes a variable of type number as a parameter. 
If the input parameter is greater than 0.5, 
in the resolve we must return the following data: {name: "John", age: 24}, 
otherwise we must dispatch an error. Once this is done, 
try to chain the promises to eventually 
return the final object {name: "John", age: 24}*/

const isLogged = true;
let rand= Math.random();
let obj= {name: "John", age: 24};
function pPromesa () {
  
   return new Promise((resolve,reject) => {
        setTimeout(() => {

        if(isLogged==true){
            resolve(rand);
        }else{
            reject(new Error("user is not logged"));
        }
    },500);
    })
}
function sPromesa(rand) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (rand>0.5) {
                resolve(console.log(obj))
            } else{
                reject(new Error ("random number is <0.5"))
            }
        },500);
    })
}
pPromesa()
    .then(sPromesa)
    .catch()
    