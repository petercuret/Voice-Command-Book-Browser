const VOICE_SEARCH_TRIGGER = 'search for';

window.addEventListener('load', () => {
  //@ts-ignore
  //We're assuming the browser supports webkitSpeechRecognition
  const recognition = new webkitSpeechRecognition(); 
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.lang = 'en-US';

  let lastSearchIndex : number;

  window.addEventListener('recording', async function (event : CustomEvent) {
    const { isRecording }  = event.detail;
    isRecording ? recognition.start() : recognition.stop();
  }, false);    

  recognition.onresult = function(event) {
    const results : SpeechRecognitionResult[] = Object.values(event.results);
    const finalResults = getFinalResults(results);
    
    // Check lastSearchIndex so we don't trigger search with the same last command
    if(finalResults.length > lastSearchIndex) {      
      const finalResult = finalResults[lastSearchIndex];
      const transcript = finalResult[0].transcript;
      lastSearchIndex += 1;

      if(isValidSearchCommand(transcript)) {
        const searchQuery = getSearchQuery(transcript);
        emitVoiceSearchEvent(searchQuery);        
      }
    }
  }

  recognition.onstop = function(event) {
    lastSearchIndex = 0;
  }

  recognition.onstart = function(event) {
    lastSearchIndex = 0;
  }
  
  function getFinalResults(results : SpeechRecognitionResult[]) {
    const finalResults = results.filter(result => result.isFinal);
    return finalResults;
  }

  function isValidSearchCommand(command : string) {
    const strippedCommand = command.replace(/^\s+|\s+$/g, '');
    const lowerCaseCommand = strippedCommand.toLowerCase();
    return lowerCaseCommand.startsWith(VOICE_SEARCH_TRIGGER);
  }

  function getSearchQuery(command : string) {
    const lowerCaseCommand = command.toLowerCase();
    return lowerCaseCommand.split(VOICE_SEARCH_TRIGGER)[1];
  }

  function emitVoiceSearchEvent(searchQuery : string) {
    if(searchQuery) {
      const voiceSearchEvent = new CustomEvent("search", { detail: { searchQuery } });
      window.dispatchEvent(voiceSearchEvent);
      document.querySelector('input').value = searchQuery;
    }
  }
});

