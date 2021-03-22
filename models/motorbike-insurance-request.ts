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
  address: string;
  phone: string;
  email: string;
  motorbikeOwner2: string;
  licensePlate2: string;
  frameNumber2: string;
  address2: string;
  phone2: string;
  email2: string;
  promotionCode: string;
  promotions: string[];
  insuranceStartDate: string;
  insuranceEndDate: string;
  addOn: string;
  insuranceFee: number;
  addOnFee: number;
  paperSampleReceiverName: string;
  paperSampleReceiverAddress: string;
}

export default class MotorbikeInsuranceRequestModel {
  public static save(request: RawMotorbikeInsuranceRequest) {
    return db.collection(FIREBASE_MOTORBIKE_INSURANCE_COLLECTION).add(request);
  }
}
