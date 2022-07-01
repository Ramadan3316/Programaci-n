// Para copiar `` b n @

const board =[
    ["","",""],
    ["","",""],
    ["","",""],
];

let turn = 0;   // turno 0 Usuario 1 PC
let actualMode = false;
const boardContainer = document.querySelector("#board");
const playerDiv = document.querySelector("#player");

const button = document.querySelector(".whoPlay");
// INICIO EL JUEGO
startGame();

button.addEventListener("click",()=>{
    actualMode == false ? actualMode = true : actualMode = false;
    console.log(actualMode);
    whoPlay();
})

function whoPlay(){
    if(actualMode == false){
        button.textContent = "Play with PC";
    }else button.textContent= "Play with 2 players";
}

function startGame(){
    whoPlay();
    renderBoard();
    turn = 1;
    renderCurrentPlayer();
    playerPlay();
}
function pcPLay(){
    renderCurrentPlayer();
    setTimeout(()=>{
        console.log("Estoy aca");
        const options = canWin();
        if(options.length > 0){ //Si es menor que 0 significa que apenas empezo el juego
            const bestPlay = options[0];
            console.log("options es"+options.value)
            console.log("best play es"+bestPlay.value);
            for(let i = 0; i < bestPlay.length; i++){
                if(bestOption.value == 0){ // verifica que no haya nada en esa posición
                    const posR = bestPlay[i].r;
                    const posC = bestPlay[i].c;
                    board[posR][posC] = "O";
                    break;
                }
            }
        }else{
            console.log("options es" + options[0])
            for(let r = 0; r < board.length; r++) {
                for(c = 0; c < board.length; c++) {
                    if(board[r][c] == "" && turn == 0){
                        board[r][c] = "O";
                        console.log("estoy aca");  
                        turn = 1; 
                    } 
                }
            }
        }
        
        renderBoard();
        renderCurrentPlayer();
        playerPlay();
    },1500)
}

function canWin(){
    const arr = JSON.parse(JSON.stringify(board)); //Copia el arr bidimensional completamente 
    for(let r = 0; r< arr.length; r++) {
        for(let c = 0; c < arr.length; c++) {
            if(arr[r][c] == "O") arr[r][c] = {value: 1,r,c} 
            if(arr[r][c] == "") arr[r][c] = {value: 0,r,c}
            if(arr[r][c] == "X") arr[r][c] = {value: -2,r,c}
        }
    }
    const p1 = arr[0][0];
    const p2 = arr[0][1];
    const p3 = arr[0][2];
    const p4 = arr[1][0];
    const p5 = arr[1][1];
    const p6 = arr[1][2];
    const p7 = arr[2][0];
    const p8 = arr[2][1];
    const p9 = arr[2][2];

    const w1 = [p1,p2,p3];
    const w2 = [p4,p5,p6];
    const w3 = [p7,p8,p9];
    const w4 = [p1,p4,p7];
    const w5 = [p2,p5,p8];
    const w6 = [p3,p6,p9];
    const w7 = [p1,p5,p9];
    const w8 = [p3,p5,p7];
    console.log(`Este es el arr ${w1[0]} y este es su value: ${w1[0].value}`);
    const resultado = [w1,w2,w3,w4,w5,w6,w7,w8].filter((win)=>{
        return win[0].value + win[1].value + win[2].value == 2 ||
        win[0].value + win[1].value + win[2].value == -4;
    })
    console.log("el resultado es:"+resultado);
    return resultado;
}

function playerPlay(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell,i) =>{
        const column = i % 3;
        const row = parseInt(i / 3);
        cell.addEventListener("click",()=>{
            if(board[row][column] == "" && turn == 1){
                board[row][column] = "X";
                cell.textContent = board[row][column];
                console.log(board);
                turn = 0;
                renderCurrentPlayer();
                pcPLay();
            }else if(board[row][column] == "" && turn == 0 && actualMode == false){
                board[row][column] = "O";
                cell.textContent = board[row][column];
                console.log("player 2 juega");
                turn = 1;
                renderCurrentPlayer();
            }
        });
        
    });   
}

function renderCurrentPlayer(){
    if(turn == 1){
        playerDiv.textContent = "Player 1 turn";
    }else if(turn == 0){
        playerDiv.textContent = `${actualMode == false ? "Player 2 turn" : "PC turn"}`;
    }
    
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