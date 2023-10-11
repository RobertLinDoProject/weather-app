import { Taipei, NewYork, Tokyo, Paris, Sydney } from "./URL.mjs";

export async function TaipeiData() {
  let api = await fetch(Taipei);
  let data = await api.json();
  return data;
}
export async function NewYorkData() {
  let api = await fetch(NewYork);
  let data = await api.json();
  return data;
}
export async function TokyoData() {
  let api = await fetch(Tokyo);
  let data = await api.json();
  return data;
}
export async function ParisData() {
  let api = await fetch(Paris);
  let data = await api.json();
  return data;
}
export async function SydneyData() {
  let api = await fetch(Sydney);
  let data = await api.json();
  return data;
}
export async function allWeatherIconD() {
  let weather = {
    clearSky: "https://openweathermap.org/img/wn/01d@2x.png",
    fewClouds: "https://openweathermap.org/img/wn/02d@2x.png",
    scatteredClouds: "https://openweathermap.org/img/wn/03d@2x.png",
    brokenClouds: "https://openweathermap.org/img/wn/04d@2x.png",
    showerClouds: "https://openweathermap.org/img/wn/09d@2x.png",
    rain: "https://openweathermap.org/img/wn/10d@2x.png",
    thunderstorm: "https://openweathermap.org/img/wn/11d@2x.png",
    snow: "https://openweathermap.org/img/wn/13d@2x.png",
    mist: "https://openweathermap.org/img/wn/50d@2x.png",
  };
  return weather;
}
