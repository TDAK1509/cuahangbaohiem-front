import MotorbikeInsuranceRequestModel, {
  RawMotorbikeInsuranceRequest,
  RawInsuranceFee
} from "@/models/motorbike-insurance-request";

export enum MotorbikeType {
  UP_TO_50_CC,
  ABOVE_50_CC
}

export interface MotorbikeInsuranceRequest {
  motorbikeOwner: string;
  motorbikeType: string;
  licensePlate: string;
  frameNumber: string;
  insuranceStartDate: string;
  insuranceEndDate: string;
  hasAddon: boolean;
  insuranceFee: RawInsuranceFee;
  buyerName: string;
  buyerAddress: string;
  buyerCity: string;
  buyerDistrict: string;
  buyerWard: string;
  buyerPhone: string;
  buyerEmail: string;
}

export type InsuranceFee = RawInsuranceFee;

export default class MotorbikeInsuranceRequestController {
  public save(requestFromClient: MotorbikeInsuranceRequest) {
    const requestToSaveToServer: RawMotorbikeInsuranceRequest = {
      ...requestFromClient,
      createdAt: new Date().getTime()
    };

    return MotorbikeInsuranceRequestModel.save(requestToSaveToServer);
  }

  public getMotorbikeTypeLabel(type: MotorbikeType): string {
    if (type === MotorbikeType.UP_TO_50_CC) {
      return "Xe Mô tô 2 bánh dung tích từ 50cc trở xuống";
    }

    if (type === MotorbikeType.ABOVE_50_CC) {
      return "Xe Mô tô 2 bánh dung tích trên 50cc";
    }

    return "";
  }
}
