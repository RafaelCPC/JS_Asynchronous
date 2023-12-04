/* Write a promise. If the variable called number is greater than 10, 
then it returns a resolve, otherwise it returns a reject. 
Then manage the promise with then and catch in case of any reject. */

const number = 15;
let nPromise= new Promise ((resolve,reject) =>{
   if (number>10) {
    resolve(number);
    } else {
    reject(number);
    }
}
)
nPromise
    .then(() => console.log("Es mayor a 10"))
    .catch(()=> console.log("no es mayor a 10"))