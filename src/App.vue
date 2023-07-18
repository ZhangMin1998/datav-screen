<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link>
  </nav>
  <!-- <svg-animation></svg-animation> -->
  <datav-loading width="200" height="200" outsideColor="pink" insideColor="green" duration="2">
    <div style="font-size: 20px;">
      数据大屏加载中...
    </div>
  </datav-loading>
  <div style="width: 50%;background: #333;color: #fff;">
    <datav-flyBox>
      <div>111</div>
      <div>222</div>
      <div>333</div>
      <div>333</div>
      <div>333</div>
      <div>333</div>
    </datav-flyBox>
  </div>
  <div style="width: 100%;background: #333;color: #fff;">
    <datav-flyBox>
      <div>111</div>
      <div>222</div>
      <div>333</div>
      <div>333</div>
      <div>333</div>
      <div>333</div>
    </datav-flyBox>
  </div>
  <!-- <router-view/> -->
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
</style>
