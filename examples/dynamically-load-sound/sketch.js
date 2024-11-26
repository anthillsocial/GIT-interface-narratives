let soundFile; 
let mySound;
let startstop = 1;

// Grab the GET variables and turn them into an array
function accessGET() {
    let result = null;
    let keyValues = [];
    let GETarray = location.search.substr(1).split("&");
    for (let index=0; index<GETarray.length; index++) {
      let item = GETarray[index].split("=");
      keyValues[item[0]] = decodeURIComponent(item[1]); // Decode any URL mess
    }
    return keyValues;
}

function preload() {
  // Specify sound format - stick with .wav, .mp3, or .ogg)
  //soundFormats("mp3"); 
  // Access the 
  let getVars = accessGET(); 
  soundFile = getVars['file']; 
  mySound = loadSound("assets/"+soundFile);
}

function setup() {
  createCanvas(500, 500);
  //userStartAudio(); //tells the browser to prepare to play sounds (required by some browsers for security purposes)
  //amen.playMode("restart"); //try out 'sustain' instead of 'restart' here
  //call.playMode("restart");
  //call.play();
  //amen.setVolume(0.1);// between 0.0 and 1.0
  //call.setVolume(2.0); // between 0.0 and 1.0
  mousePressed();
}

function draw() {
  background(200);
  
  // Set the pan of the sound 
  // - convert mouseX to a value between -1 and 1
  //let pan = map(mouseX, 0, width, -1, 1); 
  //amen.pan(pan);

  // Set volume 
 
  
  // Set the sample speed 
  // - convert mouseY to a value between -1 and 1
  //let playbackRate = map(mouseY, 0, height, 0.2, 2);
  //amen.rate(playbackRate);
  
  // Draw crosshairs
  stroke(255);
  line(mouseX, 0, mouseX, height);
  line(0, mouseY, width, mouseY);

  // Text info explaining sound characteristics
  let myText = soundFile; 
  //let myText = "Playing: "+amen.isPlaying(); 
  //myText += "\nPlayback Rate: " +playbackRate.toPrecision(3); 
  //myText += "\nPan: " + pan.toPrecision(2); 
  noStroke();
  fill(255, 0, 0);
  text(myText, 20, 20);
}

function mousePressed() {
  startstop = !startstop; 
  if(startstop){
    mySound.play();
  }else{
    mySound.stop();
  }
  
}
