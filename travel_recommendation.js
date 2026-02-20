function search(){
        const word = document.getElementById("txt").toLowerCase;
        word.innerHTML = result;

        fetch('./travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
      }

function reset(){
    txt.value = "";
        }
