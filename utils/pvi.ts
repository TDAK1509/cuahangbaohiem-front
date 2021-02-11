import { CarYearThreshold } from "./car";

export default class Pvi {
  public getCarInsuranceValue(
    carValue: number,
    carYearThreshold: CarYearThreshold
  ): number {
    return carValue * 1.2;
  }
}
