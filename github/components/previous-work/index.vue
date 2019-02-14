<template lang="pug">
  v-card.mt-3.overflow-x-hidden
    v-responsive
      v-img(:src="require('~/assets/vidf/3243.jpg')" aspect-ratio=1.5 position="center left")
    v-layout(justify-center wrap)
      v-flex(xs12 sm9)
        v-card-title.headline.pb-0 Previous Work
        v-card-text.pb-2
          p Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
      v-flex(xs12 sm9)
        v-container.pr-0.pl-0.pt-0
          v-layout.overflow-scroll
          
            SelfPresentations
              
            CompanyWork
            
            Miscellaneous
</template>
<script>
import SelfPresentations from '@/components/previous-work/SelfPresentations'
import CompanyWork from '@/components/previous-work/CompanyWork'
import Miscellaneous from '@/components/previous-work/Miscellaneous'

export default {
  components: {
    SelfPresentations,
    CompanyWork,
    Miscellaneous
  },
  data: () => ({
    previous: [
      {
        img: ,
        title: ''
        //posters/4389.jpg
        //swapnamaya/0836.jpg
        //posters/6768.jpg
        //posters/1488.jpg
      },
      {
        img: ,
        title: ''
        //posters/7092.jpg
        //posters/1545.jpg
        //alekhya/9448.jpg
        //cloud/3263.jpg
      },
      {
        img: ,
        title: ''
        //vidf/2132.jpg
        //yuva/9726.jpg
        //nehru/6882.jpg
        //bgs/1829.jpg
        //bgs/6641.jpg
      },
    ],
    previouss: [
      {
        img: require('~/assets/vidf/3195.jpg'),
        title: 'V I D F',
        caption: 'Vancouver, British Columbia'
      },
      {
        img: require('~/assets/cloud/2956.jpg'),
        title: 'CLOUD MESSENGER',
        caption: 'San Francisco, California'
      },
      {
        img: require('~/assets/alekhya/9484.jpg'),
        title: 'ALEKHYA',
        caption: 'Washington D.C., Maryland'
      },
      {
        img: require('~/assets/nehru/6882.jpg'),
        title: 'NEHRU CENTRE',
        caption: 'London, England'
      },
      {
        img: require('~/assets/yuva/1475.jpg'),
        title: 'YUVA BHARATI',
        caption: 'San Francisco, California'
      },
      {
        img: require('~/assets/chris/9036.jpg'),
        title: 'SWAPNA MAYA',
        caption: 'Vancouver, British Columbia'
      },
      {
        img: require('~/assets/bgs/0993.jpg'),
        title: 'CHENNAI',
        caption: 'Chennai, India'
      }
    ],
  })
}  
</script>
