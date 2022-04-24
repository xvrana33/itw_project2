// login: xvrana33 / 227868@vutbr.cz
// typewriter effect pre h1 na úvodnej časti stránky

var messageArray = ["I'm Bilbo Baggins"];
var textPosition = 0;
var speed = 100;


typewriter = () => {
document.querySelector("#hello").
innerHTML = messageArray[0].substring(0,
textPosition) + "<hellospan>\u25ae</hellospan>";

if(textPosition++ != messageArray[0].length)
setTimeout (typewriter, speed);
}

window.addEventListener("load", typewriter);