function formatDate(date) {
    //let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
    
  
  let date = document.querySelector("#date");
  date.innerHTML=formatDate(new Date());

  function displayTemp(response)   {
    
    let tempElement=document.querySelector("#temperature");
    let iconElement=document.querySelector("#icon");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    celsiusTemp=response.data.main.temp;
    tempElement.innerHTML=Math.round(celsiusTemp);
    let icon= response.data.weather[0].icon;
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${icon}@2x.png`);
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=response.data.wind.speed;
    console.log(response.data);
termpin
  }
  function search(city) {

    let showCity=document.querySelector("#city");
    showCity.innerHTML=city;
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemp);
  }
  
 
  
  function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let tempElement=document.querySelector("#temperature")
    celsiusLink.setAttribute("class","active");
    fahrenheitLink.removeAttribute("class","active");
    tempElement.innerHTML=Math.round(celsiusTemp);
    
  }
  function convertToFarenheitlink (event) {
    event.preventDefault();
    let tempElement=document.querySelector("#temperature")
    fahrenheitLink.setAttribute("class","active")
    celsiusLink.removeAttribute("class","active");
    tempElement.innerHTML=Math.round((celsiusTemp*1.8)+32);

  }
  let celsiusTemp=null;
  let searchForm= document.querySelector("#search-form");
  //searchForm.addEventListener("submit", search());
  searchForm.addEventListener("submit",handleSubmit);

  let celsiusLink=document.querySelector("#celsius-link");
  let fahrenheitLink=document.querySelector("#fahrenheit-link");

  celsiusLink.addEventListener("click",convertToCelsius);
  fahrenheitLink.addEventListener("click",convertToFarenheitlink)
  search("New York");
