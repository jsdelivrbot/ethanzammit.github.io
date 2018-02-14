/*global createCanvas*/
/*global background*/
/*global createSprite*/
/*global width*/
/*global LEFT_ARROW*/
/*global RIGHT_ARROW*/
/*global height*/
/*global keyDown*/
/*global drawSprites*/
/*global loadImage*/
/*global drawSprites*/
/*global drawSprites*/

var player;
var enemy;
var isGameOver;

var playerImage;
var enemyImage;
var backgorundImage;

var enemySpeed;

function preload(){
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}



function setup() {
    createCanvas(256, 256);
    player = createSprite(width/2, height-(playerImage.height/2),50, 50);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 10, 30);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 6.0;
    enemySpeed = 4;
    isGameOver = false;
    
}


function draw() {
    
    background(backgroundImage);
    
        if (isGameOver){
    gameOver();
}else {
    if(enemy.overlap(player)){
        isGameOver = true;
    }



    
    if(keyDown(RIGHT_ARROW) && player.position.x < (width-(playerImage.height/2))) {
    player.position.x = player.position.x + 6;
    }
    
    if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.height/2)) {
        player.position.x = player.position.x -6;
    }
    
    enemy.position.y = enemy.position.y + enemySpeed;
    if(enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
        enemySpeed = enemySpeed+0.2;
    }
    

   
    
    drawSprites();
}
}

function gameOver(){
    background(0);
    textAlign(CENTER);
    fill("white");
    text("GAME OVER!", width/2, height/2);
    text("Click anywhere to start again", width/2, 3*height/4);
}

function mouseClicked(){
    
    if(isGameOver){
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
    }
}