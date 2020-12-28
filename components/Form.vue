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
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </span>
          <span class="icon is-small is-right">
            <Search text="test 123" />
            <Check />
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
    <TableResult :content="username" />
  </div>
</template>

<script>
  import TableResult from '../components/TableResult'
  export default {
    data () {
      return {
        name: '',
        username: [],
      }
    },
    async asyncData({ params }) {
      const result = params
      // return { result }
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
    },
    components: {
      TableResult
    }
  }
</script>

<style scoped>

</style>