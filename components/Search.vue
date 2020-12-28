<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: {
      text: {
        type: String,
        required: true
      }
    },
    data () {
    }
    
  }
</script>

<style lang="scss" scoped>

</style>