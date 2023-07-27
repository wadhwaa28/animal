function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/T1kIeNaae/', modelReady);
};

function modelReady(){
    classifier.classify(gotResults);
};

function gotResults(){
    if (results) {
        
    } else {
        console.error(error);
    };
};