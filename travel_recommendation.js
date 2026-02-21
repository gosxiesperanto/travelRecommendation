function search(){
        const word = document.getElementById("txt").toLowerCase;
        word.innerHTML = result
        console.log("txtは、", txt"
")
        fetch('./travel_recommendation_api.json')
          .then(response => response.json())
          .then(data =>  {
          if (!data.length) return;
          
          // ヘッダー生成（JSONのキーを自動取得）
          const keys = Object.keys(data[0]);
          document.getElementById('result').innerHTML = keys.value;
          })
          .catch(err => {
          document.body.innerHTML += `<p style="color:red;">読み込みエラー: ${err.message}</p>`;
          });          
      }

function reset(){
    txt.value = "";
    console.log("Successfully cleared");
        }
