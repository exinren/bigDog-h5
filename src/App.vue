<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Vue2Verify from "./components/verity/Verity.vue"
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const input = ref("")
const show = ref(false)
const loading = ref(false)
const disabled = ref(false)
function submit () {
  show.value = true
  disabled.value = true
}
function success(data) {
  loading.value = false
  disabled.value = false
  show.value = false
  ElMessage({
    message: data.msg,
    type: 'success',
  })
}
function fail (data) {
  show.value = false
  loading.value = false
  disabled.value = false
  ElMessage({
    message: data.msg,
    type: 'error',
  })
}

function closeDialog (){
  disabled.value = false
}

</script>

<template>
    <div class="container">
      <div class="content">
          <h2>请在下面输入你Polygon的地址.</h2>
          <div class="desc">我们将给您发送一些BigDogCoin币.</div>
         <el-input v-model="input" size="large" placeholder="请输入你的polygon地址" />
         <el-button style="marginTop: 30px" :loading="loading" type="primary" :disabled="disabled" @click="submit" size="large" round>获取BigDogCoin币</el-button>
      </div>
      <el-dialog v-model="show" title="请完成验证码" center width="400px" @close="closeDialog">
        <Vue2Verify
          :mode="'fixed'"
          :captcha-type="'blockPuzzle'"
          :captcha-id="'9ca07a9c-c260-50ae-2c13-89cde2f34cb9'"
          :container-id="'#sliderFixed_btn'"
          :img-size="{ width: '330px', height: '155px' }"
          :success-event="success"
          :fail-event="fail"
          :address-value="input"
            />
      </el-dialog>
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
.container .captcha {
  margin: auto;
}
</style>
