function Pipe() {
  
  var spacing = random(40, height / 2);
  var centery = random(0, height);
  
  this.top =  centery - spacing/2;
  this.bottom =  height - (centery + spacing / 2);
  console.log(this.top)
  this.x = width;
  this.w = 20;
  this.speed = 2;
  this.highlight = false;
  
  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        
        this.highlight = true;
        return true;
        
      }           
    }
    return false;  
  };
  
  this.show = function() {
    fill("cyan");
    if (this.highlight) {
       fill(255, 0, 0);       
    }
    
    
    rect(this.x,0,this.w,this.top);
    rect(this.x,height-this.bottom,this.w,this.bottom);
  };
  
  this.update = function() {
    this.x -= this.speed;  
  };
  
  this.offscreen = function() {
    if (this.x <-this.w) {
       return true;
    }else {
      return false;
    }
   };
  //console.log(pipes.length);
}