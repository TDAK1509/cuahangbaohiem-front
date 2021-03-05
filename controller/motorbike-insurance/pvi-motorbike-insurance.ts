export enum Motorbike {
  UP_TO_50_CC,
  ABOVE_50CC
}

export default class PviMotorbikeInsurance {
  private year = 0;
  private motorbike = Motorbike.UP_TO_50_CC;
  private hasAddon = false;

  public setYear(year: number) {
    this.year = year;
  }

  public setMotorbike(motorbike: Motorbike) {
    this.motorbike = motorbike;
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
    if (this.motorbike === Motorbike.ABOVE_50CC) {
      return 66000;
    }
    return 60500;
  }
}
