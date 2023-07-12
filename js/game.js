const { func } = require("prop-types");

const hero = document.getElementById("hero");
const build = document.getElementById("build");

document.addEventListener("keydown", function(event){
    jump();
});

function jump() {
    if(hero.classList.contains('jump') == false) {
        hero.classList.add('jump')
    }
    setTimeout(function(){
        hero.classList.remove('jump')
    }, 100)
    
}