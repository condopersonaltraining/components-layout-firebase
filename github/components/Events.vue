<template lang="pug">
  v-card.accent.mt-3.overflow-x-hidden
    v-layout(justify-center)
      v-flex(xs12 sm10)
        v-card-title.headline.white--text.pb-0 Events
        v-container.pr-0.pl-0
          v-layout.overflow-scroll
            v-card.accent.pr-3(flat min-width="0rem")
            v-card.white.mr-2(v-for="(n, i) in events" :key="i" min-width="18rem")
              v-card-title.pb-2.pt-4
                h3.title.font-italic {{ n.title }}
              v-card-text.pt-0
                h5.caption.font-italic.pb-2 {{ n.location }}
                h5.title.font-italic {{ n.date }}
              v-card-actions.primary.mt-
                v-spacer
                v-btn.font-italic(flat dark to="https://google.com") View Details
            v-card.accent.pr-3(flat min-width="0rem")
</template>s
<script>
export default {
  data: () => ({
    events: [
      {
        title: 'UMA by inDANCE',
        date: '03 / 15 / 19',
        location: 'Dancemakers, Toronto',
        url: ''      
      },
      {
        title: 'UMA by inDANCE',
        date: '04 / 26-27 / 19',
        location: 'Wesleyan University, Connecticut',
        url: ''      
      },
    ]
  })
}
</script>
