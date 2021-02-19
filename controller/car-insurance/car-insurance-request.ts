import CarInsuranceRequestModel, {
  RawCarInsuranceRequest
} from "@/models/car-insurance-request";

export interface CarInsuranceRequest {
  name: string;
  email: string;
  phone: string;
  note?: string;
  carValue: number;
  carYear: number;
  addon: string;
  insuranceCompany: string;
  insuranceFee: number;
}

export enum CarInsuranceAddOn {
  BASIC,
  DKBS_006,
  DKBS_006_007,
  DKBS_006_008,
  DKBS_006_007_008,
  DKBS_003_006_007,
  DKBS_003_006_007_008
}

export default class CarInsuranceRequestController {
  public save(requestFromClient: CarInsuranceRequest) {
    const requestToSaveToServer: RawCarInsuranceRequest = {
      ...requestFromClient,
      dateMsec: new Date().getTime(),
      isDone: false
    };

    return CarInsuranceRequestModel.save(requestToSaveToServer);
  }

  public getAddOnLabel(addon: CarInsuranceAddOn) {
    if (addon === CarInsuranceAddOn.DKBS_006) {
      return "DKBS_006";
    }

    if (addon === CarInsuranceAddOn.DKBS_006_007) {
      return "DKBS_006_007";
    }

    if (addon === CarInsuranceAddOn.DKBS_006_008) {
      return "DKBS_006_008";
    }

    if (addon === CarInsuranceAddOn.DKBS_006_007_008) {
      return "DKBS_006_007_008";
    }

    if (addon === CarInsuranceAddOn.DKBS_003_006_007) {
      return "DKBS_003_006_007";
    }

    if (addon === CarInsuranceAddOn.DKBS_003_006_007_008) {
      return "DKBS_003_006_007_008";
    }

    return "";
  }
}
