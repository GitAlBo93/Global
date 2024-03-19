let conteiner = document.createElement('div');
let tree = document.createElement('div');
let conteinerTask=document.createElement('div');
let imgTree=document.createElement('div');
let attempts=document.createElement('div');
let task=document.createElement('div');
let keyboard=document.createElement('div');
let mystery=document.createElement('div');
let word=document.createElement('div');
let par1=document.createElement('p');
let par2=document.createElement('p');
let par3=document.createElement('p');
let Er=3;

conteiner.className = "conteiner";
document.body.prepend(conteiner);
tree.className="tree";
conteinerTask.className="conteinerTask";
conteiner.prepend(tree,conteinerTask);

imgTree.className="imgTree";
attempts.className="attempts";
attempts.id="attempts";
tree.prepend(imgTree,attempts);

task.className="task";
keyboard.className="keyboard";
conteinerTask.prepend(task,keyboard);

mystery.className="mystery";
mystery.id="mystery";
word.className="word";
word.id="word";
task.prepend(word,mystery);

par1.className="par1";
par1.id="parId1";
par2.className="par2";
par2.id="parId2";
par3.className="par3";
par3.id="parId3";
imgTree.prepend(par1,par2,par3);

document.getElementById("word").innerHTML="Ответ";
document.getElementById("mystery").innerHTML="Текст загадки";
document.getElementById('attempts').innerHTML="Осталось попыток: "+ Er;
document.getElementById("parId1").innerHTML="Попытка 1";
document.getElementById("parId2").innerHTML="Попытка 2";
document.getElementById("parId3").innerHTML="Попытка 3";

async function responsed (){
    const resp = await fetch('json/mystery.json')
    return resp.json();
  }

async function go (){
  
    let respjson = await responsed();
    console.log(respjson);
    let mystery1 = respjson[0];
    document.getElementById("mystery").innerHTML=mystery1.mystery;
    document.getElementById("word").innerHTML=mystery1.answer;
}

go();


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

// let word = ["m","a","s","s","i","v","s"];
// let summ=0;
// let letter = "s";

//     for (let j = 0; j < word.length; j++) {
//     console.log(word[j]);
//         if (word[j]== letter) {
//         summ++;
//             console.log(word[j] +"="+ letter);
//         }
// }    
// console.log(summ);

