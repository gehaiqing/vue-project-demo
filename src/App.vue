<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created () {
    this.$http.get('/api/test').then(res => {
      console.log(res)
    })
  }
})
</script>

<style lang="scss">
@import url("./styles/reset.scss");
</style>
