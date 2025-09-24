export interface HourlyWeather {
  time: Date[]; // Array of hourly timestamps
  temperature_2m: number[]; // Temperature in °C
  relative_humidity_2m: number[]; // Humidity in %
  dew_point_temperature_2m: number[]; // Dew point in °C
  apparent_temperature: number[]; // Feels-like temperature in °C
  weathercode: number[]; // Weather code (use for icons/descriptions)
  windspeed_10m: number[]; // Wind speed in km/h
  windgusts_10m: number[]; // Wind gusts in km/h
  winddirection_10m: number[]; // Wind direction in degrees
  cloudcover: number[]; // Cloud coverage in %
  precipitation: number[]; // Precipitation in mm
  surface_pressure: number[]; // Pressure in hPa
}

export interface WeatherTypes {
  hourly: HourlyWeather;
}
