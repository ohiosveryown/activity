<template>
  <video class="bg" autoplay="autoplay" playsinline="" muted="true" loop="loop">
    <source
      src="https://ik.imagekit.io/ohiosveryown/tracking/bg-fade.mp4#t=0.1"
    />
    <source />
  </video>
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
    pointer-events: none;
  }
</style>
