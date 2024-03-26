<template>
  <div class="icon"></div>
  <div class="activity">
    <div class="primary"></div>
    <div class="secondary"></div>
    <div class="unit"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

  h1 {
    font-size: 9px;
  }
</style>

<script>
  export default {
    props: {
      activity: Object,
    },
  }
</script>
