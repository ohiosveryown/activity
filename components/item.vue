<template>
  <li v-for="(activity, x) in activities" :key="x">
    <!-- content -->
    <div class="data">
      <time>{{ activity.date }}</time>
      <div class="category" v-if="activity.category">
        {{ activity.category }}
      </div>
      <div class="distance" v-if="activity.distance">
        {{ activity.distance }}
      </div>
    </div>

    <!-- marker -->
    <div class="activity-wrapper">
      <div
        class="activity"
        :style="{ height: activity.duration * 0.2 + 'vh' }"
      />
    </div>

    <!-- fig -->
    <img
      v-if="activity.img"
      :src="`${activity.img}`"
      :alt="`${activity.category}`"
    />
  </li>
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  li {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  .activity {
    width: 4px;
    border-radius: 88px;
    background: var(--night);
  }

  .activity-wrapper:hover ~ img {
    opacity: 1;
    /* transition: 300ms ease 300ms all; */
  }

  .data {
    display: flex;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    opacity: 0;
  }

  img {
    position: fixed;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: var(--z0);
    border-radius: 20px;
    min-width: 52rem;
    width: 40vw;
    max-height: 25rem;
    height: 26vh;
    object-fit: cover;
    opacity: 0;
    transition: 300ms ease all;
  }
</style>

<script>
  import { activities } from "public/activity.js"
  export default {
    data: () => ({
      activities: activities,
    }),
    methods: {
      markerColor() {
        const activity = document.querySelectorAll(".activity")

        activity.forEach((entry) => {
          if (entry.offsetHeight > 30) {
            entry.style.background = "var(--gradientCharcoal)"
          }
        })
      },
    },
    mounted() {
      this.markerColor()

      const data = document.querySelector(".data")
      const activities = document.querySelectorAll(".activity")

      activities.forEach((entry) => {
        entry.addEventListener("mouseenter", () => {
          console.log("enterrrrrr")
          data.style.opacity = 1
        })
      })
    },
  }
</script>
