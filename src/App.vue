<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper.vue'

export default {
  name: 'app',
  components: {
    vMainWrapper
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;800&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --montserrat: 'Montserrat', sans-serif;
}
li {
  list-style: none
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background-color: #F0F0F0;
  color: #60676B;
  font-family: 'Helvetica', sans-serif;
  overflow-x: hidden;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
}
.container {
  width: 90%;
  max-width: 1660px;
  margin: 0 auto;
}
.btn {
  min-width: 5rem;
  height: 2rem;
  background-color: #F0F0F0;
  color: #60676B;
  border: 0.6px solid #C5C5C5;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 12px;
  font-family: var(--montserrat);
  transition: .2s;
}
.btn:hover {
  color: #3a4044;
}
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
.center {
  align-items: center
}
.space-between {
  justify-content: space-between;
}
.flex-center {
  justify-content: center;
}
.section-heading {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #60676B;
  margin-bottom: 1rem;
}
</style>
