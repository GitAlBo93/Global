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

let conteiner = document.createElement('div');
conteiner.className = "conteiner";
document.body.prepend(conteiner);

let tree = document.createElement('div');
tree.className="tree";
let conteinerTask=document.createElement('div');
conteinerTask.className="conteinerTask";
conteiner.prepend(tree,conteinerTask);

let imgTree=document.createElement('div');
imgTree.className="imgTree";
let attempts=document.createElement('div');
attempts.className="attempts";
tree.prepend(imgTree,attempts);

let task=document.createElement('div');
task.className="task";
let keyboard=document.createElement('div');
keyboard.className="keyboard";
conteinerTask.prepend(task,keyboard);

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