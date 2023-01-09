function solve(){
    let redButton = document.getElementById('redButton');
    let brownButton = document.getElementById('brownButton');
    let yellowButton = document.getElementById('yellowButton');
    let greenButton = document.getElementById('greenButton');
    let cyanButton = document.getElementById('cyanButton');
    let blueButton = document.getElementById('blueButton');
    let purpleButton = document.getElementById('purpleButton');
    let pinkButton = document.getElementById('pinkButton');
    let whiteButton = document.getElementById('whiteButton');

    let createBearButton = document.getElementById('button')
    createBearButton.addEventListener('click', createBear)
    
    redButton.addEventListener('click', changeColorToRed);
    brownButton.addEventListener('click', changeColorToBrown);
    yellowButton.addEventListener('click', changeColorToYellow);
    greenButton.addEventListener('click', changeColorToGreen);
    cyanButton.addEventListener('click', changeColorToCyan);
    blueButton.addEventListener('click', changeColorToBlue);
    purpleButton.addEventListener('click', changeColorToPurple);
    pinkButton.addEventListener('click', changeColorToPink);
    whiteButton.addEventListener('click', changeColorToWhite);

    let bear = document.getElementById('mechencemodel1');

    function changeColorToRed(){
        bear.src = "../../Models/RedBear.png"
    }
    function changeColorToBrown(){
        bear.src = "../../Models/LightBrownBear.png"
    }
    function changeColorToYellow(){
        bear.src = "../../Models/YellowBear.png"
    }
    function changeColorToGreen(){
        bear.src = "../../Models/GreenBear.png"
    }
    function changeColorToCyan(){
        bear.src = "../../Models/CyanBear.png"
    }
    function changeColorToBlue(){
        bear.src = "../../Models/BlueBear.png"
    }
    function changeColorToPurple(){
        bear.src = "../../Models/PurpleBear.png"
    }
    function changeColorToPink(){
        bear.src = "../../Models/PinkBear.png"
    }
    function changeColorToWhite(){
        bear.src = "../../Models/WhiteBear.png"
    }

    async function createBear(){
        let outerEyes = document.getElementById('eyes').getElementsByClassName('outerEye')[1]
        let innerEyes = document.getElementById('eyes').getElementsByClassName('innerEye')[1]
        let outerEyeSize = [outerEyes.clientWidth, outerEyes.clientHeight];
        let innerEyeSize = [innerEyes.clientWidth, innerEyes.clientHeight];

        let name = document.getElementById('rectangle1').value;
        if(name === '' || name.length < 3 || name.length > 14){
            let warning = document.getElementById('warning');
            warning.innerText = 'Invalid Name';
            return;
        }

        let bearObj = {
            body: bear.src,
            outerEyeSize,
            innerEyeSize,
            name
        }

        
        let result = await fetch('http://localhost:3030/jsonstore/bear', {
            method: 'post',
            headers: {'Content-Type': 'Aplication/json'},
            body: JSON.stringify(bearObj)
        });

        let data = await result.json()

        let id = data._id;

        sessionStorage.setItem('lastBearId', id);
        location.href = "../HomePage/home.html"
    }

}