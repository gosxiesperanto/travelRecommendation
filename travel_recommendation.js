function search(){
    let word = document.getElementById("txt").value.toLowerCase();  // ✅
    document.getElementById("txt").value = word;
    console.log(word);

    document.getElementById('title').innerHTML = null;
    document.getElementById('description').innerHTML = null;

    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {

    const countries = data.countries;
    const temples = data.temples;
    const beaches = data.beaches;

    if (word === "country") {
            console.log('Word :', word);
        
            for (var j = 0; j < 3; j++) {
                document.getElementById('title').innerHTML = "Country list";
                let parent = document.getElementById('description');
                let newItem = document.createElement('p');
                let newItem1 = document.createElement('p');
        
                newItem.textContent = countries[j].name;
                parent.appendChild(newItem);                          
                }} else if (word === "beach") {
                    console.log('Word :', word);
            
                    for (var j = 0; j < 3; j++) {
                        document.getElementById('title').innerHTML = "Beach list";
                        let parent = document.getElementById('description');
                        let newItem = document.createElement('p');
                        let newItem1 = document.createElement('p');
                
                        newItem.textContent = beaches[j].name;
                        parent.appendChild(newItem);
                        
                        newItem1.textContent = beaches[j].description;
                        parent.appendChild(newItem1);
                        }}  else if (word === "temple") {
                            console.log('Word :', word);
                    
                            for (var j = 0; j < 3; j++) {
                            document.getElementById('title').innerHTML = "Temple list";
                            let parent = document.getElementById('description');
                            let newItem = document.createElement('p');
                            let newItem1 = document.createElement('p');
                    
                            newItem.textContent = temples[j].name;
                            parent.appendChild(newItem);
                            
                            newItem1.textContent = temples[j].description;
                            parent.appendChild(newItem1);
                    
                                }
    return;
    }
    for (var i = 0; i < countries.length; i++) {
        if (word === countries[i].name.toLowerCase()) {
        console.log('Word :', word);
        console.log('matched!');

        document.getElementById('title').innerHTML = countries[i].name;
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




