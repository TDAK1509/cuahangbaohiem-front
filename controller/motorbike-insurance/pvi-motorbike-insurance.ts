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

  public getInsuranceFee(): number {
    if (this.year === 1) {
      return 60500;
    }

    if (this.year === 2) {
      return 121000;
    }

    if (this.year === 3) {
      return 181500;
    }

    return 0;
  }
}
