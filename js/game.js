

const hero = document.getElementById("hero");
const build = document.getElementById("build");
const node = document.getElementById("game");

document.addEventListener("keydown", function(event){
    if ((event.code == 'Space' ) || (event.code == "ArrowUp")){
        jump();
      }
});

function jump() {
    if(hero.classList.contains('jump') == false) {
        hero.classList.add('jump')
    }
    setTimeout(function(){
        hero.classList.remove('jump')
    }, 300)
    
}


/* 
function createBuild(){
    let object = document.createElement('div');
    object.setAttribute("class", "build", "id", "build");
    object.style.backgroundImage = "url('/img/sign.png')";
    object.style.height = "75px";
    object.style.width = "30px";
    object.style.backgroundSize = "30px 75px";
    object.style.position = "relative";
    object.style.top = "75px";
    object.style.animation = "buildMove 1.5s infinite linear";
    node.appendChild(object);
    node.removeChild(object);
}
setInterval(createBuild, 1000); */

let isAlive = setInterval(function(){
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let buildleft = parseInt(window.getComputedStyle(build).getPropertyValue("left"));
    if(buildleft < 20 && buildleft > 0 && heroTop >= 260 )
    {
        alert("wefewfwe");
    }
    
}, 10)