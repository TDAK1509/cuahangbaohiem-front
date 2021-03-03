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
  addons: string[];
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
      return "ĐKBS 003/XCG-PVI : Bảo hiểm mất cắp bộ phận";
    }

    if (addon === CarInsuranceAddOn.DKBS_006) {
      return "ĐKBS 006/XCG-PVI: Không khấu hao phụ tùng, vật tư thay mới";
    }

    if (addon === CarInsuranceAddOn.DKBS_007) {
      return "ĐKBS 007/XCG-PVI : Bảo hiểm lựa chọn cơ sở sửa chữa";
    }

    if (addon === CarInsuranceAddOn.DKBS_008) {
      return "ĐKBS 008/XCG-PVI : Bảo thiệt hại động cơ xe do bị thủy kích";
    }

    return "";
  }
}
