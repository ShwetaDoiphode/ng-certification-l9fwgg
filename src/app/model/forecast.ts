export class Forecast {
  constructor(
    public day: string,
    public maxTemperature: number,
    public minTemperature: number,
    public description: string
  ) {}
}
