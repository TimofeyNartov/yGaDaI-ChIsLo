let okBuButton = document.getElementById("okBuButton")
let input = document.getElementById("input")
let chislo = document.getElementById("chislo")
let HP = 4;
let hpTitle = document.getElementById("hpTitle")
let podskazka = document.getElementById("podskazka")
let palmaPalma = document.getElementById("palmaPalma")
let score = 0
let reliseButton = document.getElementById("reliseButton")
let score2 = 0
let tortoise = document.getElementById("tortoise")
let minim = 1;
let maxmax = 5;
let defaultGradient = "linear-gradient(90deg,rgba(255, 241, 7, 1) 0%,rgba(255, 115, 0, 1) 35%,rgba(255, 0, 245, 1) 100%)";
let secretSeykanmona = raRandom(minim, maxmax);
input.placeholder = "ПИШИ ЧИСЛО БИСТРО от " + minim + " до " + maxmax
let easy = document.getElementsByClassName("levleButton")[0]
let normal = document.getElementsByClassName("levleButton")[1]
let hard = document.getElementsByClassName("levleButton")[2]
hpTitle.innerHTML = "🍭".repeat(HP)
input.focus();
function raRandom(minimum, max) {
    return Math.floor(Math.random() * (max - minimum + 1) + minimum);
}

function newGame(){
    secretSeykanmona = raRandom(minim, maxmax);
input.placeholder = "ПИШИ ЧИСЛО БИСТРО от " + minim + " до " + maxmax
    HP = 4
    hpTitle.innerHTML = "🍭".repeat(HP)
}

reliseButton.onclick = function (event) {
    event.preventDefault();
    HP = 4
    hpTitle.innerHTML = "🍭".repeat(HP)
    okBuButton.disabled = false;
    podskazka.innerHTML = "";
    chislo.innerHTML = "Если угадаешь число 5 раз подряд без ошибок то ты получишь ничего.";
    input.value = "";
    input.focus();
    secretSeykanmona = raRandom(1,9)
}

okBuButton.onclick = function (event) {
    event.preventDefault();
    //  console.log(raRandom(1,11));
    // / chislo.innerHTML=input.value;
        input.select()
    if (secretSeykanmona == input.value) {
        chislo.innerHTML = "О, повезло повезло"
        score = score+1
        document.body.style.background = "radial-gradient(circle, rgba(35,255,0,1) 0%, rgba(255,244,8,1) 51%, rgba(27,255,0,1) 100%)"
        setTimeout(function(){
             document.body.style.background = defaultGradient;   
        }, 1550)
        if (score% 5==0){
            score2 = score2+1 
            tortoise.innerHTML = "🐢"+score2
         }
        palmaPalma.innerHTML = "🌴"+score
        podskazka.innerHTML = "";
        okBuButton.disabled = true
    }
    else {
        chislo.innerHTML = "Не повезло не повезло"
        HP = HP - 1;
        document.body.style.background = "radial-gradient(circle, rgba(255,16,0,1) 0%, rgba(255,244,8,1) 51%, rgba(255,0,0,1) 100%)"
        setTimeout(function(){
             document.body.style.background = defaultGradient;
        }, 1550)
        hpTitle.innerHTML = "🍭".repeat(HP)
        if (secretSeykanmona > input.value) {
            podskazka.innerHTML = "Секретное число больше."
        }
        else {
            podskazka.innerHTML = "Секретное число меньше."
        }
        if (HP == 0) {
            chislo.innerHTML = "Ты проиграл. Секретное число было " + secretSeykanmona
            hpTitle.innerHTML = "☠️💀☠️💀☠️💀"
            score = 0
            score2 = 0
            palmaPalma.innerHTML = "🌴"
            tortoise.innerHTML = "🐢"
            okBuButton.disabled = true;
        }
    }
    // input.value = ""
    // input.focus()
}

normal.onclick = function () {
      minim = 1;
      maxmax = 10;
      newGame()
}
easy.onclick = ()=>{
      minim = 1;
      maxmax = 5;
      newGame()
}
hard.onclick = ()=>{
      minim = 1;
      maxmax = 25;
      newGame()

}








// домашняя работа:
// при победе включать зелёный градиент.
// background: rgb(35,255,0);
// background: radial-gradient(circle, rgba(35,255,0,1) 0%, rgba(255,244,8,1) 51%, rgba(27,255,0,1) 100%);


