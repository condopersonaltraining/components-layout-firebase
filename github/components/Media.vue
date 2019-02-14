<template lang="pug">
  v-card.mt-3
    v-responsive
      v-img(:src="require('~/assets/vidf/0563.jpg')" aspect-ratio=2 position="0 90%")
    v-layout(justify-center)
      v-flex(xs12 sm9)  
        v-card-title.headline.pb-0 Media
        v-card-text.pb-2
          p Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
        v-container.pl-0.pr-0.pt-0
          v-layout.overflow-scroll
            v-card.primary.secondary--text.ml-4(dark v-for="(n, i) in videos" :key="i" min-width="21rem")
              v-responsive
                v-img(aspect-ratio=2).primary
                  v-container(fill-height fluid)
                    v-layout(fill-height)
                      v-flex(xs12 align-end flexbox)
                        span(class="headline") Top 10 Australian beaches
                //iframe(:src="n.src" width="100%" height="260" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  data: () => ({
    videos: [
      {
        src: 'https://www.youtube.com/embed/pNTguAVJATk?modestbranding=1&autohide=1&showinfo=0&controls=0'
      },
      {
        src: 'https://www.youtube.com/embed/EWWFDmih608?modestbranding=1&autohide=1&showinfo=0&controls=0'
      },
      {
        src: 'https://www.youtube.com/embed/DlbBieSnElc?modestbranding=1&autohide=1&showinfo=0&controls=0'
      }
    ]
  })
}
</script>
