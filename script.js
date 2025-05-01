let countLabel = document.getElementById("countlabel");
const increaseButton = document.getElementById("increasebut");
const decreaseButton = document.getElementById("decreasebut");
const resetButton = document.getElementById("resetbut");


let meow = 0;

increaseButton.onclick = function(){
    meow++;
    countLabel.textContent = meow;
}

decreaseButton.onclick = function(){
    meow--;
    countLabel.textContent = meow;
}
resetButton.onclick = function(){
    meow = 0;
    countLabel.textContent = meow;
}
