/*Starting from the previous exercise, 
try to better handle all errors through 
the Error class and the catch method. Also add the finally method.*/
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
    .finally(() => console.log("finally!"))