import $ from 'jquery'
var url = 'https://wordwatch-api.herokuapp.com'
$(document).ready(() => {
  // have fun!
  breakDown();

})

function breakDown(){
  fetch(`${url}/api/v1/top_word`)
  .then((response)=>{
    debugger;
    handleResponse(response);
  })
  .then((word)=>{
    displayTopWord(word);
  })
}

function displayTopWord(word){
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
