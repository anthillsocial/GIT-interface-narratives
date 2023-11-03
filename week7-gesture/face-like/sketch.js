/*Interacting with captured data: Mouse, Keyboard, Audio, Web Camera
check:
1. sound input via microphone: https://p5js.org/examples/sound-mic-input.html
2. dom objects like button
3. p5.sound library:
https://github.com/processing/p5.js-sound/blob/master/lib/p5.sound.js
4. Face tracking library: https://github.com/auduno/clmtrackr
5. p5js + clmtracker.js: https://gist.github.com/lmccart/2273a047874939ad8ad1
note: the audio doesn't work on Firefox 96, the temp fix is to import older ver.
See: https://aesthetic-programming.gitlab.io/book/ > #4 with older libraries
*/
let ctracker;
let capture;
const d = new Date();

function setup() {
  createCanvas(640, 480);
  //web cam capture
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  //setup face tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);
}

function draw() {
  //draw the captured video on a screen with the image filter
  image(capture, 0,0, 640, 480);
  filter(INVERT);

  let positions = ctracker.getCurrentPosition();

  // Check the availability of web cam tracking
  if (positions.length) {
    /*loop through all major points of a face
    (see: https://www.auduno.com/clmtrackr/docs/reference.html)*/
    for (let i = 0; i < positions.length; i++) {
       //noStroke();
       fill(255, 255, 255, 180);//color with alpha value
       text(i, positions[i][0], positions[i][1])
    }

    // point 60 = mouth / 62 = nose
    let mouthX = positions[60][0]-20;
    let mouthY = positions[60][1]-5;

    // Create a like button 
    fill(76,105,186); 
    rect(mouthX, mouthY, 40, 25, 4,4,4,4);
    fill(255); 
    text('like', mouthX+9, mouthY+16)
  }
}

function keyPressed() {
  console.log(key)
  //saveCanvas('face-'+d.getTime(), 'png');
}