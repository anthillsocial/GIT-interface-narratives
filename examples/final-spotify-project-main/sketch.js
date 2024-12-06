new p5();
speech = new p5.Speech(); // speech synthesis object
getAudioContext().resume(); // Allow audio to work straight away
myText = "ddd djdhed";

function setup() {
  createCanvas(600, 100);
  speech.started(startSpeaking);
}

function draw() {
  background(220);
  fill(100);
  textSize(20);
  text('Playing: '+filename, 5, 20);
}

function startSpeaking() {
  speak(myText);
}

function mousePressed() {
  //speak("hello");
}

function speak(text){
  let voices = speech.voices;
  let voiceObj = random(voices);
  let voice = voiceObj.name; 
  //voice = "Moira" OR 'SpeechSynthesisVoice' OR 'Samantha'
  speech.setVoice(voice);
  console.log(voice);
  // speech.setRate(1);
  // speech.setPitch(3);
  speech.speak(myText); // say something
}

/* TEXT TO SPEACH EXAMPLE FROM: https://editor.p5js.org/Q/sketches/XHjG9qfx_
let speech;
let words = ["Hi There", "Hello", "Hey", "Autumn", "Fall"];

function setup() {
  createCanvas(400, 400);
  background(0);
  speech = new p5.Speech(); // speech synthesis object
  speech.started(startSpeaking);
}

function startSpeaking() {
  background(245, 200, 162);
}

function mousePressed() {
  background(243, 123, 23);
  // speech.setVoice('SpeechSynthesisVoice');
  // speech.setVoice('Samantha');
  speech.setVoice("Moira");

  // speech.setRate(1);
  // speech.setPitch(3);

  // let voices = speech.voices;
  // let voice = random(voices);
  // console.log(voice);
  // speech.setVoice(voice.name);

  // speech.speak('Hi There'); // say something
  let saySomething = random(words);
  speech.speak(saySomething); // say something
  textSize(32);
  text(saySomething, 100, 100);
}


*/
