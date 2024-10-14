let userscore=document.querySelector("#box1");
let compscore=document.querySelector("#box2");
let immediateanswer=document.querySelector("#move");
let rock=document.querySelector("#button1");
let paper=document.querySelector("#button2");
let scissors=document.querySelector("#button3");
let newgame=document.querySelector("#newgame");
let X=userscore.innerText[13];
let Y=compscore.innerText[13];
console.log(X);
console.log(Y);
let count=1;
console.log("Computer generates a number between 1 and 3 both inclusive.");
console.log("1 is for rock, 2 is for paper, 3 is for scissors");
newgame.addEventListener("click",()=>{
    X=0;
    Y=0;
    immediateanswer.innerText="PICK YOUR MOVE";
    startgame();
}
);
const startgame=()=>{
let compinput=Math.floor(Math.random() * 3) + 1;
console.log(compinput);
let userinput;
rock.addEventListener("click",()=>{
    userinput=1;
});
paper.addEventListener("click",()=>{
    userinput=2;
});
scissors.addEventListener("click",()=>{
    userinput=3;
});
if(userinput==1){
    if(compinput==1){
        immediateanswer.innerText="It's a draw.";
        X++;
        Y++;
        userscore.append(X);
        compscore.append(Y);

    }
    else if(compinput==2){
        immediateanswer.innerText="You lose. Paper beats rock.";
        Y++;
        compscore.append(Y);

    }
    else{
        immediateanswer.innerText="You win. Rock beats scissors.";
        X++;
        userscore.append(X);

    }
}
else if(userinput==2){
    if(compinput==1){
        immediateanswer.innerText="You won. Paper beats rock.";
        X++;
        userscore.append(X);

    }
    else if(compinput==2){
        immediateanswer.innerText="It's a draw.";
        X++;
        Y++;
        userscore.append(X);
        compscore.append(Y);
    }
    else{
        immediateanswer.innerText="You lose. Scissors beats paper.";
        Y++;
        compscore.append(Y);

    }

}
else{
    if(compinput==1){
        immediateanswer.innerText="You lose. Rock beats scissors";
        Y++;

    }
    else if(compinput==2){
        immediateanswer.innerText="You won. Scissors beats paper";
        X++;

    }
    else{
        immediateanswer.innerText="It's a draw.";
        X++;
        Y++;

    }

}
}


