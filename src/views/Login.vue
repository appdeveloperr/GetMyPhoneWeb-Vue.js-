<template>
     <div class="app">
    
	<section class="form-simple" >
    <mdb-row>
      <mdb-col md="5">
        <mdb-card>
          <div class="header pt-3 grey lighten-2">
            <mdb-row class="d-flex justify-content-start">
              <h3 class="deep-grey-text mt-3 mb-4 pb-1 mx-5">Log in</h3>
            </mdb-row>
          </div>
          <mdb-card-body class="mx-4 mt-4">
            <mdb-input label="Your email" v-model="email" type="text"/>
            <mdb-input label="Your password" v-model="password" type="password" containerClass="mb-0"/>
            <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#" class="dark-grey-text font-weight-bold ml-1"> Password?</a></p>
            <div class="text-center mb-4 mt-5">
              <mdb-btn color="danger" type="button" v-on:click="signIn" class="btn-block z-depth-2">Log in</mdb-btn>
            </div>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>

              <div class="message is-danger" v-if="error">
                <div class="message-body">{{error}}</div>
              </div>

  </div>
</template>



<script>

 import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
import { sign } from 'crypto';
import database from '@/services/database';
  
  export default {
    name: 'FormsPage',

    data (){
      return {

          email:'',
          password:'',
          error:''

      }
    },

    methods:{

      async signIn(){

          //let result =   await database.signUp(this.email,this.password);
        let result =   await database.signIn(this.email,this.password);
      
          if(result.message){
            this.error = result.message;
          }else{

             var splitUserName = this.email.split("@");
            console.log('User is Signed In..!');
                    this.$router.push('/Home/'+splitUserName[0]);
          }
      },
    },

    computed:{

        currentUser(){
          return this.$store.state.currentUser
        }
    },

    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon
    }
  }
</script>

<style>

.app{
	width: 100%;
    height: 100vh;
background: url('https://www.wallpaperup.com/uploads/wallpapers/2014/04/10/329048/40de3fe1ebd6c2e35d4ba95e9ab50955-700.jpg') ;   
background-size: cover;

}


.form-simple{
	padding-top :100px;
padding-left: 500px;
}

.form-simple .font-small {
    font-size: 0.8rem; }

  .form-simple .header {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem; }

  .form-simple input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #ff3547;
    -webkit-box-shadow: 0 1px 0 0 #ff3547;
    box-shadow: 0 1px 0 0 #ff3547; }

  .form-simple input[type=text]:focus:not([readonly]) + label {
    color: #4f4f4f; }

  .form-simple input[type=password]:focus:not([readonly]) {
    border-bottom: 1px solid #ff3547;
    -webkit-box-shadow: 0 1px 0 0 #ff3547;
    box-shadow: 0 1px 0 0 #ff3547; }

  .form-simple input[type=password]:focus:not([readonly]) + label {
    color: #4f4f4f; }


.message-body{

    color:#ff3547;
    font-size:20px;
    text-align: center;
}
</style>
