import MotorbikeInsuranceRequestModel, {
  RawMotorbikeInsuranceRequest
} from "@/models/motorbike-insurance-request";

export enum MotorbikeType {
  UP_TO_50_CC = "lt50cc",
  ABOVE_50_CC = "gt50cc"
}

export enum MotorbikeAddOn {
  TEN = "10",
  TWENTY = "20",
  THIRTY = "30"
}

export enum Promotion {
  BUY_1_YEAR_ADD_1_YEAR = "year",
  BUY_1_BIKE_ADD_1_BIKE = "bike",
  NONE = "none"
}

export interface MotorbikeInsuranceRequest {
  motorbikeOwner: string;
  motorbikeType: string;
  licensePlate: string;
  frameNumber: string;
  address: string;
  phone: string;
  email: string;
  motorbikeOwner2: string;
  licensePlate2: string;
  frameNumber2: string;
  address2: string;
  phone2: string;
  email2: string;
  promotionCode: string;
  promotion: string;
  insuranceStartDate: string;
  insuranceEndDate: string;
  addOn: string;
  insuranceFee: number;
  addOnFee: number;
  paperSampleReceiverName: string;
  paperSampleReceiverAddress: string;
}

export default class MotorbikeInsuranceRequestController {
  private year = 0;
  private motorbikeType = MotorbikeType.UP_TO_50_CC;
  private addOn = MotorbikeAddOn.TEN;

  public setYear(year: number) {
    this.year = year;
  }

  public setMotorbike(motorbikeType: MotorbikeType) {
    this.motorbikeType = motorbikeType;
  }

  public setAddon(addOn: MotorbikeAddOn) {
    this.addOn = addOn;
  }

  public getInsuranceFee(): number {
    return this.getOneYearInsuranceFee() * this.year;
  }

  public getAddOnFee(): number {
    let addOnFee = 20000;

    if (this.addOn === MotorbikeAddOn.TWENTY) {
      addOnFee *= 2;
    }

    if (this.addOn === MotorbikeAddOn.THIRTY) {
      addOnFee *= 3;
    }

    return addOnFee * this.year;
  }

  private getOneYearInsuranceFee(): number {
    if (this.motorbikeType === MotorbikeType.ABOVE_50_CC) {
      return 66000;
    }
    return 60500;
  }

  public save(requestFromClient: MotorbikeInsuranceRequest) {
    const requestToSaveToServer: RawMotorbikeInsuranceRequest = {
      ...requestFromClient,
      createdAt: new Date().getTime()
    };

    return MotorbikeInsuranceRequestModel.save(requestToSaveToServer);
  }

  public getMotorbikeTypeLabel(type: MotorbikeType): string {
    if (type === MotorbikeType.UP_TO_50_CC) {
      return "Dưới 50cc";
    }

    if (type === MotorbikeType.ABOVE_50_CC) {
      return "Trên 50cc";
    }

    return "";
  }

  public getPromotionLabel(promotion: Promotion): string {
    if (promotion === Promotion.BUY_1_BIKE_ADD_1_BIKE) {
      return "Mua 1 xe tặng 1 xe";
    }

    if (promotion === Promotion.BUY_1_YEAR_ADD_1_YEAR) {
      return "Mua 1 năm tặng 1 năm";
    }

    return "";
  }

  public getAddOnLabel(addOn: MotorbikeAddOn): string {
    if (addOn === MotorbikeAddOn.TEN) {
      return "10 triệu đồng/ người/ vụ";
    }

    if (addOn === MotorbikeAddOn.TWENTY) {
      return "20 triệu đồng/ người/ vụ";
    }

    if (addOn === MotorbikeAddOn.THIRTY) {
      return "30 triệu đồng/ người/ vụ";
    }

    return "";
  }
}
