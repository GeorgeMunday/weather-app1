export type WeatherTypes = {
  longitude: number;
  latitude: number;
};

export type CountryTypes = {
  longitude: number;
  latitude: number;
  setLongitude: React.Dispatch<React.SetStateAction<number>>;
  setLatitude: React.Dispatch<React.SetStateAction<number>>;
  setCountry: (country: string) => void;
};
