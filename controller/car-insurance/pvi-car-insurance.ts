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
    const insuranceRate = this.getInsuranceFeeRate();
    return (this.carValue * insuranceRate) / 100;
  }

  private getInsuranceFeeRate(): number {
    const thisYear = new Date().getFullYear();
    const yearGap = thisYear - this.carYear;

    if (yearGap <= 3) {
      return this.getInsuranceFeeRateForLessThan3YearsThreshold();
    }

    return 0;
  }

  private getInsuranceFeeRateForLessThan3YearsThreshold(): number {
    return 1.5;
  }
}
