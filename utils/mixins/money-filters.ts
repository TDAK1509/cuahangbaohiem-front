import Vue from "vue";

export default Vue.extend({
  filters: {
    millionDongs(value: number): string {
      return (value * 1000000).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND"
      });
    },

    toVnd(money: number): string {
      return money.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND"
      });
    }
  }
});
