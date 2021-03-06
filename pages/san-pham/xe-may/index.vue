<router>
{
  name: "tinh-phi_xe-may"
}
</router>
<template>
  <section class="section">
    <div class="container">
      <form @submit.prevent="submit">
        <div class="field">
          <label class="label">Loại xe</label>

          <div class="control">
            <p>
              <label class="radio">
                <input
                  data-cy="motorbike-radio"
                  name="haha"
                  type="radio"
                  required
                />
                &lt; 50cc
              </label>
            </p>

            <p>
              <label class="radio">
                <input
                  data-cy="motorbike-radio"
                  name="haha"
                  type="radio"
                  required
                />
                &gt; 50cc
              </label>
            </p>
          </div>
        </div>

        <button data-cy="next-button">NEXT</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TinhPhiTaiNan",
  layout: "calculator",
  methods: {
    submit() {
      //
    }
  }
});
</script>
