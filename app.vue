<template>
  <!-- <rm /> -->
  <!-- <dates /> -->

  <main>
    <ul>
      <li v-for="(activity, x) in activities" :key="x">
        <div class="marker" />
        <div class="content">
          <h2>{{ activity.date }}</h2>
          <h3>{{ activity.type }}</h3>
          <h4>{{ activity.distance }}</h4>
          <h4>{{ activity.time }} min</h4>
          <img :src="`${activity.img}`" />
        </div>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 12rem;
    height: 100vh;
    overflow-x: auto;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    height: 50vh;
    /* overflow: scroll; */
  }

  li {
  }

  img {
    max-width: 400px;
  }
</style>

<script>
  import { basketball, run, hike } from "public/content.js"
  export default {
    data: () => ({
      activities: [
        {
          date: "Jan 1",
          img: basketball.piedmont,
          distance: "",
          time: 26,
        },
        {
          date: "Jan 2",
          img: hike.bubble,
          distance: "",
          time: 45,
        },
        {
          date: "Jan 3",
          img: run.tribble,
          distance: "",
          time: 64,
        },
        {
          date: "Jan 4",
          img: basketball.piedmont,
          distance: "",
          time: 60,
        },
        {
          date: "Jan 5",
          img: hike.bubble,
          distance: "",
          time: 24,
        },
        {
          date: "Jan 6",
          img: run.tribble,
          distance: "",
          time: 45,
        },
      ],
    }),
  }
</script>
