<template>
  <li v-for="(activity, x) in activities" :key="x">
    <div class="data">
      <time>{{ activity.date }}</time>
      <div class="category" v-if="activity.category">
        {{ activity.category }}
      </div>
      <div class="distance" v-if="activity.distance">
        {{ activity.distance }}
      </div>
    </div>

    <div class="activity-wrapper">
      <div class="activity" :style="{ height: activity.duration * 3 + 'px' }" />
    </div>

    <img v-if="activity.img" :src="`${activity.img}`" />
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

  .data {
    display: flex;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
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
          } else {
          }
        })
      },
    },

    mounted() {
      this.markerColor()
    },
  }
</script>
