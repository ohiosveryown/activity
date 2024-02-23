<template>
  <!-- <rm /> -->
  <!-- <dates /> -->

  <main>
    <ul>
      <li v-for="(activity, x) in activities" :key="x">
        <div class="data">
          <time>{{ activity.date }}</time>
          <div class="category">{{ activity.category }}</div>
          <div class="distance">{{ activity.distance }}</div>
          <!-- <div class="duration">{{ activity.duration }} min</div> -->
        </div>

        <div class="activity">
          <div
            class="progress"
            :style="{ height: activity.duration * 3 + 'px' }"
          />
        </div>

        <img :src="`${activity.img}`" />
      </li>
    </ul>
  </main>
  <bg />
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  .progress {
    width: 4px;
    /* height: 100px; */
    background: var(--oil);
  }

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
    column-gap: 4px;
    height: 50vh;
    /* overflow: scroll; */
  }

  li {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  .data {
    display: flex;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
  }

  .activity {
    /* border: 1px solid pink; */
  }

  img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: var(--z0);
    border-radius: 20px;
    width: 500px;
    height: 200px;
    object-fit: cover;
  }
</style>

<script>
  import { basketball, run, hike } from "public/content.js"
  export default {
    data: () => ({
      activities: [
        {
          date: "Jan 1",
          category: basketball.icon,
          img: basketball.piedmont,
          distance: "",
          duration: 45,
        },
        {
          date: "Jan 2",
          category: hike.icon,
          img: hike.bubble,
          distance: 2.21,
          duration: 120,
        },
        {
          date: "Jan 3",
          category: run.icon,
          img: run.tribble,
          distance: 3.12,
          duration: 35,
        },
        {
          date: "Jan 4",
          category: basketball.icon,
          img: basketball.piedmont,
          distance: "",
          duration: 60,
        },
        {
          date: "Jan 5",
          category: hike.icon,
          img: hike.bubble,
          distance: 6.4,
          duration: 90,
        },
        {
          date: "Jan 6",
          category: run.icon,
          img: run.tribble,
          distance: 1.2,
          duration: 33,
        },
        {
          date: "Jan 7",
          duration: 10,
        },
      ],
    }),
  }
</script>
