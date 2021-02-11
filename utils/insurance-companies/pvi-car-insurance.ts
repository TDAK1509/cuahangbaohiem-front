import { CarYearThreshold, CarInsuranceAddOn } from "@/utils/car";

export default class PviCarInsurance {
  private carValue!: number;
  private carYearThreshold!: CarYearThreshold;
  private addons!: CarInsuranceAddOn[];

  constructor(
    carValue: number,
    carYearThreshold: CarYearThreshold,
    addons: CarInsuranceAddOn[]
  ) {
    this.setCarValue(carValue);
    this.setCarYearThreshold(carYearThreshold);
    this.setAddons(addons);
  }

  public setCarValue(carValue: number) {
    this.carValue = carValue;
  }

  public setCarYearThreshold(carYearThreshold: CarYearThreshold) {
    this.carYearThreshold = carYearThreshold;
  }

  public setAddons(addons: CarInsuranceAddOn[]) {
    this.addons = addons;
  }

  public getCarInsuranceValue(): number {
    const insuranceRate = this.getCarInsuranceRate();
    return this.carValue * insuranceRate;
  }

  private getCarInsuranceRate(): number {
    switch (this.carYearThreshold) {
      case CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS:
        return this.getCarInsuranceRateForLessThan3YearsThreshold();
      case CarYearThreshold.FROM_3_TO_6_YEARS:
        return this.getCarInsuranceRateForFrom3To6Years();
      case CarYearThreshold.OVER_6_YEARS:
        return this.getCarInsuranceRateForOver6Years();
      default:
        return 0;
    }
  }

  private getCarInsuranceRateForLessThan3YearsThreshold(): number {
    if (this.addons.includes(CarInsuranceAddOn.OPTION_1)) {
      return 1.21;
    }

    if (this.addons.includes(CarInsuranceAddOn.OPTION_2)) {
      return 1.22;
    }

    return 1.2;
  }

  private getCarInsuranceRateForFrom3To6Years(): number {
    return 1.3;
  }

  private getCarInsuranceRateForOver6Years(): number {
    return 1.4;
  }
}
