//dataParser.js

export const parseWeatherData = (data) => {
  let locationData = data.location.name;
  let timeData = data.location.localtime;
  let tempData = data.current.temp_c;
  let conditionData = data.current.condition.text;
  let humidityData = data.current.humidity;
  let windData = data.current.wind_kph;
  let uvData = data.current.uv;
  let windDirectionData = data.current.wind_dir;

  return {
    locationData,
    timeData,
    tempData,
    conditionData,
    humidityData,
    windData,
    uvData,
    windDirectionData,
  };
};

export const determineTempColor = (temp) => {
  return temp < 10 ? "wheat" : "wheat";
};
