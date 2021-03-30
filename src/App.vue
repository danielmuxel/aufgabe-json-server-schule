<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': navbarActive}"
        @click="navbarActive = !navbarActive"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': navbarActive}">
      <div class="navbar-start">
        <router-link :to="{ name: 'Home' }" class="navbar-item">
          Home
        </router-link>

        <router-link :to="{ name: 'News' }" class="navbar-item">
          Aktuelles
        </router-link>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      navbarActive: false
    }
  }
}
</script>