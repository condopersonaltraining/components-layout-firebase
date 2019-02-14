<template lang="pug">
  v-card
    v-layout(wrap justify-center)
      v-flex(xs12 sm10)
        v-card-title.headline.pt-4.pb-0 Sujit Vaidya
        v-card-text.primary--text.font-italic.body-1.pt-1.pb-0 Independant Bharatanatyam Artist
        v-card-text.accent--text.body-2.pt-1.pb-0 Vancouver, British Columbia
        v-card-text
          | As an interpreter, he has performed extensively in Canada, US, Europe and India.
          | He has many solo margam presentations (traditional Bharatanatyam repertoire)
          | to his credit and has performed in duet and group productions with companies
          | such as Co Erasga, Battery Opera Dance, Shakti Dance Company in Vancouver
          | BC, inDANCE in Toronto ON, Spilling Ink in Washington DC, Nava Dance in San
          | Fransisco CA and Nrithyalakshana in Chennai, India.
        v-card-text.pt-0
          | His projects, UMA and Śiva Kissed Visnu , choreographed by Hari Krishnan, artistic director of
          | inDANCE, Toronto, challenge him in new ways as an interpreter.
      v-flex(xs12)
        v-responsive
          v-img.elevation-6(aspect-ratio=1.75 :src="require('~/assets/offcenter/1597.jpg')").ma-3
      v-flex(xs12 sm10)
        v-card-text.pb-0
          | As an emerging choreographer, he creates work that speaks from a deeply
          | personal space. Using Bharatanatyam as language, his work “<b>OFF CENTRE</b>”
          | draws from introspection around his experience of disconnect as a contemporary
          | gay man, immersed in learning an ancient art form. He finds it important and
          | urgent to question the narrative and relevance of non inclusive traditional ideas.
        v-card-text
          | As the first South Asian artist to receive the Vancouver City’s Mayor’s award
          | as <i>Best Emerging Dance Artist</i>, 2010 He continues to pursue advanced training
          | in the traditional form of Bharatanatyam with his Guru A. Lakshman in Chennai,
          | India.
</template>
