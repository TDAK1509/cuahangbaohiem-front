export enum Motorbike {
  UP_TO_50_CC,
  ABOVE_50CC
}

export default class PviMotorbikeInsurance {
  private year = 0;
  private motorbike = Motorbike.UP_TO_50_CC;
  private hasAddOn = false;

  public setYear(year: number) {
    this.year = year;
  }

  public setMotorbike(motorbike: Motorbike) {
    this.motorbike = motorbike;
  }

  public setHasAddon(hasAddon: boolean) {
    this.hasAddOn = hasAddon;
  }

  public getInsuranceFee(): number {
    let insuranceFee = 0;
    const addOnFee = 20000;

    if (this.year === 1) {
      insuranceFee = 60500;
    } else if (this.year === 2) {
      insuranceFee = 121000;
    } else if (this.year === 3) {
      insuranceFee = 181500;
    }

    if (this.hasAddOn) {
      insuranceFee += addOnFee * this.year;
    }

    return insuranceFee;
  }
}
