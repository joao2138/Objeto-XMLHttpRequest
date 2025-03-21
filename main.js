const url = 'https://jsonplaceholder.typicode.com/posts/1'

function main(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url , true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);

        let data = JSON.parse(xhr.responseText);

        update(data);
    }
  };

  xhr.send();

}

function update(data){
  const div = document.getElementById("content");

  const title = document.createElement("p");
  const body = document.createElement("p");


  title.textContent = `Title: ${data["title"]}`;
  body.textContent = data["body"];

  div.style.margin = "50px 0 0 0"
  
  div.appendChild(title);
  div.appendChild(body);
}