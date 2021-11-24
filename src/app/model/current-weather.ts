export class CurrentWeather {
  public city: string;
  public currentTemperature: number;
  public maxTemperature: number;
  public minTemperature: number;
  public description: string;
  constructor(
    city: string,
    currentTemperature: number,
    maxTemperature: number,
    minTemperature: number,
    description: string
  ) {
    this.city = city;
    this.currentTemperature = currentTemperature;
    this.maxTemperature = maxTemperature;
    this.minTemperature = minTemperature;
    this.description = description;
  }
}
