function search(){
    let word = document.getElementById("txt").value.toLowerCase();  // ✅
    document.getElementById("txt").value = word;
        fetch('./travel_recommendation_api.json')
        .then(response => {
            if (!response.ok) { // Check kung may error sa status (404, 500, etc.)
              throw new Error('Network response was not ok');
            }
            return response.json(); // I-convert ang response sa JSON
          })
          .then(data => console.log(data)) // Gamitin ang data
          .catch(error => console.error('May error:', error)); // Handle network errors
        };

function reset(){
    txt.value = "";
    console.log("Successfully cleared");
        }

var xhr = new XMLHttpRequest();
var url = './travel_recommendation_api.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
var countries = xhr.response.countries;
var countriesDiv = document.getElementById('result');

articles.forEach(function(countries) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('countries');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();