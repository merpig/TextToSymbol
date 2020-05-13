let message = document.querySelector("#message");
let button = document.querySelector(".btn");
let code = document.querySelector("#code");
let words = [];
let word = [];

button.addEventListener("click",function(){
    redraw();
});

function redraw(){
    code.innerHTML = "";
    let fullMessage = message.value.split('');
    fullMessage.forEach(char => createLetterDiv(char.toLowerCase()));
}

function createLetterDiv(char){
    let letterDiv = document.createElement("div");
    let newLineDiv = document.createElement("div");
    let bold = document.createElement("b");
    let id = "letter" + char;
    let alphabet = "abcdefghijklmnopqrstuvwxyz ";
    if(char===" ") id = "letterSpace";

    letterDiv.setAttribute("class","letterDiv");
    letterDiv.setAttribute("id",id);
    bold.textContent = char;

    newLineDiv.setAttribute("style","margin: 2px; width: auto; margin-right: 100%; height: 20px; float: right; display: inline-block;");
    
    if(char=== "\n"){
        code.appendChild(newLineDiv);
    } else if (alphabet.includes(char)){
        code.appendChild(letterDiv);
    } else{
        code.appendChild(bold);
    }
            
}