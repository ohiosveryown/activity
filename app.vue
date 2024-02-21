<template>
  <!-- <rm /> -->
  <!-- <dates /> -->

  <ul>
    <li v-for="(activity, x) in activities" :key="x">
      <div class="marker" />
      <div class="debug content">
        <div class="meta">
          <h2>{{ activity.date }}</h2>
          <h3>{{ activity.type }}</h3>
          <h4>{{ activity.distance }}</h4>
          <h4>{{ activity.time }}</h4>
        </div>
        <img :src="`${activity.img}`" />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  ul {
    display: flex;
    align-items: flex-end;
    margin: 0 auto;
    height: 80vh;
    width: 90vw;
  }

  li {
    /* border: 1px solid greenyellow; */
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 0 3px;
    height: 28px;
    height: 100%;
  }

  li:hover {
    .marker {
      height: 70vh;
      background: #75f950;
    }

    .content {
      width: max-content;
      opacity: 1;
    }

    .meta {
      opacity: 1;
    }

    img {
      opacity: 0.5;
    }
  }

  .content {
    border: 1px solid green;
    position: absolute;
    top: 0;
    opacity: 0;
    text-align: center;
  }

  .marker {
    width: 3px;
    height: 50%;
    background: red;
    // transition: 200ms ease all;
  }

  .meta,
  img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: var(--zmin);
    border-radius: 20px;
    width: 50vw;
    opacity: 0;
  }

  .meta {
    top: 0;
    transform: translateY(0%);
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
          time: "45 min",
        },
        {
          date: "Jan 2",
          img: hike.bubble,
          distance: "",
          time: "45 min",
        },
        {
          date: "Jan 3",
          img: run.tribble,
          distance: "",
          time: "45 min",
        },
      ],
    }),
  }
</script>
