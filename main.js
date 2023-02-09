const API_KEY = "b0a276daf292b30e22439b0fca835ba4";
const mainDiv = document.querySelector('#mainDiv');
const header = document.querySelector('#div');
const form = document.querySelector('form');
const input = document.createElement('input');
input.className = "input";
const btn = document.createElement('button');
btn.textContent = "Click me";
btn.className ="btn";
form.append(input,btn);
const cityDiv = document.querySelector('.cityDiv');

function forecast(e){
   e.preventDefault();
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`)
   .then(response => response.json())
   .then(result => {
      console.log(result);
      
      if(input.value==""){
         alert("Type anything");
         return
      }  
     const h2 = document.createElement('h2');
     const h4 = document.createElement('h4');
     const description = document.createElement('p');
     h2.textContent = result.name;
     h4.textContent = result.main.temp.toFixed() + " °C";
     description.textContent = result.weather[0].description;
     const img = document.createElement('img');
     img.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
     img.style.cssText = "width: 50px; height: 50px";
     const tempDiv = document.createElement('div');
     tempDiv.className = "tempDiv";
     tempDiv.append(h2,h4,description,img);
     cityDiv.appendChild(tempDiv);
     mainDiv.appendChild(cityDiv);
     input.value = "";
   }).catch(()=>{
      alert("Type a proper city name");
   })
}
form.addEventListener('submit', forecast);
 