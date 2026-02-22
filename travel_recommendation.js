function search(){
    let word = document.getElementById("txt").value.toLowerCase();  // ✅
    document.getElementById("txt").value = word;
    console.log(word);

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
        
        document.getElementById('result').innerHTML = countries[i].description;
        
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
    console.log("Successfully cleared");
        }




