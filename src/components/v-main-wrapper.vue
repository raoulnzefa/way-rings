<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
    name: 'v-main-wrapper'
}
</script>

<style>
.v-main-wrapper {
  width: 100%;
  min-height: 100vh;
}
</style>