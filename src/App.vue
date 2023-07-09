<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link>
  </nav>
  <div class="icon-wrapper">
    <test-component></test-component>
    <!-- <svg width="30" height="30" viewBox="0 0 100 100" style="color: red">
      <use href="#more"></use>
    </svg> -->
    <svg width="30" height="30" style="color: rgb(67, 201, 219)">
      <use href="#more2"></use>
    </svg>
  </div>
  <!-- <test-component2></test-component2>
  <test-component3></test-component3> -->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.icon-wrapper{
  color: #42b983;
}
</style>
