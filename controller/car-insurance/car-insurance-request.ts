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
  DKBS_003,
  DKBS_006,
  DKBS_007,
  DKBS_008
}

export interface AddOnCheckbox {
  text: string;
  value: CarInsuranceAddOn;
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

  public getAddOnCheckboxes(): AddOnCheckbox[] {
    return [
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_003),
        value: CarInsuranceAddOn.DKBS_003
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_006),
        value: CarInsuranceAddOn.DKBS_006
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_007),
        value: CarInsuranceAddOn.DKBS_007
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_008),
        value: CarInsuranceAddOn.DKBS_008
      }
    ];
  }

  public getAddOnLabel(addon: CarInsuranceAddOn) {
    if (addon === CarInsuranceAddOn.DKBS_003) {
      return "DKBS_003";
    }

    if (addon === CarInsuranceAddOn.DKBS_006) {
      return "DKBS_006";
    }

    if (addon === CarInsuranceAddOn.DKBS_007) {
      return "DKBS_007";
    }

    if (addon === CarInsuranceAddOn.DKBS_008) {
      return "DKBS_008";
    }

    return "";
  }
}
