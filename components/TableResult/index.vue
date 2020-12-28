<template>
  <div class="table-container" v-if="content">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th v-for="(header, index) of thead" :key="index">
            <abbr :title="header">{{ header }}</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in content" :key="index">
          <td>{{ list.name }}</td>
          <td>{{ list.private }}</td>
          <td><a :href="list.html_url" :title="list.name">{{ list.html_url }}</a></td>
          <td>{{ list.description }}</td>
          <td>{{ list.language }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'TableResult',
    props: {
      header: {
        type: Array
      },
      content: {
        type: Array,
        require: true
      }
    },
    data () {
      return {
        thead: [
          'name',
          'Private',
          'Url',
          'Description',
          'Language'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>