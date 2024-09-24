// program for Calculation
const screen=document.getElementById("screen");
hello
function display(input){
screen.textContent+=input;
}

function clearScreen(){
screen.textContent=" ";
}

function equalTo(){
    try{
        screen.textContent=eval(screen.textContent);
    }
    catch(error){
        window.alert('Maths error');
    }
}

