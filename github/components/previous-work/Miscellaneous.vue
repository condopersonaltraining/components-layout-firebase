<template lang="pug">
  v-card.primary.secondary--text.mb-1.ml-2(min-width="18rem")
    v-responsive
      v-img(aspect-ratio=1.5 :src="require('~/assets/yuva/1475.jpg')" position="bottom center")
    v-card-title.pb-0
      h3.title  MISCELLANEOUS
    v-card-actions
      v-spacer
      v-btn(flat dark) Expand 
</template>
