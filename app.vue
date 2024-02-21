<template>
  <div>
    <!-- <rm /> -->

    <h1>{{ myVariable }}</h1>

    <ul>
      <li v-for="(activity, x) in activities" :key="x">
        <h2>{{ activity.date }}</h2>
        <h3>{{ activity.type }}</h3>
        <h4>{{ activity.distance }}</h4>
        <h4>{{ activity.time }}</h4>
        <img :src="`${activity.img}`" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  li {
    margin-bottom: 12px;
    border-bottom: 1px solid grey;
  }

  img {
    max-width: 400px;
  }
</style>

<script>
  import { content, basketball } from "public/content.js"
  export default {
    data: () => ({
      activities: [
        {
          date: "Jan 13",
          type: content.run,
          img: basketball.bubble,
          distance: "",
          time: "45 min",
        },
        {
          date: "Feb 1",
          type: content.hike,
          img: basketball.bubble,
          distance: "",
          time: "45 min",
        },
      ],
    }),
  }
</script>
