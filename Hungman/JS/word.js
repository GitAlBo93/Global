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
let strKey1=document.createElement('div');
let strKey2=document.createElement('div');
let strKey3=document.createElement('div');
let Er=3;
let answer;
let letCode;
let letCodeVirt;
let letCodeKey;
const keyboardLetter = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098,
    1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084,
     1080, 1090, 1100, 1073, 1102];

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

strKey1.className="strKey strKey1";
strKey2.className="strKey strKey2";
strKey3.className="strKey strKey3";
keyboard.prepend(strKey1,strKey2,strKey3);

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

// document.getElementById("word").innerHTML="Ответ";
document.getElementById("mystery").innerHTML="Текст загадки";
document.getElementById('attempts').innerHTML="Осталось попыток: "+ Er;
document.getElementById("parId1").innerHTML="Попытка 1";
document.getElementById("parId2").innerHTML="Попытка 2";
document.getElementById("parId3").innerHTML="Попытка 3";

function addKeybord() {
    for (let i = 0; i < 12; i++) {
        let masKeybord = document.createElement('div');
        masKeybord.className="keyButton";
        masKeybord.id="keyButton"+[i];
        masKeybord.dataset.data=keyboardLetter[i];
        masKeybord.dataset.key=String.fromCharCode(keyboardLetter[i]);
        masKeybord.innerHTML=String.fromCharCode(keyboardLetter[i]);
        strKey1.append(masKeybord);
        // console.log("1 строка "+ keyboardLetter);
     }
     for (let i = 12; i < 23; i++) {
         let masKeybord = document.createElement('div');
         masKeybord.className="keyButton";
         masKeybord.id="keyButton"+[i];
         masKeybord.dataset.data=keyboardLetter[i];
         masKeybord.dataset.key=String.fromCharCode(keyboardLetter[i]);
         masKeybord.innerHTML=String.fromCharCode(keyboardLetter[i]);
         strKey2.append(masKeybord);
     }
     for (let i = 23; i < keyboardLetter.length; i++) {
         let masKeybord = document.createElement('div');
         masKeybord.className="keyButton";
         masKeybord.id="keyButton"+[i];
         masKeybord.dataset.data=keyboardLetter[i];
         masKeybord.dataset.key=String.fromCharCode(keyboardLetter[i]);
         masKeybord.innerHTML=String.fromCharCode(keyboardLetter[i]);
         strKey3.append(masKeybord);
     }
 }
 addKeybord();

//подсветка физически нажатых букв
document.addEventListener ('keypress', (keyKeybord) => {
    document.querySelector('[data-data="' + keyKeybord.keyCode + '"]').classList.add('active');
});

//подсветка букв на виртуальной клавиатуре
document.querySelectorAll('.keyButton').forEach(function (element){
    element.onclick = function (){

        letCode = this.getAttribute('data-data');
        letCodeKey=this.getAttribute('data-key');
        this.classList.add('active');
        clickKeyboard(letCodeKey);
    }
});

go();

async function responsed (){
    const resp = await fetch('json/mystery.json')
    return resp.json();
  }

//   document.addEventListener("DOMContentLoaded", function() {
//     const getRiddleBtn = document.getElementById("getRiddleBtn");
//     const riddleElement = document.getElementById("riddle");
  
//     // Обработчик события клика на кнопку
//     getRiddleBtn.addEventListener("click", function() {
//       // Загружаем данные из JSON файла
//       fetch("riddles.json")
//         .then(response => response.json())
//         .then(data => {
//           // Выбираем случайную загадку из загруженных данных
//           const randomIndex = Math.floor(Math.random() * data.length);
//           const randomRiddle = data[randomIndex].riddle;
  
//           // Отображаем загадку на странице
//           riddleElement.textContent = randomRiddle;
//         })
//         .catch(error => console.error("Error fetching riddles:", error));
//     });
//   });

async function go (){
  
    let jsonPars = await responsed();
    // console.log(jsonPars);
    let mystery1 = jsonPars[0];
    let jsonAnswer=Array.from(mystery1.answer);
    document.getElementById("mystery").innerHTML=mystery1.mystery;
    answer=jsonAnswer;
    // document.getElementById("word").innerHTML=mass;
    // document.getElementById("word").innerHTML=mystery1.answer;
    // console.log(jsonAnswer.length);

    for (let i = 0; i < jsonAnswer.length; i++) {

        let masAnswer = document.createElement('div');
        masAnswer.className="masAnswer" + i;
        masAnswer.innerHTML="___";
        masAnswer.dataset.answer=jsonAnswer[i];
        word.append(masAnswer);
    }
console.log(jsonAnswer);
}

document.addEventListener('keydown',()=>clickKeyboard(event.key));

function clickKeyboard(clickKey) {
    let notEr=false;
    for (let i = 0; i < answer.length; i++) {
        if (clickKey == answer[i]){
            document.querySelectorAll('[data-answer="' + answer[i] + '"]').forEach(element => {
                element.innerHTML=answer[i];
            });
            notEr = true;
        } 
    }
    if (!notEr){
        Er-=1;
        document.getElementById('attempts').innerHTML="Осталось попыток: "+ Er;
        if (Er==2) {
            par1.classList.add('active');
        } else
        if (Er==1) {
            par2.classList.add('active');
        }else
        if (Er==0) {
            par3.classList.add('active');
        }else
        Er=3;
    }
}

// click();

// function clickVirtKeyboard() {
//             let notEr=false;
//             for (let i = 0; i < answer.length; i++) {
//                 if (letCodeKey == answer[i]){
//                     document.querySelectorAll('[data-answer="' + answer[i] + '"]').forEach(element => {
//                         element.innerHTML=answer[i];
//                     });
//                     notEr = true;
//                 } 
//             }
//             if (!notEr){
//                 Er-=1;
//                 document.getElementById('attempts').innerHTML="Осталось попыток: "+ Er;
//                 if (Er==2) {
//                     par1.classList.add('active');
//                      console.log(Er);
//                     }
//             }
// }            


// function click (){
//     document.addEventListener('keydown',()=> {
//         let notEr=false;
//         for (let i = 0; i < answer.length; i++) {
//             if (event.key == answer[i]){
//                 document.querySelectorAll('[data-answer="' + answer[i] + '"]').forEach(element => {
//                     element.innerHTML=answer[i];
                    
//                 });
//                 console.log(event.key);
//                 notEr = true;
//             } 
//         }
//         if (!notEr){
//             Er-=1;
            
//        }
//     });
// }

// document.getElementById('attempts').innerHTML="Осталось попыток: "+ Er;

// document.addEventListener ('keypress', (keyKeybord) => {
//     document.querySelector('[data-data="' + keyKeybord.keyCode + '"]').classList.add('active');
//     console.log(keyKeybord.key); 
// });


// GlobalEventHandlers.onkeypress = function (event) {
//     console.log(event);
//     // keyboard.push=(event.charCode);
// }

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


// console.log(summ);

