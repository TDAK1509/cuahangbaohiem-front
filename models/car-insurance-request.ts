import Fire from "./fire";

Fire.init();
const db = Fire.getFireStoreDb();
const FIREBASE_CAR_INSURANCE_COLLECTION = "car_insurance_request";

export interface RawCarInsuranceRequest {
  name: string;
  email: string;
  phone: string;
  note?: string;
  carValue: number;
  carYear: number;
  addons: string[];
  insuranceCompany: string;
  insuranceFee: number;
  dateMsec: number;
  isDone: boolean;
}

export default class CarInsuranceRequestModel {
  public static save(request: RawCarInsuranceRequest) {
    return db.collection(FIREBASE_CAR_INSURANCE_COLLECTION).add(request);
  }
}
