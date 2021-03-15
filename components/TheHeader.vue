<template>
  <header class="header">
    <nuxt-link data-cy="logo" to="/">
      <img class="logo" src="~assets/images/logo.png" />
    </nuxt-link>

    <label for="burger-checkbox" class="burger">
      <i class="fas fa-bars fa-2x"></i>
    </label>

    <input id="burger-checkbox" type="checkbox" />

    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__list-item">
          <nuxt-link to="/">
            <i class="is-mobile fas fa-home"></i>
            <span class="nav__label">Trang chủ</span>
          </nuxt-link>
        </li>

        <li class="nav__list-item">
          <nuxt-link to="/gioi-thieu">
            <i class="is-mobile fas fa-info-circle"></i>
            <span class="nav__label">Giới thiệu</span>
          </nuxt-link>
        </li>

        <li class="nav__list-item">
          <div class="nav__list-item-parent">
            <span>Sản phẩm</span>
            <i class="is-desktop fas fa-angle-down"></i>
          </div>

          <ul class="nav__sub-list">
            <li class="nav__sub-list-item">
              <nuxt-link to="/san-pham/o-to">
                <i class="fas fa-car"></i>
                <span class="nav__label">Bảo hiểm ô tô</span>
              </nuxt-link>
              <nuxt-link to="/san-pham/xe-may">
                <i class="fas fa-motorcycle"></i>
                <span class="nav__label">Bảo hiểm xe máy</span>
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/z-index";

.header {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0.4em 0.3em;
  z-index: $z-index-header;
}

.is-desktop {
  display: none;
}

.logo {
  height: 60px;
  width: auto;
}

.burger {
  margin-left: auto;
  margin-right: 0.6em;
}

#burger-checkbox {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;

  &:checked ~ .nav {
    transform: scale(1, 1);
  }

  &:checked ~ .nav .nav__list-item {
    opacity: 1;
    transition: opacity 150ms ease-in-out 150ms;
  }
}

.nav {
  --bg-color: #fff;
  --text-color: var(--clr-black);

  height: 100%;
  background: var(--bg-color);
  color: var(--text-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  transform: scale(0, 1);
  transform-origin: left;
  transition: transform 200ms ease-in-out;
  border-right: 1px solid var(--clr-border-grey);
}

.nav__list {
  padding-top: 0.4em;
  text-transform: capitalize;
}

.nav__label {
  margin-left: 0.4em;
}

.nav__list-item {
  opacity: 0;
  transition: opacity 120ms ease-in-out;
}

.nav__list-item a {
  text-decoration: none;
  color: var(--text-color);
  display: block;
  width: 100%;
  padding: 0.8em;

  &.nuxt-link-exact-active {
    color: var(--clr-primary);
  }
}

.nav__list-item-parent {
  padding: 0.5em;
  font-size: 0.9rem;
  color: grey;
}

@media (min-width: 700px) {
  .nav,
  .nav__list,
  .nav__list-item,
  .nav__sub-list,
  .nav__sub-list-item,
  .nav__list-item-parent {
    all: unset;
  }

  .header {
    justify-content: center;
    padding-top: 0;
  }

  .logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.3em;
  }

  .burger {
    display: none;
  }

  .nav__list {
    display: flex;
  }

  .nav__list-item {
    position: relative;
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-left: 2em;
    }

    &:hover > .nav__sub-list {
      transform: scale(1, 1);
    }
  }

  .nav__list-item > a {
    &:hover {
      background: var(--clr-border-grey);
    }
  }

  .nav__list-item-parent {
    color: var(--clr-black);
    display: flex;
    align-items: center;
  }

  .nav__list-item-parent > span {
    margin-right: 0.7em;
  }

  .nav__sub-list {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    min-width: 250px;
    border: 1px solid var(--clr-border-grey);
    border-radius: 4px;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 100ms ease-in-out;

    &::after {
      content: "";
      position: absolute;
      top: -10px;
      left: 25px;
      border: 5px solid transparent;
      border-bottom-color: #fff;
    }

    &::before {
      content: "";
      position: absolute;
      top: -12px;
      left: 24px;
      border: 6px solid transparent;
      border-bottom-color: var(--clr-border-grey);
    }
  }

  .nav__sub-list-item a {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      border-bottom: 1px solid var(--clr-border-grey);
    }

    &:hover {
      background: var(--clr-border-grey);
    }
  }
}
</style>
