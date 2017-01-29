var anilines = [];
var anilen = 12;

function setup() {
  createCanvas(720, 720).parent('animation');
  // first group
  for (var i = 0; i < anilen; i++) {
    anilines.push(new aniLine());
    anilines[i].t = i/10;
    anilines[i].hsl_color = i*3;
  }
  // second group
  var start_two = anilen*3-1;
  for (var i = start_two; i < start_two+anilen; i++) {
    anilines.push(new aniLine());
    anilines[anilines.length-1].t = i/10;
    anilines[anilines.length-1].vel = -0.03;
    anilines[anilines.length-1].hsl_color = i*3;
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for (var i = anilines.length-1; i > 0; i--) {
    anilines[i].move();
    anilines[i].encolor();
    anilines[i].show();
  }
}
