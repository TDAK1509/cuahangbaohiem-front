<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

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
</style>
