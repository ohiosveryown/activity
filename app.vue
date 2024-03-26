<template>
  <cursor :class="{ hide: hover }" />
  <totals @mouseenter="hover = true" @mouseleave="hover = false" />
  <main>
    <ul
      ref="ul"
      class="days"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <day v-for="activity in activities" :activity="activity" />
    </ul>
  </main>
  <bg />
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 8rem;
    height: 100vh;
    overflow-x: auto;
  }

  ul.days {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    position: relative;
    margin-top: 8rem;
    padding: 0rem 4rem;
    height: 50vh;
    cursor: cell;
  }

  .hide {
    opacity: 0;
  }
</style>

<script>
  import { activities } from "assets/logic/activity.js"
  export default {
    data: () => ({
      activities,
      hover: false,
    }),
  }
</script>
