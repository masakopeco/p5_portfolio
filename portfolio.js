$(function(){
  var downs = $('.down')

  var tl = new TimelineLite();

  tl.staggerFromTo(downs, 1, {
          x: 0,
          autoAlpha:0,
      },{ ease: Power2.easeOut,
              x: 20,
              autoAlpha:1,
          }, 0.2).to(downs[0], 1, {color:"rgb(249, 98, 98)"}, 2.5);

  // init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// get all slides
	var slides = $("section");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i])
			.addTo(controller);
	}
});

var lineLength = 0;
var angle = 0;
var angleSpeed = 1.0;
var x = 0;
var y = 0;
var vx = 0.2;
var vy = 0.2;
var complexity = 0.4;
var col = 0;
function setup(){
  // 最初に1回だけ呼ばれる
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("canvas");
  colorMode(HSB,360,100,100,100); // カラーモードHSBに変更,色相,彩度,明度,透明度
  background(255);
  smooth();
}
function draw() {
  push();
  strokeWeight(1.0);
  noFill();
  col += random(5);
  if(col > 360){
    col -= 360;
  }
  stroke(col, 40, 80, 70);
  vx += random(complexity)-complexity/2
  vx += random(complexity)-complexity/2
  x += vx ;
  y += vy;
  if(x >= (width - lineLength)||x<=(0 - lineLength*2)){
    vx = -vx;
  }
  if(y>=(height - lineLength)||y<=(0 - lineLength*2)){
    vy = -vy;

  }
  translate(width/5, height/5);
  translate(x, y);
  rotate(radians(angle));
  line(0, 0, lineLength, 0);
  pop();

  angle += angleSpeed;
  lineLength = random(70, 200);

}

// function keyReleased() {
//   // reverse direction and mirrow angle
//   if (key=='d' || key=='D') {
//     angle = angle + 180;
//     angleSpeed = angleSpeed * -1;
//   }
//
//   // r g b alpha
//   if (key == ' ') col = color(random(255), random(255), random(255), random(80, 150));
//
//   //default colors from 1 to 4
//   if (key == '1') col = color(181, 157, 0, 100);
//   if (key == '2') col = color(0, 130, 164, 100);
//   if (key == '3') col = color(87, 35, 129, 100);
//   if (key == '4') col = color(197, 0, 123, 100);
//
//   // ------ pdf export ------
//   // press 'r' to start pdf recording and 'e' to stop it
//   // ONLY by pressing 'e' the pdf is saved to disk!
// }

// function keyPressed() {
//   if (keyCode == UP) lineLength += 5;
//   if (keyCode == DOWN) lineLength -= 5;
//   if (keyCode == LEFT) angleSpeed -= 0.5;
//   if (keyCode == RIGHT) angleSpeed += 0.5;
// }
