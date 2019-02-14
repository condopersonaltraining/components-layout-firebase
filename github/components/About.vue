<template lang="pug">
  v-card       
    iframe(width="100%" height="250vw" src="https://www.youtube.com/embed/LIc7IfoDXIM" frameborder="0" allowfullscreen)
    v-layout(justify-center)
      v-flex(xs12 sm9)
        v-card-title.headline.pb-0 About
        v-card-text.pb-2
          h4.subheading
            | My hope is to transform the dialogue around Bharatanatyam, to include new
            | perspectives from professional artists that are pushing boundaries and creating
            | compelling work.
        blockquote.accent.secondary--text.blockquote.ma-2.elevation-1.pr-2
          | My artistic role extends beyond culture and tradition but with a purpose in
          | questioning society’s beliefs, pushing boundaries, fighting prejudice.
        v-card-actions
          v-spacer
          v-btn(color="primary" flat to="/about") Read More
</template>
<script>
export default {
  
}
</script>
