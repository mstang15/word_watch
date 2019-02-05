import $ from 'jquery'
var url = 'https://wordwatch-api.herokuapp.com'
$(document).ready(() => {
  $('#break-down').click(function() {
    breakDown();
  });
  getTopWord();
})

function getTopWord(){
  fetch("https://wordwatch-api.herokuapp.com/api/v1/top_word")
  .then(function(response) {
    return response.json();
  })
  .then((word)=>{
    displayTopWord(word);
  })
}

function displayTopWord(wordInfo){
  var wordSpace = document.getElementById('top-word')
  var topWord = Object.keys(wordInfo.word)[0]
  var topWordCount = wordInfo.word[topWord]
  wordSpace.innerHTML = `${topWord}(count:${topWordCount})`
}

function handleResponse(response) {
  return response.json()
    .then((json) => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
};

function breakDown(){
  debugger;
}
