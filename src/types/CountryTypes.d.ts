// For API calls
export type WeatherTypes = {
  longitude: number;
  latitude: number;
};

// For your WeatherByCountry component
export type CountryTypes = {
  country: string;
  longitude: number;
  latitude: number;
  setLongitude: React.Dispatch<React.SetStateAction<number>>;
  setLatitude: React.Dispatch<React.SetStateAction<number>>;
};
