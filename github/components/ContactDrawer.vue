<template lang="pug">
  section
    blockquote.blockquote.accent.secondary--text.pl-3.pr-2
      h3.title.mb-2 Contact
      | I am interested in meaningful collaborations with peers
      | practicing in other dance styles to establish an artistic dialogue that
      | reaches far beyond the realm of tradition. 
    v-card
      blockquote.font-italic.blockquote.accent--text.pl-3.pr-2.pb-0
        | Please, reach out with the contact form provided below, 
        | or e-mail 
        span.font-weight-medium Sujit907@yahoo.com
      v-card-text.pb-0.pt-1
        v-text-field(label="Full Name" v-model="name")
        v-text-field(label="E-mail Address" v-model="email")
        v-textarea(label="Message" v-model="message")
      v-card-actions.pt-0.pb-4
        v-spacer
        v-btn(dark v-on:click="addMessage()") submit
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBDSi3LksFtZEBDaIFuNEXZigXqewWhVYI",
  authDomain: "mrs-cwilliams.firebaseapp.com",
  databaseURL: "https://mrs-cwilliams.firebaseio.com",
  projectId: "mrs-cwilliams",
  storageBucket: "mrs-cwilliams.appspot.com",
  messagingSenderId: "1015987282419"
}
firebase.initializeApp(config)
export default {
  data: () => ({
    name: '',
    email: '',
    message: '',
  }),
  methods: {
    addMessage () {
      firebase.database().ref('/').push({
        name: this.name,
        email: this.email,
        message: this.message
      })
    }
  }
}
</script>
