import { CarYearThreshold } from "@/utils/car";

export default class Mic {
  public getCarInsuranceValue(
    carValue: number,
    carYearThreshold: CarYearThreshold
  ): number {
    switch (carYearThreshold) {
      case CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS:
        return carValue * 1.2;
      case CarYearThreshold.FROM_3_TO_6_YEARS:
        return carValue * 1.3;
      case CarYearThreshold.OVER_6_YEARS:
        return carValue * 1.4;
      default:
        return 0;
    }
  }
}
