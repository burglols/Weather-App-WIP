import {
  temp,
  countryName,
  dateTime,
  condition,
  humidity,
  wind,
  uv,
  windDirection,
} from "./htmlElements.js";
import { parseWeatherData, determineTempColor } from "./dataParser.js";
import uvCalc from "./uvCalc.js";

export const fetchResults = async (targetLocation) => {
  console.log(targetLocation);
  let url = `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${targetLocation}`;
  console.log();
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    console.log(data);

    const {
      locationData,
      timeData,
      tempData,
      conditionData,
      humidityData,
      windData,
      uvData,
      windDirectionData,
    } = parseWeatherData(data);

    temp.textContent = `${tempData}°C `;
    temp.style.color = determineTempColor(tempData);
    countryName.textContent = locationData;
    dateTime.textContent = timeData;
    condition.textContent = conditionData;
    humidity.textContent = `Humidity: ${humidityData}%`;
    wind.textContent = `Wind Speed: ${windData}km/h`;
    uv.textContent = `UV Index: ${uvData}`;

    // Call uvCalc with uvData
    uvCalc(uvData);
  } catch (error) {
    alert(
      `An error occurred: no town/city with name '${targetLocation}' found`
    );
  }
};
