<template lang="pug">
  v-card.mt-3
    v-responsive
      v-img(:src="require('~/assets/offcenter/0845.jpg')" aspect-ratio=2 position="top center")
    v-layout(justify-center wrap)
      v-flex(xs12 sm9)
        v-card-title.headline.pb-0 Current Projects
        v-card-text.pb-2
          p Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
      v-flex(xs12 sm9)
        v-container.pl-0.pr-0.pt-0
          v-layout.overflow-scroll
            v-card.primary.secondary--text.mb-1.ml-2(min-width="17rem")
              v-responsive
                v-img(:src="require('~/assets/offcenter/1597.jpg')" aspect-ratio=2 position="bottom center")
              v-card-title.pb-0
                h3.title.font-weight-black OFF CENTER
              v-card-text.pt-1.pb-0
                p.text-truncate.caption Vancouver, British Columbia
              v-card-actions.pt-0
                v-spacer
                v-dialog(
                  v-model="dialogA"
                  width="500")
                  v-btn(
                    flat
                    slot="activator"
                    dark) Expand
                  v-card(dark)
                    v-responsive
                      v-img(:src="require('~/assets/offcenter/1597.jpg')" aspect-ratio=2)
                    v-card-title(class="headline font-weight-black" primary-title) OFF CENTER
            v-card.primary.secondary--text.mb-1.ml-2(min-width="17rem")
              v-responsive
                v-img( :src="require('~/assets/siva/8529.jpg')" aspect-ratio=2 position="bottom center")
              v-card-title.pb-0
                h3.title.font-weight-black ŚIVA KISSED VISNU
              v-card-text.pt-1.pb-0
                p.text-truncate.caption Toronto, Ontartio
              v-card-actions.pt-0
                v-spacer
                v-dialog(
                  v-model="dialogB"
                  width="500")
                  v-btn(
                    flat
                    slot="activator"
                    dark) Expand
                  v-card(dark)
                    v-responsive
                      v-img(:src="require('~/assets/siva/8529.jpg')")
                    v-card-title(class="headline font-weight-black" primary-title) ŚIVA KISSED VISNU
</template>
<script>
export default {
  data: () => ({
    dialogA: false,
    dialogB: false
  })
}
</script>
