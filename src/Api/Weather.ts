import { WeatherTypes } from "@/types/CountryTypes";
import { fetchWeatherApi } from "openmeteo";

export async function getWeather({ longitude, latitude }: WeatherTypes) {
  const params = {
    latitude,
    longitude,
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "apparent_temperature_max",
      "apparent_temperature_min",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
      "wind_direction_10m_dominant",
      "shortwave_radiation_sum",
      "et0_fao_evapotranspiration",
      "sunrise",
      "sunset",
      "daylight_duration",
      "sunshine_duration",
      "rain_sum",
      "showers_sum",
      "snowfall_sum",
      "precipitation_sum",
      "precipitation_hours",
      "precipitation_probability_max",
    ],
    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "dew_point_2m",
      "apparent_temperature",
      "precipitation_probability",
      "precipitation",
      "rain",
      "showers",
      "snowfall",
      "snow_depth",
      "weather_code",
      "cloud_cover",
      "cloud_cover_low",
      "cloud_cover_mid",
      "cloud_cover_high",
      "visibility",
      "evapotranspiration",
      "wind_speed_10m",
      "et0_fao_evapotranspiration",
      "vapour_pressure_deficit",
      "pressure_msl",
      "surface_pressure",
      "wind_speed_80m",
      "wind_speed_120m",
      "wind_speed_180m",
      "wind_direction_10m",
      "wind_direction_80m",
      "wind_direction_120m",
      "wind_direction_180m",
      "wind_gusts_10m",
      "temperature_80m",
      "temperature_120m",
      "temperature_180m",
      "soil_temperature_0cm",
      "soil_temperature_6cm",
      "soil_temperature_18cm",
      "soil_temperature_54cm",
      "soil_moisture_0_to_1cm",
      "soil_moisture_1_to_3cm",
      "soil_moisture_3_to_9cm",
      "soil_moisture_9_to_27cm",
      "soil_moisture_27_to_81cm",
    ],
    current: [
      "temperature_2m",
      "is_day",
      "wind_speed_10m",
      "wind_direction_10m",
      "wind_gusts_10m",
      "precipitation",
      "rain",
      "showers",
      "snowfall",
      "weather_code",
      "cloud_cover",
      "pressure_msl",
      "surface_pressure",
    ],
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const resLatitude = response.latitude();
  const resLongitude = response.longitude();
  const elevation = response.elevation();
  const utcOffsetSeconds = response.utcOffsetSeconds();

  console.log(
    `\nCoordinates: ${latitude}°N ${longitude}°E`,
    `\nElevation: ${elevation}m asl`,
    `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`
  );

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Define Int64 variables so they can be processed accordingly
  const sunrise = daily.variables(10)!;
  const sunset = daily.variables(11)!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature_2m: current.variables(0)!.value(),
      is_day: current.variables(1)!.value(),
      wind_speed_10m: current.variables(2)!.value(),
      wind_direction_10m: current.variables(3)!.value(),
      wind_gusts_10m: current.variables(4)!.value(),
      precipitation: current.variables(5)!.value(),
      rain: current.variables(6)!.value(),
      showers: current.variables(7)!.value(),
      snowfall: current.variables(8)!.value(),
      weather_code: current.variables(9)!.value(),
      cloud_cover: current.variables(10)!.value(),
      pressure_msl: current.variables(11)!.value(),
      surface_pressure: current.variables(12)!.value(),
    },
    hourly: {
      time: [
        ...Array(
          (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
        ),
      ].map(
        (_, i) =>
          new Date(
            (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      temperature_2m: hourly.variables(0)!.valuesArray(),
      relative_humidity_2m: hourly.variables(1)!.valuesArray(),
      dew_point_2m: hourly.variables(2)!.valuesArray(),
      apparent_temperature: hourly.variables(3)!.valuesArray(),
      precipitation_probability: hourly.variables(4)!.valuesArray(),
      precipitation: hourly.variables(5)!.valuesArray(),
      rain: hourly.variables(6)!.valuesArray(),
      showers: hourly.variables(7)!.valuesArray(),
      snowfall: hourly.variables(8)!.valuesArray(),
      snow_depth: hourly.variables(9)!.valuesArray(),
      weather_code: hourly.variables(10)!.valuesArray(),
      cloud_cover: hourly.variables(11)!.valuesArray(),
      cloud_cover_low: hourly.variables(12)!.valuesArray(),
      cloud_cover_mid: hourly.variables(13)!.valuesArray(),
      cloud_cover_high: hourly.variables(14)!.valuesArray(),
      visibility: hourly.variables(15)!.valuesArray(),
      evapotranspiration: hourly.variables(16)!.valuesArray(),
      wind_speed_10m: hourly.variables(17)!.valuesArray(),
      et0_fao_evapotranspiration: hourly.variables(18)!.valuesArray(),
      vapour_pressure_deficit: hourly.variables(19)!.valuesArray(),
      pressure_msl: hourly.variables(20)!.valuesArray(),
      surface_pressure: hourly.variables(21)!.valuesArray(),
      wind_speed_80m: hourly.variables(22)!.valuesArray(),
      wind_speed_120m: hourly.variables(23)!.valuesArray(),
      wind_speed_180m: hourly.variables(24)!.valuesArray(),
      wind_direction_10m: hourly.variables(25)!.valuesArray(),
      wind_direction_80m: hourly.variables(26)!.valuesArray(),
      wind_direction_120m: hourly.variables(27)!.valuesArray(),
      wind_direction_180m: hourly.variables(28)!.valuesArray(),
      wind_gusts_10m: hourly.variables(29)!.valuesArray(),
      temperature_80m: hourly.variables(30)!.valuesArray(),
      temperature_120m: hourly.variables(31)!.valuesArray(),
      temperature_180m: hourly.variables(32)!.valuesArray(),
      soil_temperature_0cm: hourly.variables(33)!.valuesArray(),
      soil_temperature_6cm: hourly.variables(34)!.valuesArray(),
      soil_temperature_18cm: hourly.variables(35)!.valuesArray(),
      soil_temperature_54cm: hourly.variables(36)!.valuesArray(),
      soil_moisture_0_to_1cm: hourly.variables(37)!.valuesArray(),
      soil_moisture_1_to_3cm: hourly.variables(38)!.valuesArray(),
      soil_moisture_3_to_9cm: hourly.variables(39)!.valuesArray(),
      soil_moisture_9_to_27cm: hourly.variables(40)!.valuesArray(),
      soil_moisture_27_to_81cm: hourly.variables(41)!.valuesArray(),
    },
    daily: {
      time: [
        ...Array(
          (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
        ),
      ].map(
        (_, i) =>
          new Date(
            (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      weather_code: daily.variables(0)!.valuesArray(),
      temperature_2m_max: daily.variables(1)!.valuesArray(),
      temperature_2m_min: daily.variables(2)!.valuesArray(),
      apparent_temperature_max: daily.variables(3)!.valuesArray(),
      apparent_temperature_min: daily.variables(4)!.valuesArray(),
      wind_speed_10m_max: daily.variables(5)!.valuesArray(),
      wind_gusts_10m_max: daily.variables(6)!.valuesArray(),
      wind_direction_10m_dominant: daily.variables(7)!.valuesArray(),
      shortwave_radiation_sum: daily.variables(8)!.valuesArray(),
      et0_fao_evapotranspiration: daily.variables(9)!.valuesArray(),
      // Map Int64 values to according structure
      sunrise: [...Array(sunrise.valuesInt64Length())].map(
        (_, i) =>
          new Date((Number(sunrise.valuesInt64(i)) + utcOffsetSeconds) * 1000)
      ),
      // Map Int64 values to according structure
      sunset: [...Array(sunset.valuesInt64Length())].map(
        (_, i) =>
          new Date((Number(sunset.valuesInt64(i)) + utcOffsetSeconds) * 1000)
      ),
      daylight_duration: daily.variables(12)!.valuesArray(),
      sunshine_duration: daily.variables(13)!.valuesArray(),
      rain_sum: daily.variables(14)!.valuesArray(),
      showers_sum: daily.variables(15)!.valuesArray(),
      snowfall_sum: daily.variables(16)!.valuesArray(),
      precipitation_sum: daily.variables(17)!.valuesArray(),
      precipitation_hours: daily.variables(18)!.valuesArray(),
      precipitation_probability_max: daily.variables(19)!.valuesArray(),
    },
  };

  // 'weatherData' now contains a simple structure with arrays with datetime and weather data
  console.log(
    `\nCurrent time: ${weatherData.current.time}`,
    `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
    `\nCurrent is_day: ${weatherData.current.is_day}`,
    `\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`,
    `\nCurrent wind_direction_10m: ${weatherData.current.wind_direction_10m}`,
    `\nCurrent wind_gusts_10m: ${weatherData.current.wind_gusts_10m}`,
    `\nCurrent precipitation: ${weatherData.current.precipitation}`,
    `\nCurrent rain: ${weatherData.current.rain}`,
    `\nCurrent showers: ${weatherData.current.showers}`,
    `\nCurrent snowfall: ${weatherData.current.snowfall}`,
    `\nCurrent weather_code: ${weatherData.current.weather_code}`,
    `\nCurrent cloud_cover: ${weatherData.current.cloud_cover}`,
    `\nCurrent pressure_msl: ${weatherData.current.pressure_msl}`,
    `\nCurrent surface_pressure: ${weatherData.current.surface_pressure}`
  );
  console.log("\nHourly data", weatherData.hourly);
  console.log("\nDaily data", weatherData.daily);

  return weatherData;
}
