var bird;
var pipes = [];
var score = 0;


function setup() {
  createCanvas(500, 600);
  
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  fill("lime");
  textSize(20);
  text ('score : ' + score, 400, 20);
  
  for (var i = pipes.length-1; i >= 0; i--) {
      pipes [i].show();
      pipes [i].update();
    
    if (pipes [i].hits(bird)) {       
       console.log("HIT");
       score = 0;
        
    }
        
    if(pipes [i].offscreen()) {
      pipes.splice(i, 1);
    
    }
  }
  
  bird.update();
  bird.show();
  
  if (frameCount % 130 == 0){
    score = score + 5; 
    pipes.push(new Pipe());  
  }
  
  if (score >= 50 ) {
    fill("orange");
    textSize(50);    
    text("YOU WIN !!",150,300);
    
      
  }
  if (score > 50){
    score = 0;
  }
  
  if (keyCode === ENTER) {
    score = 0;
  }
  
}

function keyPressed() {
  if(key == ' ') {
    bird.up ();
    //console.log("space");
  }


}