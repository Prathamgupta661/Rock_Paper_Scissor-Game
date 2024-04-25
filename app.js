let userscore = 0;
let comsocore = 0;

const choices = document.querySelectorAll(`.choice`);
const msg=document.getElementById('msg');
const playersc=document.querySelector("#playerScore");
const conpsc=document.querySelector('#computerScore');
const msgcont=document.querySelector('.msg-container');
const rstbtn=document.querySelector('#rstbtn')

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id")
        
        playgame(userchoice);
    })
});

const gencompchoice = () => {
    const option = ['rock', 'paper', 'scissors'];
    const randin = Math.floor(Math.random() * 3)
    return option[randin];
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if (userchoice === compchoice) {
        msg.innerText= "It's a draw.";
        msgcont.style.backgroundColor="#5bc0be";
    }
    else {
        let userwin = true;
        if (userchoice === 'rock') {
            userwin = compchoice === 'paper' ? false : true;
        } else if (userchoice === 'paper') {
            userwin = compchoice === 'scissors' ? false : true;
        } else  {
            userwin = compchoice === 'rock' ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }   
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText= `Congratulations! You won your ${userchoice} beats ${compchoice}.`;
        msgcont.style.backgroundColor= "green";
        userscore++;
        playersc.innerText='Player: '+userscore;
        
    }
    else{
        msg.innerText=`Sorry! You lost ${compchoice} beats your ${userchoice}.`;
        msgcont.style.backgroundColor="red";
        
        comsocore++;
        conpsc.innerText='Computer: ' +comsocore;
    }
}

rstbtn.addEventListener('click',()=>{
    userscore=0;
    comsocore=0;
    playersc.innerText='Player: 0';
    conpsc.innerText='Computer: 0';
    msg.innerText='Play your move.';
    msgcont.style.backgroundColor="#5bc0be";
})
