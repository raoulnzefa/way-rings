<template>
  <div class="home-page">
      <section class="main-screen">
          <v-header />
          <v-nav-menu />
          <h1 class="main-header">Way</h1>
      </section>
      <section class="gallery d-flex center space-between">
          <div class="gallery-item first"></div>
          <div class="gallery-item second"></div>
          <div class="gallery-item third"></div>
      </section>
      <v-footer />
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vNavMenu from '@/components/v-nav-menu.vue'
import vFooter from '@/components/v-footer.vue'

export default {
    name: 'Homepage',
    components: {
        vHeader,
        vNavMenu,
        vFooter
    }
}
</script>

<style>
.main-screen {
    width: 100%;
    min-height: 100vh;
    background: url('../assets/img/main-bg.jpg') no-repeat center / cover;
    position: relative;
}
.main-header {
    font-family: var(--montserrat);
    position: absolute;
    bottom: 3rem;
    right: 2rem;
    font-weight: 800;
    font-size: 96px;
    line-height: 122px;
    color: #FFFFFF;
    text-shadow: 2px 2px 0 #333;
}
.gallery {
    width: 100%;
}
.gallery-item {
    height: 100%;
    min-height: 60rem;
}
.gallery-item.first {
    width: 28%;
    background: url('../assets/img/orange-suit.jpg') no-repeat center / cover;
}
.gallery-item.second {
    width: 38%;
    background: url('../assets/img/big-ring.jpg') no-repeat center / cover;
}
.gallery-item.third {
    width: 34%;
    background: url('../assets/img/white-sweter.jpg') no-repeat center / cover;
}
</style>