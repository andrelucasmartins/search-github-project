<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </nuxt-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">
            Home
          </nuxt-link>

          <nuxt-link class="navbar-item" to="/about">
            About
          </nuxt-link>

          <nuxt-link class="navbar-item" to="/jobs">
            Jobs
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">
            Contact
          </nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link class="navbar-link" to="#">
              More
            </nuxt-link>

            <div class="navbar-dropdown">
              <hr class="navbar-divider">
              <nuxt-link class="navbar-item" to="#">
                Report an issue
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link class="button is-primary" to="#">
                <strong>Sign up</strong>
              </nuxt-link>
              <nuxt-link class="button is-light" to="#">
                Log in
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>