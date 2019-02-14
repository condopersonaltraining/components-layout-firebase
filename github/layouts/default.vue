<template lang="pug">
  v-app
    v-navigation-drawer.secondary.accent--text(
      app
      right
      v-model="drawer")
      contact-drawer
    v-toolbar(
      color="white"
      fixed
      app)
      v-toolbar-title(class="primary--text" v-text="title")
      v-spacer
      v-btn(v-if="!drawer" @click.stop="drawer = !drawer" class="primary--text text--lighten-1 mr-0" flat) Contact
    v-content.secondary
      nuxt
</template>

<script>
import ContactDrawer from '@/components/ContactDrawer'
export default {
  components: {
    ContactDrawer
  },
  data: () => ({
    drawer: false,
    title: 'Sujit Vaidya'
  })
}
</script>

<style>

</style>
