prediction_1 = "";
prediction_2 = "";
viewer = document.getElementById('viewers_emotion').value

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera")

Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    })
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bQpC-KwvZ/model.json', modelLoaded)

function modelLoaded(){
    console.log('Model Loaded!')
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_1 = "The first prediction is " + prediction_1;
    speak_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterence(speak_1 + speak_2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("prediction1").innerHTML = "Prediction 1 ~ ";
        document.getElementById("prediction2").innerHTML = "Prediction 2 ~ ";
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;

        if(results[0].label == "Happy"){
            document.getElementById("update_emoji").innerHTML = "&#128522;"
        }
        if(results[0].label == "Sad"){
            document.getElementById("update_emoji").innerHTML = "&#128546;"
        }
        if(results[0].label == "Angry"){
            document.getElementById("update_emoji").innerHTML = "&#128545;"
        }
        if(results[1].label == "Happy"){
            document.getElementById("update_emoji2").innerHTML = "&#128522;"
        }
        if(results[1].label == "Sad"){
            document.getElementById("update_emoji2").innerHTML = "&#128546;"
        }
        if(results[1].label == "Angry"){
            document.getElementById("update_emoji2").innerHTML = "&#128545;"
        }
    }
    speak();
}

function compare(){
    if(viewer == prediction_1)[
        alert("Nice Facial Expression!")
    ]
}