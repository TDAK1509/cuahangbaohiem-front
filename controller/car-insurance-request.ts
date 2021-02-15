import CarInsuranceRequestModel, {
  RawCarInsuranceRequest
} from "@/models/car-insurance-request";

export interface CarInsuranceRequest {
  name: string;
  email: string;
  phone: string;
  note?: string;
  carValue: number;
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

  public getCarYearThresholdLabel(carYearThreshold: CarYearThreshold) {
    if (carYearThreshold === CarYearThreshold.FROM_3_TO_6_YEARS) {
      return "Từ 3 đến 6 năm";
    }

    if (carYearThreshold === CarYearThreshold.OVER_6_YEARS) {
      return "Từ 6 đến 10 năm";
    }

    return "Dưới 3 năm";
  }

  public getAddOnLabel(addon: CarInsuranceAddOn) {
    if (addon === CarInsuranceAddOn.OPTION_2) {
      return "Option 2";
    }

    return "Option 1";
  }
}
