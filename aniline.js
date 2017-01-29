function aniLine() {
  this.a = createVector();
  this.b = createVector();
  this.t = 0.;
  this.vel = 0.03;
  this.hsl_color = 0;

  this.move = function() {
    this.a.x = sin(this.t)*width/3 - cos(this.t)*width/8;
    this.a.y = -sin(this.t)*height/3 - cos(this.t)*width/8;
    this.b.x = cos(this.t)*width/3 - sin(this.t)*width/8;
    this.b.y = cos(this.t)*height/3 - cos(this.t)*width/8;
    this.t += this.vel;
  }

  this.encolor = function() {
    if (this.hsl_color < 360) {
      this.hsl_color++;
      return color('hsl(' + this.hsl_color + ', 100%, 50%)');
    } else {
      this.hsl_color = 0;
      return color('hsl(0, 100%, 50%)');
    }
  }

  this.show = function() {
    stroke(this.encolor());
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
