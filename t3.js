let boxes = document.querySelectorAll(".box");
let resetbtn =  document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turn0 = true;

const WinPatterns = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
    [2,4,6],
    [6,7,8],
];
const resetgame  = () => {
    turn0  =true;
    enableboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
       if (turn0) {
        box.innerText = "0";
        turn0 = false;
    } else{
        box.innerText ="x";
        turn0 = true;
    }
    box.disabled = true;

    checkWinner();
    });
});
const disableboxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = () => {
    msg.innerText = 'Congratulations, Winner ';
    msgContainer.classList.remove("hide");
    disableboxes();

};

const checkWinner = () => {
    for( let pattern of WinPatterns) {
        let pos1val  = boxes[pattern[0]].innerText;
        let pos2val  = boxes[pattern[1]].innerText;
        let pos3val  = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                console.log("winner");
                showWinner(pos1val);
            }
        }

    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

