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

xhr.onload = console.log("Onload completed")

function onload1(){
var countries = xhr.response.countries;
var countriesDiv = document.getElementById('result');
console.log(countriesDiv);
countries.forEach(function(countries) {
      var countriesDiv = document.createElement('div');
      countriesDiv.classList.add('countries');

      var name = document.createElement('h2');
      name.textContent = countries.name;

//      var waysHeader = document.createElement('h3');
//      waysHeader.textContent = 'Ways to Achieve:';

      var description = document.createElement('p');
      description.textContent = countries.cities.description;

//      var waysList = document.createElement('ul');
//      article.ways_to_achieve.forEach(function(way) {
//        var listItem = document.createElement('li');
//        listItem.textContent = way;
//        waysList.appendChild(listItem);
//      });
//      var benefitsHeader = document.createElement('h3');
//      benefitsHeader.textContent = 'Benefits:';

//      var benefitsList = document.createElement('ul');
//      article.benefits.forEach(function(benefit) {
//        var listItem = document.createElement('li');
//        listItem.textContent = benefit;
//       benefitsList.appendChild(listItem);
//      }
//    );

    countriesDiv.appendChild(name);
    countriesDiv.appendChild(cities.description);
//    countriesDiv.appendChild(waysHeader);

    countriesDiv.appendChild(countriesDiv);
    });
}

xhr.send();