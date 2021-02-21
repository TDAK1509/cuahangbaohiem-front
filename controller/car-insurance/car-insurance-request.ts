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
  NONE,
  DKBS_006,
  DKBS_006_007,
  DKBS_006_008,
  DKBS_006_007_008,
  DKBS_003_006_007,
  DKBS_003_006_007_008
}

export interface AddOnRadio {
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

  public getAddOnRadios(yearGap: number | null = null): AddOnRadio[] {
    if (yearGap === null || yearGap > 15) {
      return [];
    }

    const radios = this.getAllAddonRadios();

    if (yearGap > 6 && yearGap <= 10) {
      radios.pop();
      radios.pop();
      return radios;
    }

    if (yearGap > 10 && yearGap <= 15) {
      return [radios[0], radios[1]];
    }

    return radios;
  }

  private getAllAddonRadios(): AddOnRadio[] {
    return [
      {
        text: "Không",
        value: CarInsuranceAddOn.NONE
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_006),
        value: CarInsuranceAddOn.DKBS_006
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007),
        value: CarInsuranceAddOn.DKBS_006_007
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_006_008),
        value: CarInsuranceAddOn.DKBS_006_008
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007_008),
        value: CarInsuranceAddOn.DKBS_006_007_008
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_003_006_007),
        value: CarInsuranceAddOn.DKBS_003_006_007
      },
      {
        text: this.getAddOnLabel(CarInsuranceAddOn.DKBS_003_006_007_008),
        value: CarInsuranceAddOn.DKBS_003_006_007_008
      }
    ];
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
