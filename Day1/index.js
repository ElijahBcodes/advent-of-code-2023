/**
 * Creates a function that imports a file 
 * delcate a const for the lines trim and split them into an array
 * 
 */
import fs from 'fs';
//import the file and convert into an array 
const lines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')


function grabNums() {

  const values = lines 
   .map((line) => {
    let value = '';
    let first = line.split('').find((v)=> !Number.isNaN(Number(v)))
    let last = line.split('').findLast((v)=> !Number.isNaN(Number(v)))
    return Number( first + last);//returns an array of all the numbers 
   });
//return the sum of all the values
return values.reduce((s, v)=>s + v)

}


console.log(grabNums('./input.txt'))