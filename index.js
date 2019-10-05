SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true; // 録音を途中でやめない
const inputSpeachElement = document.querySelector('#input-speach');
recognition.onresult = event => {
  inputSpeachElement.innerHTML = event.results[0][0].transcript;
};

function recordingStart() {
  recognition.start();
}

function recordingComplete() {
  recognition.stop();
}
