//catch target elemtents from DOM:
let body = document.getElementsByTagName('body')[0];
let colorBtn = document.getElementById('color-btn');
let showHexcode = document.getElementById('hexcode');
let hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
colorBtn.addEventListener('click', changeColor);
function changeColor(){
    let code = '#';

   for(var i=0; i < 6;  i++){
        //get a rendom number for color:
    let random = Math.floor(Math.random() * hexNumbers.length);
    code += hexNumbers[random];
    }; 
    body.style.backgroundColor = code;
    showHexcode.className = 'show';
    showHexcode.textContent = code;
}