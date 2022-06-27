// Para copiar `` b n @

const number = document.querySelector(".number");
const date = document.querySelector(".date");

const maskNumber = "####-####-####-####";
const maskDate = "##/##";

cardNumber = [];
dateNumber = [];

number.addEventListener("keydown",(e)=>{
    if(e.key == "Tab"){
        return;
    }
    e.preventDefault();
    modifyInput(maskNumber, e.key, cardNumber);;
    number.value = cardNumber.join("");
})

date.addEventListener("keydown", (e)=>{
    if(e.key == "Tab"){
        return;
    }
    e.preventDefault();
    modifyInput(maskDate, e.key, dateNumber);;
    date.value = dateNumber.join("");
})
function modifyInput(mask,key,arr){
    let numbers = ["1","2","3","4","5","6","7","8","9"];

    if(key == "Backspace" && arr.length > 0){
        arr.pop();
        return;
    }
    if(numbers.includes(key) && arr.length + 1 <= mask.length){
        if(mask[arr.length] == "-" || mask[arr.length] == "/"){
            arr.push(mask[arr.length],key);
        }else{
            arr.push(key);
        }
    }

}