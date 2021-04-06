function preload(){
groundImage=loadImage("ground2.png");
pizzaslice=loadImage("pizzaslice.png");
chef=loadImage("baker.png");
cheese=loadImage("cheese.png");
olive=loadImage("olive.png");
pepper=loadImage("pepper.png");
spinach=loadImage("spinsch.png");
tomato=loadImage("tomato.png");
}

function setup() {
 createCanvas(1200,400);
baker=createSprite(100,350,20,20);
ground=createSprite(600,380,1200,30);
ground.addImage(groundImage);
toppingsGroup= new Group();
slicesGroup= new Group();
}

function draw() {
 background("pink");
 if(keyDown("space")){
     baker.velocityY=-12;
 }
 baker.velocityY=baker.velocityY+0.8;
 baker.collide(ground);
 ground.velocityX=-5;
 baker.addImage(chef);
 if (ground.x < 0){
    ground.x = ground.width/2;
 }
 spawnToppings();
 spawnSlices();
drawSprites();
}
function spawnToppings(){
    if (frameCount % 60 === 0){
        var toppings = createSprite(displayWidth,360,10,40);
        toppings.velocityX = -5;
        
         //generate random obstacles
         var rand = Math.round(random(1,6));
         /*switch(rand) {
           case 1: obstacle.addImage(obstacle1);
                   break;
           case 2: obstacle.addImage(obstacle2);
                   break;
           case 3: obstacle.addImage(obstacle3);
                   break;
           case 4: obstacle.addImage(obstacle4);
                   break;
           case 5: obstacle.addImage(obstacle5);
                   break;
           case 6: obstacle.addImage(obstacle6);
                   break;
           default: break;
         }*/
        
         //assign scale and lifetime to the obstacle           
         toppings.scale = 0.5;
         toppings.lifetime = 400;
        
        //add each obstacle to the group
         toppingsGroup.add(toppings);
      }
}
function spawnSlices(){
    if (frameCount % 135 === 0){
        var slices = createSprite(displayWidth,150,10,40);
        slices.addImage(pizzaslice);
        slices.scale=0.2;
        slices.velocityX = -5; 
        slices.y=Math.round(random(150,300));
slices.lifetime=400;
slicesGroup.add(slices);
}
}