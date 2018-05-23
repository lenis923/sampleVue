<template>
  <v-container fluid>
    <p>this is setting</p>
 
  </v-container>
</template>

<script>
  axios.get('http://127.0.0.1:57110/index.html')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
</script>