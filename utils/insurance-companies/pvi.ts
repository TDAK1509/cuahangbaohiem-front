import { CarYearThreshold, CarInsuranceAddOns } from "@/utils/car";

export default class Pvi {
  public getCarInsuranceValue(
    carValue: number,
    carYearThreshold: CarYearThreshold,
    addons: CarInsuranceAddOns[] = []
  ): number {
    const insuranceRate = this.getCarInsuranceRate(carYearThreshold, addons);
    return carValue * insuranceRate;
  }

  private getCarInsuranceRate(
    carYearThreshold: CarYearThreshold,
    addons: CarInsuranceAddOns[]
  ): number {
    switch (carYearThreshold) {
      case CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS:
        return this.getCarInsuranceRateForLessThan3YearsThreshold(addons);
      case CarYearThreshold.FROM_3_TO_6_YEARS:
        return this.getCarInsuranceRateForFrom3To6Years(addons);
      case CarYearThreshold.OVER_6_YEARS:
        return this.getCarInsuranceRateForOver6Years(addons);
      default:
        return 0;
    }
  }

  private getCarInsuranceRateForLessThan3YearsThreshold(
    addons: CarInsuranceAddOns[]
  ): number {
    if (addons.includes(CarInsuranceAddOns.OPTION_1)) {
      return 1.21;
    }
    return 1.2;
  }

  private getCarInsuranceRateForFrom3To6Years(
    addons: CarInsuranceAddOns[]
  ): number {
    return 1.3;
  }

  private getCarInsuranceRateForOver6Years(
    addons: CarInsuranceAddOns[]
  ): number {
    return 1.4;
  }
}
