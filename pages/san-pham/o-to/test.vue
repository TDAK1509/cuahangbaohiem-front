<template>
  <div>
    <p v-for="(value, key) in firstCarInsuranceRequest" :key="key">
      {{ value }}
    </p>
  </div>
</template>

<script>
import Fire from "@/models/fire";

Fire.init();
const db = Fire.getFireStoreDb();
const FIREBASE_CAR_INSURANCE_COLLECTION = "car_insurance_request";

async function getCarInsuranceRequests() {
  const querySnapshot = await db
    .collection(FIREBASE_CAR_INSURANCE_COLLECTION)
    .get();

  if (querySnapshot.docs.length === 0) {
    return [];
  }
  return querySnapshot.docs.map((doc) => doc.data());
}

export default {
  name: "TinhPhiXeTest",

  async asyncData() {
    const carInsuranceRequests = await getCarInsuranceRequests();
    return { carInsuranceRequests };
  },

  data() {
    return {
      carInsuranceRequests: []
    };
  },

  computed: {
    firstCarInsuranceRequest() {
      return this.carInsuranceRequests[this.carInsuranceRequests.length - 1];
    }
  },

  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.$router.push("/404");
    }
  }
};
</script>
