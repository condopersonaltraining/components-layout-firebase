<template lang="pug">
  v-container(grid-list-xs).pa-0
    v-layout(wrap)           
      v-flex(xs12)
        v-img(:src="require('~/assets/offcenter/2930.jpg')" position="0 20%" aspect-ratio=2)      
      v-flex(xs12)
        v-img(:src="require('~/assets/1748.jpg')" position="0 85%" aspect-ratio=2)
    v-container
      v-layout(justify-center)
        v-flex(
          xs12)
          About
          PreviousWork
          CurrentProjects
          Media
          Events          
</template>

<script>
import About from '@/components/About'
import CurrentProjects from '@/components/CurrentProjects' 
import PreviousWork from '@/components/previous-work/index'
import Media from '@/components/Media'
import Events from '@/components/Events'
export default {
  components: {
    About,
    CurrentProjects,
    PreviousWork,
    Media,
    Events,
  }
}
</script>

<style>
.v-toolbar__title {
  letter-spacing: 0.2rem
}
.headline {
  letter-spacing: 0.15rem !important
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.overflow-scroll {
  overflow-x: scroll;
}
</style>
