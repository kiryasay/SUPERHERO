
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
    }, 300)
    
}

let isAlive = setInterval(function(){
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let buildleft = parseInt(window.getComputedStyle(build).getPropertyValue("left"));
    if(buildleft < 20 && buildleft > 0 && heroTop >= 430)
    {
        alert("GameOver");
    }
}, 10)