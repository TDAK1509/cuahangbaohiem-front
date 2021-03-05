export enum Motorbike {
  UP_TO_50_CC,
  ABOVE_50CC
}

export default class PviMotorbikeInsurance {
  private year = 0;
  private motorbike = Motorbike.UP_TO_50_CC;

  public setYear(year: number) {
    this.year = year;
  }

  public setMotorbike(motorbike: Motorbike) {
    this.motorbike = motorbike;
  }

  public getInsuranceFee() {
    return 60500;
  }
}
