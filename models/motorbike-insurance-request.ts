import Fire from "./fire";

Fire.init();
const db = Fire.getFireStoreDb();
const FIREBASE_MOTORBIKE_INSURANCE_COLLECTION = "motorbike_insurance_request";

export interface RawMotorbikeInsuranceRequest {
  createdAt: number;
  motorbikeOwner: string;
  motorbikeType: string;
  licensePlate: string;
  frameNumber: string;
  insuranceStartDate: string;
  insuranceEndDate: string;
  addOn: string;
  insuranceFee: number;
  addOnFee: number;
  buyerName: string;
  buyerAddress: string;
  buyerCity: string;
  buyerDistrict: string;
  buyerWard: string;
  buyerPhone: string;
  buyerEmail: string;
}

export default class MotorbikeInsuranceRequestModel {
  public static save(request: RawMotorbikeInsuranceRequest) {
    return db.collection(FIREBASE_MOTORBIKE_INSURANCE_COLLECTION).add(request);
  }
}
