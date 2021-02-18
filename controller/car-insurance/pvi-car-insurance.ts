import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "~/controller/car-insurance/car-insurance-request";

export default class PviCarInsurance {
  private carValue!: number;
  private carYearThreshold!: CarYearThreshold;
  private addon!: CarInsuranceAddOn;

  constructor(
    carValue: number,
    carYearThreshold: CarYearThreshold,
    addon: CarInsuranceAddOn
  ) {
    this.setCarValue(carValue);
    this.setCarYearThreshold(carYearThreshold);
    this.setAddon(addon);
  }

  public setCarValue(carValue: number) {
    this.carValue = carValue;
  }

  public setCarYearThreshold(carYearThreshold: CarYearThreshold) {
    this.carYearThreshold = carYearThreshold;
  }

  public setAddon(addon: CarInsuranceAddOn) {
    this.addon = addon;
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
    switch (this.addon) {
      case CarInsuranceAddOn.DKBS_006:
        return 1.5;
      case CarInsuranceAddOn.DKBS_006_007:
        return 1.6;
      case CarInsuranceAddOn.DKBS_006_008:
        return 1.6;
      case CarInsuranceAddOn.DKBS_006_007_008:
        return 1.7;
      case CarInsuranceAddOn.DKBS_003_006_007:
        return 1.8;
      case CarInsuranceAddOn.DKBS_003_006_007_008:
        return 1.9;
      default:
        return 1.5;
    }
  }

  private getCarInsuranceRateForFrom3To6Years(): number {
    switch (this.addon) {
      case CarInsuranceAddOn.DKBS_006:
        return 1.75;
      case CarInsuranceAddOn.DKBS_006_007:
        return 1.95;
      case CarInsuranceAddOn.DKBS_006_008:
        return 1.85;
      case CarInsuranceAddOn.DKBS_006_007_008:
        return 2.05;
      case CarInsuranceAddOn.DKBS_003_006_007:
        return 2.15;
      case CarInsuranceAddOn.DKBS_003_006_007_008:
        return 2.25;
      default:
        return 1.65;
    }
  }

  private getCarInsuranceRateForOver6Years(): number {
    switch (this.addon) {
      case CarInsuranceAddOn.DKBS_006:
        return 1.5;
      case CarInsuranceAddOn.DKBS_006_007:
        return 1.6;
      case CarInsuranceAddOn.DKBS_006_008:
        return 1.6;
      case CarInsuranceAddOn.DKBS_006_007_008:
        return 1.7;
      case CarInsuranceAddOn.DKBS_003_006_007:
        return 1.8;
      case CarInsuranceAddOn.DKBS_003_006_007_008:
        return 1.9;
      default:
        return 1.5;
    }
  }
}
