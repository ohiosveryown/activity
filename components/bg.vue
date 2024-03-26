<template>
  <div class="bg" />
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--zmin);
    width: 100vw;
    height: 100vh;
    background: url("https://ik.imagekit.io/ohiosveryown/tracking/bg.png")
      no-repeat center center;
    background-size: cover;
    pointer-events: none;
  }
</style>
