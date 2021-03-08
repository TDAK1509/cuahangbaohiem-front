import MotorbikeInsuranceRequestModel, {
  RawMotorbikeInsuranceRequest
} from "@/models/motorbike-insurance-request";

export enum MotorbikeType {
  UP_TO_50_CC,
  ABOVE_50_CC
}

export function getMotorbikeTypeLabel(type: MotorbikeType): string {
  if (type === MotorbikeType.UP_TO_50_CC) {
    return "Xe Mô tô 2 bánh dung tích từ 50cc trở xuống";
  }

  if (type === MotorbikeType.ABOVE_50_CC) {
    return "Xe Mô tô 2 bánh dung tích trên 50cc";
  }

  return "";
}

export type MotorbikeInsuranceRequest = RawMotorbikeInsuranceRequest;

export default class MotorbikeInsuranceRequestController {
  public save(requestFromClient: MotorbikeInsuranceRequest) {
    const requestToSaveToServer: RawMotorbikeInsuranceRequest = {
      ...requestFromClient,
      createdAt: new Date().getTime()
    };

    return MotorbikeInsuranceRequestModel.save(requestToSaveToServer);
  }
}
