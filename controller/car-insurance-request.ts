import CarInsuranceRequestModel, {
  CarInsuranceRequest
} from "@/models/car-insurance-request";

export default class CarInsuranceRequestController {
  private name: string;
  private email: string;
  private phone: string;
  private note: string;
  private insuranceCompany: string;
  private insuranceValue: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.note = "";
    this.insuranceCompany = "";
    this.insuranceValue = "";
  }

  public setName(name: string) {
    this.name = name;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public setPhone(phone: string) {
    this.phone = phone;
  }

  public setNote(note: string) {
    this.note = note;
  }

  public setInsuranceCompany(insuranceCompany: string) {
    this.insuranceCompany = insuranceCompany;
  }

  public setInsuranceValue(insuranceValue: string) {
    this.insuranceValue = insuranceValue;
  }

  public save(request: CarInsuranceRequest) {
    return CarInsuranceRequestModel.save(request);
  }
}
