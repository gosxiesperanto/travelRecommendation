function search(){
        const word document.getElementById("text").toLowerCase;
        word.innerHTML = result;

        fetch('./travel_recommendation.json')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
      }

function reset(text){
        const cleared document.getElementById("result").innerHTML = "";
        text = "";
        }
