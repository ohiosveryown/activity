<template>
  <div>
    <h1>Hello world</h1>
  </div>
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  h1 {
    color: red;
    @include breakpoint(mdl) {
      color: var(--cloud);
    }
  }
</style>
