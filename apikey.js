//let form = document.querySelector("#searched-city");
//form.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let apiKey = "464fc85b53924dafb3172d6e7255d14c";

  let city = document.querySelector("h2");
  let name = document.querySelector("#entered-city");

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showtemp);
}
let form = document.querySelector("#searched-city");
form.addEventListener("submit", search);

function showtemp(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let tempele = document.querySelector("#temperature");
  tempele.innerHTML = `${temperature}'C`;
  let city=document.querySelector("h2");
  city.innerHTML=response.data.name;
  //let tempdescription = document.querySelector("#descriptionprint");
  //tempdescription.innerHTML = response.data.weather[0].description;
  let tempspeed = document.querySelector("#speed");
  tempspeed.innerHTML = `speed: ${response.data.wind.speed}kmph`;

  let mintemp = document.querySelector("#minimum");
  mintemp.innerHTML = `minimum: ${response.data.main.temp_min}'C`;
  let maxtemp = document.querySelector("#maximum");
  maxtemp.innerHTML = `maximum: ${response.data.main.temp_max}'C`;

  let temppres = document.querySelector("#pressure");
  temppres.innerHTML = `pressure: ${response.data.main.pressure}pascals`;
  let temphum = document.querySelector("#humidity");
  temphum.innerHTML = `humidity: ${response.data.main.humidity}%`;
}
