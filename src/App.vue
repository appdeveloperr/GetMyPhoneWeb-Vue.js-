<template>
  <div id="app" >
    
	<!--<section class="form-simple" >
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
              </div>-->

  <router-view></router-view>

  </div>
</template>

<script>

  export default {
    name: 'Main'

  }
</script>

<style>


</style>
