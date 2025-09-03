let [your_score, computer_score] = [0, 0];
let res = document.getElementById("details");
let choices_obj = {
    'rock': {
        'rock': 'Draw',
        'paper': 'Lose',
        'scissors': 'Win'
    },
    'paper': {
        'paper': 'Draw',
        'scissors': 'Lose',
        'rock': 'Win'
    },
    'scissors': {
        'scissors': 'Draw',
        'rock': 'Lose',
        'paper': 'Win'
    }
};

function checker(input) {
    var choices = ['rock', 'paper', 'scissors'];
    var num = Math.floor(Math.random() * 3);
    document.getElementById("your_choice").innerHTML = 
        `You choose <span>${input.toUpperCase()}</span>`;
    document.getElementById("computer_choice").innerHTML = 
        `Computer chooses <span>${choices[num].toUpperCase()}</span>`;
    let computer_choice = choices[num];
    switch (choices_obj[input][computer_choice]) {
        case 'Win':
            res.style.cssText = "background-color: #cefdce; color: #689f38";
            res.innerHTML = "YOU WIN";
            your_score++;
            break;
        case 'Lose':
            res.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            res.innerHTML = "YOU LOST";
            computer_score++;
            break;
        default:
            res.style.cssText = "background-color: #e5e5e5; color: #808080";
            res.innerHTML = "IT'S A DRAW";
            break;
    }
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("your_score").innerHTML = your_score;
}

const b1 = document.getElementById("rock");
const b2 = document.getElementById("paper");
const b3 = document.getElementById("scissors");

b1.addEventListener("click", () => checker("rock"));
b2.addEventListener("click", () => checker("paper"));
b3.addEventListener("click", () => checker("scissors"));

