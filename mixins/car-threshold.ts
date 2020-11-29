import Vue from "vue";

export default Vue.extend({
  methods: {
    mixinIsCarValueInFirstThreshold(carValue: number): boolean {
      return carValue < 500;
    },

    mixinIsCarValueInSecondThreshold(carValue: number): boolean {
      return carValue >= 500 && carValue < 700;
    },

    mixinIsCarValueInThirdThreshold(carValue: number): boolean {
      return carValue >= 700;
    },

    mixinIsCarYearInFirstThreshold(carYearGap: number): boolean {
      return carYearGap <= 3;
    },

    mixinIsCarYearInSecondThreshold(carYearGap: number): boolean {
      return carYearGap > 3 && carYearGap <= 6;
    },

    mixinIsCarYearInThirdThreshold(carYearGap: number): boolean {
      return carYearGap > 6 && carYearGap <= 10;
    }
  }
});
