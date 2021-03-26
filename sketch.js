var hr, mn, sc;
var hrAngle, mnAngle, scAngle,bg; 

function setup(){
    createCanvas(700,600); 
    
    angleMode(DEGREES);   
  
}

function draw(){
    background("black")
        
 
        hr = hour();
        mn = minute();
        sc = second();

    

    textFont("arial");
    textSize(18);
    noStroke();
    fill("white");
    text("12", 345,120);

    noStroke();
    fill("white");
    text("3", 480,255);

    noStroke();
    fill("white");
    text("9", 190,255);

    noStroke();
    fill("white");
    text("6", 350,400);

    
    translate(350,250)
    rotate(-90)



    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    
    push();
    rotate(scAngle); 
    stroke("lightSkyBlue");
    strokeWeight(5);
    line(0,0,150,0);
    pop()

    
    push();
    rotate(mnAngle);
    stroke("lightCoral");
    strokeWeight(7.5);
    line(0,0,115,0);
    pop()

    
    push();
    rotate(hrAngle);
    stroke("paleGreen");
    strokeWeight(10);
    line(0,0,75,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    
    strokeWeight(5);
    noFill();
   
    stroke("lightSkyBlue");
    arc(0,0,400,400,0,scAngle);
   
    strokeWeight(7.5);
    stroke("lightCoral");
    arc(0,0,370,370,0,mnAngle);
   
    strokeWeight(10);
    stroke("paleGreen");
    arc(0,0,340,340,0,hrAngle);

    
    drawSprites();

  
}