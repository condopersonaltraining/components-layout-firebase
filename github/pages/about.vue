<template lang="pug">
  v-container(grid-list-xs).pa-0
    v-layout(wrap)                  
      v-flex(xs12)
        v-img(:src="require('~/assets/offcenter/2930.jpg')" position="0 20%" aspect-ratio=2)
    v-layout(justify-center)
      v-flex(
        xs12
        sm10)
        v-container
          Biography
          ArtisticStatement
</template>

<script>
import Biography from '@/components/Biography'
import ArtisticStatement from '@/components/ArtisticStatement'
export default {
  components: {
    Biography,
    ArtisticStatement
  }
}
</script>

<style>
.body-2 {
  letter-spacing: 0.05rem
}

.body-1 {
  letter-spacing: 0.035rem
}
.v-toolbar__title {
  letter-spacing: 0.2rem
}
.headline {
  letter-spacing: 0.15rem !important
}
.title {
  letter-spacing: 0.05rem !important
}
</style>
