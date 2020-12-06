import Fire from "./fire";

Fire.init();
const db = Fire.getFireStoreDb();
const FIREBASE_CAR_INSURANCE_COLLECTION = "car_insurance_request";

export interface CarInsuranceRequest {
  name: string;
  email: string;
  phone: string;
  note?: string;
  insuranceCompany: string;
  insuranceValue: string;
}

export default class CarInsuranceRequestModel {
  public static save(request: CarInsuranceRequest) {
    return db.collection(FIREBASE_CAR_INSURANCE_COLLECTION).add(request);
  }
}
