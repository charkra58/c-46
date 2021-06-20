var bgImg

var bear ,bearImg
var fish,fish1Img,fish2Img,fish3Img,fishImg

function preload() {
bgImg =loadImage("images/background1.png");
bearImg =loadImage("images/bear.png");
fishImg =loadImage("images/fish.png");
fish1Img =loadImage("images/fish1.png");
fish2Img =loadImage("images/fish2.png");
fish3Img =loadImage("images/fish3.png");	
}

function setup() {
	createCanvas(800,800);

    bear = createSprite(400,400,30,30)
    bear.addImage("bear",bearImg)
    bear.scale =0.7
}

function draw() {
background(bgImg)

bear.x=mouseX
bear.y=mouseY

spawnFish();
drawSprites()
}

function spawnFish() {
    if(frameCount%60 ===0){
        var fish =createSprite(400,800,15,15);
        fish.velocityY =-3
        fish.x =random(200,700)
        fish.scale =0.5
        var num =Math.round(random(1,4))
        switch(num){
            case 1: fish.addImage("fish",fishImg);
            break;
            case 2: fish.addImage("fish",fish1Img);
            break;
            case 3: fish.addImage("fish",fish2Img);
            break;
            case 4: fish.addImage("fish",fish3Img);
            default:break;
        }
    }
}