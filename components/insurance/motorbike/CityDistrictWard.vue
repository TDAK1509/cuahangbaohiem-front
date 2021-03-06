<template>
  <client-only>
    <div>
      <div class="select">
        <select data-cy="buyer-city-input" required>
          <option value="">Chọn tỉnh/thành phố</option>
          <option
            v-for="(city, index) in cities"
            :key="`city${index}`"
            :value="city.id"
          >
            {{ city.name }}
          </option>
        </select>
      </div>

      <div class="select">
        <select data-cy="buyer-district-input" required>
          <option value="">Chọn quận/huyện</option>
          <option
            v-for="(district, index) in districts"
            :key="`district${index}`"
            :value="district.id"
          >
            {{ district.name }}
          </option>
        </select>
      </div>

      <div class="select">
        <select data-cy="buyer-ward-input" required>
          <option value="">Chọn phường/xã</option>
          <option
            v-for="(ward, index) in wards"
            :key="`ward${index}`"
            :value="ward"
          >
            {{ ward }}
          </option>
        </select>
      </div>
    </div>
  </client-only>
</template>


<script lang="ts">
import Vue from "vue";

interface City {
  id: number;
  name: string;
}

interface District {
  id: number;
  name: string;
}

export default Vue.extend({
  name: "CityDistrictWard",

  data() {
    return {
      cities: [] as City[],
      districts: [] as District[],
      wards: [] as string[]
    };
  },

  async mounted() {
    this.fetchCities();
    this.fetchDistricts();
    this.fetchWards();
    await this.$nextTick();
  },

  methods: {
    fetchCities() {
      this.cities = [
        {
          id: 1,
          name: "TP Hồ Chí Minh"
        }
      ];
    },

    fetchDistricts() {
      this.districts = [
        {
          id: 1,
          name: "Quận 7"
        }
      ];
    },

    fetchWards() {
      this.wards = ["Phường Tân Quy"];
    }
  }
});
</script>
