import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "~/controller/car-insurance/car-insurance-request";

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
    if (
      this.addons.includes(CarInsuranceAddOn.DKBS_006) &&
      this.addons.includes(CarInsuranceAddOn.DKBS_007)
    ) {
      return 1.23;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_006)) {
      return 1.5;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_007)) {
      return 1.22;
    }

    return 1.5;
  }

  private getCarInsuranceRateForFrom3To6Years(): number {
    if (
      this.addons.includes(CarInsuranceAddOn.DKBS_006) &&
      this.addons.includes(CarInsuranceAddOn.DKBS_007)
    ) {
      return 1.33;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_006)) {
      return 1.31;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_007)) {
      return 1.32;
    }

    return 1.3;
  }

  private getCarInsuranceRateForOver6Years(): number {
    if (
      this.addons.includes(CarInsuranceAddOn.DKBS_006) &&
      this.addons.includes(CarInsuranceAddOn.DKBS_007)
    ) {
      return 1.43;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_006)) {
      return 1.41;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_007)) {
      return 1.42;
    }

    return 1.4;
  }
}
