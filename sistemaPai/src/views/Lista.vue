<template>
  <div class="mainContainer">
    <h4>Lista de Usuários</h4>
    <div class="containerListDiv">
      <div class="listName">
        <div  class="fieldsStyle" >
          <p>Nome:</p>
          <p>Vanderlei</p>
        </div>
        <div class="fieldsStyle" style="margin-left:30px">
          <p>Ramal STO:</p>
          <p>128</p>
        </div>
        <div class="fieldsStyle" style="margin-left:30px">
          <p>Tel Celular:</p>
          <p>94747-3432</p>
        </div>
        <div class="fieldsStyle" style="margin-left:30px">
          <p>Tel Fixo:</p>
          <p></p>
        </div>
        <div class="fieldsStyle" style="margin-left:30px">
          <p>Email:</p>
          <p></p>
        </div>
        <div class="fieldsStyle" style="margin-left:30px">
          <p>Obs</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import store from "../store/index";


  export default Vue.extend({
  name: "Lista",
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
.containerListDiv{
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
  width: 50%;
  align-content: center;
  align-items: flex-start;
  display: flex;
  padding:10px;
  flex-direction: column;
}
.mainContainer{
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.listName{
  display: flex;
  flex-direction: row;
}

.fieldsStyle{
  text-align: start;
}

</style>
