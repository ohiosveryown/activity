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
          distance: "2.00 mi",
          time: "9:26 / mi",
          img: "/img/map@2x.png",
        },
        {
          date: "Jan 28",
          type: basketball.icon,
          distance: "",
          time: "45 min",
          img: "/img/gym@2x.png",
        },
        {
          date: "Feb 1",
          type: content.hike,
          distance: "",
          time: "45 min",
          img: basketball.bubble,
        },
      ],
    }),
  }
</script>
