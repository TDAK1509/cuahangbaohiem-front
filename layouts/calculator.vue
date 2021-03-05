<template>
  <div id="calculator-layout">
    <TheHeader />

    <main>
      <InsuranceTabBar :insurance-type="insuranceType" />
      <Nuxt />
    </main>

    <TheFooter />
  </div>
</template>

<script>
export default {
  name: "LayoutCalculator",

  computed: {
    insuranceType() {
      const regex = /_([\w-]+)$/;
      const routeName = this.$route.name;
      const matches = routeName.match(regex);
      return matches[1];
    }
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

:root {
  font-size: 13pt;
}

body {
  font-family: "Open Sans", sans-serif;
}

@media only screen and (max-width: $tablet) {
  :root {
    font-size: 16px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

#calculator-layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
