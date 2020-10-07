<template>
  <div>
    <form
      ref="form"
      class="mb-4 columns is-mobile is-block-mobile"
      @submit.prevent="Search()"
    >
      <div class="column is-full-mobile is-half-tablet is-three-quarters-desktop ">
        <p class="control has-icons-left has-icons-right">
          <input
            id="username"
            type="text"
            class="input is-medium"
            placeholder="Nome de usuário do github" 
            v-model="name"
            >
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="column is-full-mobile">
        <p class="control">
          <button
            type="submit"
            class="button is-dark is-medium is-outlined is-fullwidth"
            >
            Search
          </button>
        </p>
      </div>
    </form>
    <div class="table-container">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th><abbr title="Name">Name</abbr></th>
            <th><abbr title="Private">Private</abbr></th>
            <th><abbr title="url">Url</abbr></th>
            <th><abbr title="Description">Description</abbr></th>
            <th><abbr title="Linguage">Language</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="list in username" :key="list.id">
            <td>{{ list.name }}</td>
            <td>{{ list.private }}</td>
            <td><a :href="list.html_url" :title="list.name">{{ list.html_url }}</a></td>
            <td>{{ list.description }}</td>
            <td>{{ list.language }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        name: '',
        username: [],
      }
    },
    methods: {
      async Search () {
        if (document.getElementById('username').value !== '') {
          let USER = this.name
          let result = await this.$axios.$get(`https://api.github.com/users/${USER}/repos`)
            .then(res => res)
          let copy = Object.assign(({}, result))
          return this.username = copy
        }
      }  
    }
  }
</script>

<style scoped>

</style>