<template>
  <div class="containerMain">
    <img alt="logo" src="../assets/sto2.png"  style="width:20%;margin-bottom:50px"/>
    <div class="containerLogin">
      <form class="containerForm">
        <p class="textForm">Digite seu email</p>
        <input placeholder="exemplo@exemplo.com.br"  class="formField"/>
        <p class="textForm">Sua senha</p>
        <input type="password" placeholder="********" class="formField"/>
        <button v-on:click="handleChangePage" class="buttonStyle">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import store from "../store/index";


  export default Vue.extend({
  name: "Login",
  data() {
    return {
      state: store.state,
    };
  },


  methods: {
    handleChangePage(){
      this.$router.replace({ path: "/lista" });
    }
  },


})

</script>

<style scoped>
.containerLogin{
  width: 40%;
}
.containerForm{
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
}
.containerMain{
  height: 100vh;
  padding-left:25%;
  padding-right:25%;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  background-color:rgba(7, 43, 6, 1);
}
.textLogin{
  font-size: 24px;
  font-weight: bold;
  color:white;
}
.textForm{
  text-align: center;
  color:white;
}
.formField{
  border-radius: 5px;
  border-width: 0px;
  padding:10px 20px;
  width: 100%;
  border-color: #072B06 !important;
  border-width: 1px;
  border-style: solid;
}

.buttonStyle{
  padding:10px;
  background: #dca772;
  border-style: none;
  border-radius: 5px;
  width: 100%;
  margin-top:30px
}

@media only screen and (max-width: 768px) {
  .containerMain {
  
  }
}

</style>
