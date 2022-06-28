// Para copiar `` b n @

const board =[
    ["","",""],
    ["","",""],
    ["","",""],
];

let turn = 0;   // tuen 0 Usuario 1 PC

const boardContainer = document.querySelector("#board");
const playerDiv = document.querySelector("#player");
startGame();

function startGame() {
    renderBoard();
    turn = Math.random() <= 0.5 ? 0 :1;
    renderCurrentPlayer();
    playerPlay();
}
function winning(cell,i){

}
function playerPlay(){
    const cells = document.querySelectorAll(".cell");
    cells.f
    forEach((cell,i) =>{
        cell.addEventListener("click", () =>{
            if(turn == 0 && cell.textContent == ""){
                board[i] = "X";
                cell.textContent = "X";
                winning(cell,i);
                turn = 1;
                renderCurrentPlayer();
            }
            else if (turn == 1 && cell.textContent == "") {
                board[i] = "O";
                cell.textContent = "O";
                winning(cell,i); 
                turn = 0;
                renderCurrentPlayer();
            }
        });   
    });
}

function renderCurrentPlayer(){
    playerDiv.textContent = `${turn == 0 ? "Player 1 turn" : "Player 2 turn"}`
}

function renderBoard(){
    const html = board.map((row)=>{
        const cells = row.map((cell)=>{
            return `<button class="cell">${cell}</button>`;
        });
        return `<div class="row"> ${cells.join("")} </div>`;
    })
    boardContainer.innerHTML = html.join("");
}