
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var particlearr=[]

function preload(){
    manimg=loadImage("Walking Frame/walking_1.png")
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(3000,700);
    particle1=new particle(displayWidth/2+15,displayHeight/2,100,true)
    man=createSprite(displayWidth/2,displayHeight/2+60);

    man.addImage(manimg)
    man.scale=0.5
}

function draw(){
   background("black");
   drawSprites()
   Engine.update(engine) 
particles=new particle(random(0,1300),-20,3,false);
particlearr.push(particles)

for(var i=0;i<particlearr.length;i++)
particlearr[i].display();
randx=Math.round(random(0,1000))
rand=Math.round(random(0,4))    
//particle1.display()
if(frameCount%10==0){

switch(rand){
case 1:image(thunder1,randx,0,170,170)
break;
case 2:image(thunder2,randx,0,170,170)
break;
case 3:image(thunder3,randx,0,170,170)
break;
case 4:image(thunder4,randx,0,170,170)
break;

}



}

}


   



