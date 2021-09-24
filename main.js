var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function typeButton(){
    document.getElementById("text").innerHTML = "";
    speak();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text").innerHTML = content;
    console.log(content);
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("text").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function back(){
    window.location = "index.html";
}