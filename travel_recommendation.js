function search(){
    let word = document.getElementById("txt").value.toLowerCase();  // ✅
    document.getElementById("txt").value = word;
    console.log(word);

    document.getElementById('title').innerHTML = null;
    document.getElementById('description').innerHTML = null;

    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
  // Handle successful data

        const countries = data.countries;
        const temples = data.temples;
        const beaches = data.beaches;

    console.log('FOR文の前 word:', word);
  for (var i = 0; i < countries.length; i++){
//    console.log('forで比べている対象の文字列',countries[i].name.toLowerCase());
    if (word === countries[i].name.toLowerCase()) {
        console.log('Word :', word);
        console.log('matched!');

        document.getElementById('title').innerHTML = countries[i].name;
        var parent = document.getElementById('description');
        var parent1 = document.getElementById('description1');

        for (var j = 0; j < countries[i].cities.length; j++) {
        const newItem = document.createElement('p');
        newItem.innerHTML = countries[i].cities[j].name;
        parent.appendChild(newItem);

        const newItem1 = document.createElement('p');
        newItem1.innerHTML = countries[i].cities[j].description;
        parent1.appendChild(newItem1);
        }
        return;
        }
    }
})

.catch(error => {
  // This catches network errors and the error thrown above
  console.error('Fetch error:', error.message);
});

console.log("search done");
};

function reset(){
    txt.value = "";
    document.getElementById('title').innerHTML = null;
    document.getElementById('description').innerHTML = null;
    console.log("Successfully cleared");
        }




