import { CarInsuranceAddOn } from "~/controller/car-insurance/car-insurance-request";

export default class MicCarInsurance {
  private carValue!: number;
  private carYear!: number;
  private addon!: CarInsuranceAddOn;

  constructor(carValue: number, carYear: number, addon: CarInsuranceAddOn) {
    this.setCarValue(carValue);
    this.setCarYear(carYear);
    this.setAddon(addon);
  }

  public setCarValue(carValue: number) {
    this.carValue = carValue;
  }

  public setCarYear(carYear: number) {
    this.carYear = carYear;
  }

  public setAddon(addon: CarInsuranceAddOn) {
    this.addon = addon;
  }

  public getInsuranceFee(): number {
    const insuranceRate = this.getInsuranceFeeRate();
    return this.carValue * insuranceRate;
  }

  private getInsuranceFeeRate(): number {
    const thisYear = new Date().getFullYear();
    const yearGap = thisYear - this.carYear;

    if (yearGap <= 3) {
      return this.getInsuranceFeeRateForLessThan3YearsThreshold();
    }

    if (yearGap > 3 && yearGap <= 6) {
      return this.getInsuranceFeeRateForFrom3To6Years();
    }

    if (yearGap > 6 && yearGap <= 10) {
      return this.getInsuranceFeeRateForFrom6To10Years();
    }

    if (yearGap > 10 && yearGap <= 15) {
      return this.getInsuranceFeeRateForFrom10To15Years();
    }

    if (yearGap > 15 && yearGap <= 20) {
      return this.getInsuranceFeeRateForFrom15To20Years();
    }

    return this.getInsuranceFeeRateForOver20Years();
  }

  private isTier1(): boolean {
    return this.carValue <= 500;
  }

  private isTier2(): boolean {
    return this.carValue > 500 && this.carValue < 700;
  }

  private getInsuranceFeeRateForLessThan3YearsThreshold(): number {
    switch (this.addon) {
      case CarInsuranceAddOn.BASIC:
        if (this.isTier1()) return 1.5;
        if (this.isTier2()) return 1.28;
        return 1.13;
      case CarInsuranceAddOn.DKBS_006:
        if (this.isTier1()) return 1.5;
        if (this.isTier2()) return 1.28;
        return 1.13;
      case CarInsuranceAddOn.DKBS_006_007:
        if (this.isTier1()) return 1.6;
        if (this.isTier2()) return 1.36;
        return 1.2;
      case CarInsuranceAddOn.DKBS_006_008:
        if (this.isTier1()) return 1.6;
        if (this.isTier2()) return 1.36;
        return 1.2;
      case CarInsuranceAddOn.DKBS_006_007_008:
        if (this.isTier1()) return 1.7;
        if (this.isTier2()) return 1.45;
        return 1.28;
      case CarInsuranceAddOn.DKBS_003_006_007:
        if (this.isTier1()) return 1.8;
        if (this.isTier2()) return 1.53;
        return 1.35;
      case CarInsuranceAddOn.DKBS_003_006_007_008:
        if (this.isTier1()) return 1.9;
        if (this.isTier2()) return 1.62;
        return 1.43;
    }

    return 0;
  }

  private getInsuranceFeeRateForFrom3To6Years(): number {
    switch (this.addon) {
      case CarInsuranceAddOn.BASIC:
        if (this.isTier1()) return 1.65;
        if (this.isTier2()) return 1.4;
        return 1.24;
      case CarInsuranceAddOn.DKBS_006:
        if (this.isTier1()) return 1.75;
        if (this.isTier2()) return 1.49;
        return 1.31;
      case CarInsuranceAddOn.DKBS_006_007:
        if (this.isTier1()) return 1.95;
        if (this.isTier2()) return 1.66;
        return 1.46;
      case CarInsuranceAddOn.DKBS_006_008:
        if (this.isTier1()) return 1.85;
        if (this.isTier2()) return 1.57;
        return 1.39;
      case CarInsuranceAddOn.DKBS_006_007_008:
        if (this.isTier1()) return 2.05;
        if (this.isTier2()) return 1.74;
        return 1.54;
      case CarInsuranceAddOn.DKBS_003_006_007:
        if (this.isTier1()) return 2.15;
        if (this.isTier2()) return 1.83;
        return 1.61;
      case CarInsuranceAddOn.DKBS_003_006_007_008:
        if (this.isTier1()) return 2.25;
        if (this.isTier2()) return 1.91;
        return 1.69;
    }

    return 0;
  }

  private getInsuranceFeeRateForFrom6To10Years(): number {
    switch (this.addon) {
      case CarInsuranceAddOn.BASIC:
        if (this.isTier1()) return 1.8;
        if (this.isTier2()) return 1.53;
        return 1.35;
      case CarInsuranceAddOn.DKBS_006:
        if (this.isTier1()) return 1.95;
        if (this.isTier2()) return 1.66;
        return 1.46;
      case CarInsuranceAddOn.DKBS_006_007:
        if (this.isTier1()) return 2.25;
        if (this.isTier2()) return 1.91;
        return 1.69;
      case CarInsuranceAddOn.DKBS_006_008:
        if (this.isTier1()) return 2.05;
        if (this.isTier2()) return 1.74;
        return 1.54;
      case CarInsuranceAddOn.DKBS_006_007_008:
        if (this.isTier1()) return 2.35;
        if (this.isTier2()) return 2;
        return 1.76;
    }

    return 0;
  }

  private getInsuranceFeeRateForFrom10To15Years(): number {
    if (this.addon === CarInsuranceAddOn.BASIC) {
      if (this.isTier1()) return 1.95;
      if (this.isTier2()) return 1.66;
      return 1.46;
    }

    if (this.addon === CarInsuranceAddOn.DKBS_006) {
      if (this.isTier1()) return 2.15;
      if (this.isTier2()) return 1.83;
      return 1.61;
    }

    return 0;
  }

  private getInsuranceFeeRateForFrom15To20Years(): number {
    if (this.addon === CarInsuranceAddOn.BASIC) {
      if (this.isTier1()) return 2.1;
      if (this.isTier2()) return 1.79;
      return 1.58;
    }

    return 0;
  }

  private getInsuranceFeeRateForOver20Years(): number {
    if (this.addon === CarInsuranceAddOn.BASIC) {
      if (this.isTier1()) return 2.25;
      if (this.isTier2()) return 1.91;
      return 1.69;
    }

    return 0;
  }
}
