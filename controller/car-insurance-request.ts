import CarInsuranceRequestModel, {
  RawCarInsuranceRequest
} from "@/models/car-insurance-request";

export interface CarInsuranceRequest {
  name: string;
  email: string;
  phone: string;
  note?: string;
  carValue: string;
  carYearThreshold: string;
  addons: string[];
  insuranceCompany: string;
  insuranceValue: string;
}

export enum CarYearThreshold {
  LESS_THAN_OR_EQUAL_3_YEARS,
  FROM_3_TO_6_YEARS,
  OVER_6_YEARS
}

export enum CarInsuranceAddOn {
  OPTION_1,
  OPTION_2
}

export default class CarInsuranceRequestController {
  public save(requestFromClient: CarInsuranceRequest) {
    const requestToSaveToServer: RawCarInsuranceRequest = {
      ...requestFromClient,
      date: new Date().toString(),
      isDone: false
    };

    return CarInsuranceRequestModel.save(requestToSaveToServer);
  }
}
