<template>
  <div id="app">
    <div class="header align-items-center">
      <div class="header-logo align-items-center">
        <router-link class="logo" to="/">origi-<br>neel<br>logo.</router-link>
      </div>
      <router-link class="menu-contact" to="/Contact">contact</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
     return {
       meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' }
       ]
     }
  },
}
</script>

<style>
#app {
  font-family: 'Apple Garamond';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  position: fixed;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  padding: 15px 30px;
  z-index: 1
}

.header-logo {
  border: 5px dashed red;
  width: 70px;
  padding: 5px;
  line-height: 1.1 !important;
}

.header-logo a {
  text-decoration: none;
  color: black;
}

.menu-contact {
  position: absolute;
  top: 45px;
  right: 40px;
  color: red;
  border-bottom: 5px dashed red;
  transition: 1s;
}

.menu-contact:hover {
  text-decoration: none;
  color: red;
  border-bottom: 5px solid red
}

/*  Algemeen */

h1 {
  text-align: right;
  font-size: 3em;
}

/* transition */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: linear;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

/* MediaQuery */

@media (min-width: 1000px) {
  #app {
    width: 1000px;
    margin: 0 auto;
    display: block;
  }
}

@media (max-height: 500px) {
  .scrollen {
    display: none;
  }
}

@media (max-width: 500px) {

}

</style>
