let word = ["m","a","s","s","i","v","s"];
let summ=0;
let letter = "s";

    for (let j = 0; j < word.length; j++) {
    console.log(word[j]);
        if (word[j]== letter) {
        summ++;
            console.log(word[j] +"="+ letter);
        }
}    
console.log(summ);





// Задача поиска min max в массиве

// let number = [10,1,5,4,18,2,45,17,15];
// let min=number[0];
// let max= number[0];

// for (let i = 0; i<number.length; i++){
   
//     if (number[i]<min) {
//         min = number[i];
//     }
//     if (number[i]>max) {
//         max = number[i];
//     }
        
// }
// console.log("min=" + min + "  max=" + max);