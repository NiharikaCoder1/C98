var SpeechRecognition = window.webkitSpeechRecognition;
var Recog = new SpeechRecognition();

function start1(){
    document.getElementById('textbox').innerHTML='';
    Recog.start();
    Recog.onresult = function(event){
        console.log(event);
     var result=   event.results[0][0].transcript;
     document.getElementById('textbox').innerHTML=result;
    Speak();
    }
}

function Speak(){
synth = window.speechSynthesis;
var sd =document.getElementById('textbox').value;
af = new SpeechSynthesisUtterance(sd);
synth.speak(af);
Webcam.attach(camera)
}

Webcam.set({
    width : 350, height : 250, image_format : 'png', png_quality : 90
});
camera = document.getElementById('camera');