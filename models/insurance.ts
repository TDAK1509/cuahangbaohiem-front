import Fire from "./fire";

Fire.init();
const db = Fire.getFireStoreDb();
const FIREBASE_CAR_INSURANCE_COLLECTION = "car_insurance";

export interface CarInsurance {
  name: string;
  email: string;
  phone: string;
  note?: string;
}

export default class Insurance {
  public static saveCarInsuranceRequestToServer(request: CarInsurance) {
    return db.collection(FIREBASE_CAR_INSURANCE_COLLECTION).add(request);
  }

  public static async getCarInsuranceRequests(): Promise<CarInsurance[]> {
    const querySnapshot = await db
      .collection(FIREBASE_CAR_INSURANCE_COLLECTION)
      .get();

    console.log("WTF", querySnapshot.docs[0].data());

    if (querySnapshot.docs.length === 0) {
      return [];
    }
    return querySnapshot.docs.map((doc) => doc.data() as CarInsurance);
  }
}
