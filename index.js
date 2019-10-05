window.onload = () => {
  SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  const recognition = new SpeechRecognition();

  const inputSpeachElement = document.querySelector('#input-speach');
  recognition.onresult = event => {
    inputSpeachElement.insertAdjacentText(event.results[0][0].transcript);
  };

  function recordingStart() {
    recognition.start();
  }
};
