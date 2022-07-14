<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Vue2Verify from "./components/verity/Verity.vue"
import { ref } from 'vue'
const input = ref("")
const show = ref(false)
function submit () {
  show.value = true
}
function success() {
  show.value = false
}

</script>

<template>
    <div class="container">
      <div class="content">
          <h2>Enter your Polygon address below.</h2>
          <div class="desc"> We will send you a small dose of potassium.</div>
         <el-input v-model="input" size="large" placeholder="Please input your polygon address" />
         <el-button style="marginTop: 30px" type="primary" @click="submit" size="large" round>Send Me Some BigDogCoin</el-button>
      </div>
      <div v-show="show">
        <Vue2Verify
        :mode="'fixed'"
        :captcha-type="'blockPuzzle'"
        :captcha-id="'9ca07a9c-c260-50ae-2c13-89cde2f34cb9'"
        :container-id="'#sliderFixed_btn'"
        :img-size="{ width: '330px', height: '155px' }"
        :success-event="success"
          />
      </div>
    </div> 
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.container {
  width: 600px;
  padding: 40px;
  margin: 40px auto;
}
.content {
  text-align: center;    
}
.content .desc {
  font-size: 18px;
  margin: 30px auto;
}
</style>
