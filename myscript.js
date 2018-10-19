
document.addEventListener('DOMContentLoaded', function(){
    showPopup();
    setUp();
    changeFontWeight();
    changeColor();
    initChangeFontIntensityHandler();
    initChangeFontHandler();
});

function showPopup() {
    function promptCall(){
        return prompt("Please enter your name:")
    };
    var name = promptCall();
    while (name == null || name.trim()==""){
        alert("Name must be filled out");
        name = promptCall();
    }
        document.getElementById("name").innerHTML = name;
    
}

function setUp() {
    document.querySelector('input[value="dark"]').checked=true;
    document.querySelector('input[value="normal"]').checked=true;
}

function changeColor(){
    document.querySelector('#color-changer').onchange = function(){
        document.querySelector('h2').style.color = this.value;
        document.querySelector('input[value="dark"]').checked=true;
        document.querySelector('input[value="normal"]').checked=true;
        document.querySelector('h2').style.fontWeight="normal";
    }    
}


function changeFontWeight(){
    document.querySelectorAll('.weight').forEach(input => {
        input.onclick = function() {
            document.querySelector('h2').style.fontWeight=this.value;
        };
    });
};

const fontColors = {
    red: {light: 'pink', dark: 'red' },
    blue: {light: 'lightblue', dark: 'blue' },
    green: {light: 'lightgreen', dark: 'green' },
    black: {light: 'gray' , dark: 'black' },
    violet: {light: 'hotpink', dark: 'violet' }
};

function initChangeFontIntensityHandler(){
    
    document.querySelectorAll('.intensity').forEach(input => {
        input.onclick = function(event){
        let selectedColor = document.querySelector('#color-changer').value;
        console.log(selectedColor);   
        console.log(event.target.value);
            var colorHue = event.target.value;   
        console.log({colorHue});
            document.querySelector('h2').style.color=fontColors[selectedColor][colorHue];  
        }
    });
}

function initChangeFontHandler(){
    document.querySelectorAll('.font').forEach(input => {
        input.onclick = function() {
            document.querySelector('h2').style.fontFamily=this.value;
        };
    });
};

