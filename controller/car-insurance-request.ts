import CarInsuranceRequestModel, {
  CarInsuranceRequest
} from "@/models/car-insurance-request";

export default class CarInsuranceRequestController {
  private name: string;
  private email: string;
  private phone: string;
  private note: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.note = "";
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

  public save() {
    const request: CarInsuranceRequest = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      note: this.note
    };
    return CarInsuranceRequestModel.save(request);
  }
}
