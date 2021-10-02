var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function run(event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;

    if (content == "take my selfie") {
        console.log(content);

        speak();
    }

}

function speak() {
    var synth = window.speechSynthesis;

    dumbit = "Taking your selfie in 5 seconds";

    //var dumbit = document.getElementById("textbox").value;

    var utterthebutter = new SpeechSynthesisUtterance(dumbit);

    synth.speak(utterthebutter);
    Webcam.attach(camera);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quaily: 90
});
camera = document.getElementById("creepela");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfiesh' src='" + data_uri + "'>";
    });
}

function save()
{
    link= document.getElementById("link");
    image = document.getElementById("selfiesh").src;
    link.href = image;
    link.click();
}