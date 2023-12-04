/*Starting from the previous exercise, we want to add to our function repeatHello, 
a clearInterval after 5 seconds, could you do that?

The callback function must be an arrow function, can you also explain why? */
function repeatHello (callback) {
   let interval= setInterval(callback, 1000);
    setTimeout(() => clearInterval(interval), 5000);
}
repeatHello(() => console.log("Hello"));
/*arrow function funciona parecido a un this en el 
sentido de que heredan el valor en situaciones donde
el valor no pueda quedar claro. Aunque en esta situación no
sea algo esencial */

