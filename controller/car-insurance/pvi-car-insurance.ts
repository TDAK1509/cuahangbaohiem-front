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

  public getInsuranceFee(): number {
    const insuranceRate = this.getInsuranceFeeRate();
    return this.carValue * insuranceRate;
  }

  private getInsuranceFeeRate(): number {
    switch (this.carYearThreshold) {
      case CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS:
        return this.getInsuranceFeeRateForLessThan3YearsThreshold();
      case CarYearThreshold.FROM_3_TO_6_YEARS:
        return this.getInsuranceFeeRateForFrom3To6Years();
      case CarYearThreshold.FROM_6_TO_10_YEARS:
        return this.getInsuranceFeeRateForFrom6To10Years();
      case CarYearThreshold.FROM_10_TO_15_YEARS:
        return this.getInsuranceFeeRateForFrom10To15Years();
      case CarYearThreshold.FROM_15_TO_20_YEARS:
        return this.getInsuranceFeeRateForFrom15To20Years();
      case CarYearThreshold.OVER_20_YEARS:
        return this.getInsuranceFeeRateForOver20Years();
      default:
        return 0;
    }
  }

  private getInsuranceFeeRateForLessThan3YearsThreshold(): number {
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

  private getInsuranceFeeRateForFrom3To6Years(): number {
    switch (this.addon) {
      case CarInsuranceAddOn.BASIC:
        if (this.isTier1()) return 1.65;
        if (this.isTier2()) return 1.4;
        return 0;
      case CarInsuranceAddOn.DKBS_006:
        if (this.isTier1()) return 1.75;
        if (this.isTier2()) return 1.49;
        return 0;
      case CarInsuranceAddOn.DKBS_006_007:
        if (this.isTier1()) return 1.95;
        if (this.isTier2()) return 1.66;
        return 0;
      case CarInsuranceAddOn.DKBS_006_008:
        if (this.isTier1()) return 1.85;
        if (this.isTier2()) return 1.57;
        return 0;
      case CarInsuranceAddOn.DKBS_006_007_008:
        if (this.isTier1()) return 2.05;
        if (this.isTier2()) return 1.74;
        return 0;
      case CarInsuranceAddOn.DKBS_003_006_007:
        if (this.isTier1()) return 2.15;
        if (this.isTier2()) return 1.83;
        return 0;
      case CarInsuranceAddOn.DKBS_003_006_007_008:
        if (this.isTier1()) return 2.25;
        if (this.isTier2()) return 1.91;
        return 0;
    }

    return 0;
  }

  private getInsuranceFeeRateForFrom6To10Years(): number {
    switch (this.addon) {
      case CarInsuranceAddOn.BASIC:
        if (this.isTier1()) return 1.8;
        if (this.isTier2()) return 1.53;
        return 0;
      case CarInsuranceAddOn.DKBS_006:
        if (this.isTier1()) return 1.95;
        if (this.isTier2()) return 1.66;
        return 0;
      case CarInsuranceAddOn.DKBS_006_007:
        if (this.isTier1()) return 2.25;
        if (this.isTier2()) return 1.91;
        return 0;
      case CarInsuranceAddOn.DKBS_006_008:
        if (this.isTier1()) return 2.05;
        if (this.isTier2()) return 1.74;
        return 0;
      case CarInsuranceAddOn.DKBS_006_007_008:
        if (this.isTier1()) return 2.35;
        if (this.isTier2()) return 2;
        return 0;
    }

    return 0;
  }

  private getInsuranceFeeRateForFrom10To15Years(): number {
    if (this.addon === CarInsuranceAddOn.BASIC) {
      if (this.isTier1()) return 1.95;
      if (this.isTier2()) return 1.66;
    }

    if (this.addon === CarInsuranceAddOn.DKBS_006) {
      if (this.isTier1()) return 2.15;
      if (this.isTier2()) return 1.83;
    }

    return 0;
  }

  private getInsuranceFeeRateForFrom15To20Years(): number {
    if (this.addon === CarInsuranceAddOn.BASIC) {
      if (this.isTier1()) return 2.1;
      if (this.isTier2()) return 1.79;
    }

    return 0;
  }

  private getInsuranceFeeRateForOver20Years(): number {
    if (this.addon === CarInsuranceAddOn.BASIC) {
      if (this.isTier1()) return 2.25;
      if (this.isTier2()) return 1.91;
    }

    return 0;
  }

  private isTier1(): boolean {
    return this.carValue <= 500;
  }

  private isTier2(): boolean {
    return this.carValue > 500 && this.carValue < 700;
  }
}
