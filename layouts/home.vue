<template>
  <div id="home-layout">
    <TheHeader />

    <main id="home-layout__main">
      <Nuxt />
    </main>

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

html,
body,
#__nuxt,
#__layout {
  max-height: 100%;
}

#home-layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#home-layout__main {
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
