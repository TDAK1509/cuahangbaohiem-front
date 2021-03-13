import { MotorbikeType } from "./motorbike-insurance";

export default class BaoVietMotorbikeInsurance {
  private year = 0;
  private motorbikeType = MotorbikeType.UP_TO_50_CC;
  private hasAddon = false;

  public setYear(year: number) {
    this.year = year;
  }

  public setMotorbike(motorbikeType: MotorbikeType) {
    this.motorbikeType = motorbikeType;
  }

  public setHasAddon(hasAddon: boolean) {
    this.hasAddon = hasAddon;
  }

  public getInsuranceFee(): number {
    const insuranceFee = this.getOneYearInsuranceFee() * this.year;

    const oneYearAddonFee = 20000;
    const addOnFee = !this.hasAddon ? 0 : oneYearAddonFee * this.year;

    return insuranceFee + addOnFee;
  }

  private getOneYearInsuranceFee(): number {
    if (this.motorbikeType === MotorbikeType.ABOVE_50_CC) {
      return 66000;
    }
    return 60500;
  }
}
