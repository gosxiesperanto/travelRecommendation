function search(){
    let word = document.getElementById("txt").value.toLowerCase();  // ✅
    document.getElementById("txt").value = word;
    console.log(word);

    var countries = xhr.response.countries;
    var countriesDiv = document.getElementById('result');
    
    console.log("search done");
        };

function reset(){
    txt.value = "";
    console.log("Successfully cleared");
        }

var xhr = new XMLHttpRequest();
var url = './travel_recommendation_api.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) {
      // responseType='json'の場合、すでにオブジェクト化されている
      var data = xhr.response; 
      console.log(data);

      (function() {
            console.log('beaches : ', data.beaches[0].name);
            console.log('temples : ', data.temples[0].name);
            console.log('countries : ', data.countries[0].id);
            console.log('countries : ', data.countries[0].name);
        }());
    }
  };
xhr.send();


