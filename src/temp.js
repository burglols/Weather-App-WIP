// const temp = document.querySelector(".temp");
// const countryName = document.querySelector(".countryName");
// const dateTime = document.querySelector(".date-time");
// const condition = document.querySelector(".condition");
// const input = document.querySelector(".input");

// let targetLocation = "";

// input.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     targetLocation = input.value;
//     fetchResults();
//   }
// });

// const fetchResults = async () => {
//   console.log(targetLocation);
//   let url = `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${targetLocation}`;

//   const res = await fetch(url);

//   const data = await res.json();

//   console.log(data);

//   let locationData = data.location.name;
//   let timeData = data.location.localtime;
//   let tempData = data.current.temp_c;

//   let conditionData = data.current.condition.text;

//   temp.textContent = `${tempData}°C `;

//   if (tempData < 10) {
//     temp.style.color = "blue";
//   } else {
//     temp.style.color = "red";
//   }

//   countryName.textContent = locationData;
//   dateTime.textContent = timeData;
//   condition.textContent = conditionData;
// };
