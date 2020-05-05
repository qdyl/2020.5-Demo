<template>
  <div id="app">
    <!--    
      <router-link to="/"></router-link>
    <router-link to="/jobSearch"></router-link>-->
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "slide"
    };
  },
  watch: {
    $route(to, from) {
      let isEnter = to.meta.index > from.meta.index;
      this.transitionName = isEnter ? "slide-left" : "slide-right";
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100vw;
}

* {
  padding: 0;
  margin: 0;
}

/*动画过渡 */
 .slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 400ms;
}

/* .slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */

/* 前进 */
.slide-left-enter,
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-left-enter,
.slide-left-leave-to {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}

/* 后退 */
.slide-right-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-right-enter,
.slide-right-leave-to {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}
</style>
