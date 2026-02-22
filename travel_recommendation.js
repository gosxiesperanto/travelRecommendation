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
//        const temples = data.temples;
//        const beaches = data.beaches;

    console.log('FOR文の前 word:', word);
  for (var i = 0; i < countries.length; i++){
//    console.log('forで比べている対象の文字列',countries[i].name.toLowerCase());
    if (word === countries[i].name.toLowerCase()) {
        console.log('Word :', word);
        console.log('matched!');

        document.getElementById('title').innerHTML = countries[i].name;
        console.log('city1:', countries[i].cities[0].name);
        console.log('city1:', countries[i].cities[0].description);
        console.log('city2:', countries[i].cities[1].name);
        console.log('city2:', countries[i].cities[1].description);
        let parent = document.getElementById('description');

        for (var j = 0; j < countries[i].cities.length; j++) {
        let newItem = document.createElement('p');
        let newItem1 = document.createElement('p');

        newItem.textContent = countries[i].cities[j].name;
        parent.appendChild(newItem);
        
        newItem1.textContent = countries[i].cities[j].description;
        parent.appendChild(newItem1);
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




