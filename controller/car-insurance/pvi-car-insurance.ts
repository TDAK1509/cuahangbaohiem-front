import { CarInsuranceAddOn } from "~/controller/car-insurance/car-insurance-request";

export default class PviCarInsurance {
  private carValue!: number;
  private carYear!: number;
  private addons!: CarInsuranceAddOn[];

  constructor(
    carValue: number,
    carYear: number,
    addons: CarInsuranceAddOn[] = []
  ) {
    this.setCarValue(carValue);
    this.setCarYear(carYear);
    this.setAddons(addons);
  }

  public setCarValue(carValue: number) {
    this.carValue = carValue;
  }

  public setCarYear(carYear: number) {
    this.carYear = carYear;
  }

  public setAddons(addons: CarInsuranceAddOn[]) {
    this.addons = addons;
  }

  public getInsuranceFee(): number {
    let insuranceRate = this.getInsuranceFeeRate();

    if (this.carValue > 500 && this.carValue < 700) {
      insuranceRate -= 0.15;
    }

    if (this.carValue >= 700) {
      insuranceRate -= 0.25;
    }

    return (this.carValue * insuranceRate) / 100;
  }

  private getInsuranceFeeRate(): number {
    const thisYear = new Date().getFullYear();
    const yearGap = thisYear - this.carYear;

    if (yearGap <= 3) {
      return this.getInsuranceFeeRateForLessThan3YearsThreshold();
    }

    if (yearGap > 3 && yearGap <= 6) {
      return this.getInsuranceFeeRateForFrom3To6YearsThreshold();
    }

    if (yearGap > 6 && yearGap <= 10) {
      return this.getInsuranceFeeRateForFrom6To10YearsThreshold();
    }

    return 0;
  }

  private getInsuranceFeeRateForLessThan3YearsThreshold(): number {
    let insuranceRate = 1.5;

    if (this.addons.includes(CarInsuranceAddOn.DKBS_003)) {
      insuranceRate += 0.2;
    }

    if (
      this.addons.includes(CarInsuranceAddOn.DKBS_007) ||
      this.addons.includes(CarInsuranceAddOn.DKBS_008)
    ) {
      insuranceRate += 0.1;
    }

    return insuranceRate;
  }

  private getInsuranceFeeRateForFrom3To6YearsThreshold(): number {
    let insuranceRate = 1.65;

    if (
      this.addons.includes(CarInsuranceAddOn.DKBS_003) ||
      this.addons.includes(CarInsuranceAddOn.DKBS_007)
    ) {
      insuranceRate += 0.2;
    }

    if (
      this.addons.includes(CarInsuranceAddOn.DKBS_006) ||
      this.addons.includes(CarInsuranceAddOn.DKBS_008)
    ) {
      insuranceRate += 0.1;
    }

    return insuranceRate;
  }

  private getInsuranceFeeRateForFrom6To10YearsThreshold(): number {
    let insuranceRate = 1.8;

    if (this.addons.includes(CarInsuranceAddOn.DKBS_003)) {
      insuranceRate += 0.2;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_006)) {
      insuranceRate += 0.15;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_007)) {
      insuranceRate += 0.3;
    }

    if (this.addons.includes(CarInsuranceAddOn.DKBS_008)) {
      insuranceRate += 0.1;
    }

    return insuranceRate;
  }
}
