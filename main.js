//  tí sẽ truyền template string
const block = document.querySelector("#block")
const hole = document.querySelector("#hole")
const character = document.querySelector("#character")
var jumping = 0;
var counter = 0;

hole.addEventListener("animationiteration",()=>{
    var random = -((Math.random()*300)+150)
    hole.style.top = random + 'px'
    counter++;
})
// console.log(window);
setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    if(jumping==0){
        character.style.top = (characterTop+3)+'px'
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop > holeTop+130)))){
        alert("Được "+(counter-1) + " điểm nha con gà");
        character.style.top = 100 + "px"
        counter = 0;
    }
}, 10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(() => {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top= (characterTop-5)+'px'
        }
        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}