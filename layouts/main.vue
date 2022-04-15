<template>
  <main>
    <nav-section />
    <Nuxt />
  </main>
</template>

<script>
  import navSection from '~/components/navSection'
  export default {
    components: {
      navSection
    },
    watch: {
    },
  }
</script>

<style scoped>
</style>
