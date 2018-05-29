<template>
  <v-container fluid>
    <p>this is setting</p>
    <v-btn large color="primary" class="mx-0" v-on:click.native="testFunction">Click me.</v-btn>
    <button v-on:click="sampleOnClick()">Add 1</button>
  </v-container>
</template>

<script>

export default {
  methods: {
    testFunction: function (event) {
      console.log('test clicked')
    }
  }
}


 function sampleOnClick() {
  alert('click.');
 
 }


  axios.get('/index.html')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
</script>