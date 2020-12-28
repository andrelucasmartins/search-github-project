<template>
  <div>
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column has-text-centered">
            <h2 class="subtitle is-size-2">
              Olá, eu sou
              <h1 class="title is-1">
                André Ezequiel
              </h1>
            </h2>
            Apaixonado por tecnologia e música
          </div>
          <div class="column has-text-centered">
            <SearchAvatar class="search-avatar" />
          </div>
        </div>
        <Form />
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .search-avatar {
    max-height: 30rem;
  }
</style>
