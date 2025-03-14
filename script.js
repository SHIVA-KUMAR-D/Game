let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScor =document.querySelector("#your-score");
const compscor = document.querySelector("#computer-score")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame=()=>{
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="orange";
    
}
const showWinner=(userWin,userChoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScor.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscor.innerText=compScore;   
        msg.innerText=`You lose! ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const compchoice=generateComp();
    if(userChoice === compchoice){
        drawGame();
        showWinner(userWin);
    }
    else{
        let userWin=true;  
        if(userChoice === "rock"){ 
        userWin = compchoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compchoice === "scissor" ? false : true;
        }
        else{
            userWin = compchoice === "rock" ? false : true;
        }
         showWinner(userWin,userChoice,compchoice);
    }
}

const generateComp=()=>{
    let options = ["rock","paper","scissor"];
    let compchoice = options[Math.floor(Math.random() * options.length)];
    return compchoice;
}