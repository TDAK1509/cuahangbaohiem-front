<template>
  <div>
    <p v-for="(value, key) in firstMotorbikeInsuranceRequest" :key="key">
      {{ key }}: {{ value }}
    </p>
  </div>
</template>

<script>
import Fire from "@/models/fire";

Fire.init();
const db = Fire.getFireStoreDb();
const FIREBASE_MOTORBIKE_INSURANCE_COLLECTION = "motorbike_insurance_request";

async function getMotorbikeInsuranceRequests() {
  const querySnapshot = await db
    .collection(FIREBASE_MOTORBIKE_INSURANCE_COLLECTION)
    .orderBy("createdAt")
    .get();

  if (querySnapshot.docs.length === 0) {
    return [];
  }
  return querySnapshot.docs.map((doc) => doc.data());
}

export default {
  name: "TinhPhiXeMayTest",

  async asyncData() {
    const motorbikeInsuranceRequests = await getMotorbikeInsuranceRequests();
    return { motorbikeInsuranceRequests };
  },

  data() {
    return {
      motorbikeInsuranceRequests: []
    };
  },

  computed: {
    firstMotorbikeInsuranceRequest() {
      return this.motorbikeInsuranceRequests[
        this.motorbikeInsuranceRequests.length - 1
      ];
    }
  },

  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.$router.push("/404");
    }
  }
};
</script>
