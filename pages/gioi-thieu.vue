<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h3>ABOUT US</h3>
        <p v-for="i in 4" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          temporibus suscipit corporis repudiandae molestiae consectetur
          molestias eius, facilis minus perspiciatis accusantium blanditiis vel
          culpa provident, enim recusandae nemo nostrum autem.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About"
});
</script>
