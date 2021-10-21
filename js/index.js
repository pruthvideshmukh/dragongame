console.log("..........");

let url = document.getElementById("url");
let firstBtn = document.getElementById("firstBtn");

firstBtn.addEventListener("click", ()=>{
    console.log(url.value);
    fetch(url.value).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })

});
