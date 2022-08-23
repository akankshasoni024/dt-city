const search =()=>{
    console.log("hi")
    let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const country=document.getElementById("search-bar").value
        const url = `https://restcountries.com/v3.1/name/${country}`;
        request.addEventListener("loadend", function() {
          const response = JSON.parse(this.responseText);
          if (this.status === 200) {
            resolve(response);
          } else {
            reject([this, response]);
          }
        });
        request.open("GET", url, true);
        request.send();
      });
      promise.then((data)=>{
        console.log(data)
        data.sort((a,b)=>b.name.common-a.name.common)
        const container =document.getElementById("country-container")
        data.map((item)=>{container.innerHTML+= `<div>${item.name.common}</div>`})
      })
}