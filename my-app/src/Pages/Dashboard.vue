<template>

<!--
    <v-container fill-height>
        <v-layout row wrap align-center>
            <v-flex class="text-xs-center">
                <v-btn>test</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
-->

  <v-container fluid>
  
    <p>個人情報入力</p>
  
    <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="お名前"
      required
    ></v-text-field>
    <v-text-field
      v-model="address"
      :rules="addressRules"
      :counter="150"
      label="住所"
      required
    ></v-text-field>
    <v-text-field
      v-model="street"
      :counter="150"
      label="番地"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Eメールアドレス"
      required
    ></v-text-field>
    <v-btn large color="primary" class="mx-0" v-on:click.native="submit">登録</v-btn>
    </v-form>
  </v-container>
 
</template>
 
<script>
  // https://qiita.com/sygnas/items/7eac9491b37a1bcba0cb


  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'お名前を入力してください',
        v => v.length <= 10 || 'お名前は１０文字以下で入力してください'
      ],
      address: '',
      addressRules: [
        v => !!v || '住所を入力してください',
        v => v.length <= 150 || '住所は１５０文字以下で入力してください'
      ],      
      email: '',
      emailRules: [
        v => !!v || 'Eメールアドレスを入力してください',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Eメールアドレスの形式が異なります'
      ]
    }),
    methods: {
      submit: function (event) {
      
        axios.get('/src/sample/user.js')
        .then(res => {
          console.log(res);
          this.address = res.data.name;
        })
        .catch(error => console.log(error));


      }
    }

    
    
    
  }
</script>
 
<style>
</style>