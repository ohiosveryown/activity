<template>
  <li>
    <!-- content -->
    <div class="data" :class="{ active: hover }">
      <time>{{ activity.date }}</time>
      <div class="category" v-if="activity.category">
        {{ activity.category }}
      </div>
      <div class="distance" v-if="activity.distance">
        {{ activity.distance }} mi
      </div>
    </div>

    <!-- marker -->
    <div class="activity-wrapper">
      <div
        class="activity"
        :style="{ height: activity.duration * 0.2 + 'vh' }"
        v-on:mouseenter="imgEnter"
      />
    </div>

    <!-- fig -->
    <img
      v-if="activity.img"
      ref="img"
      :src="`${activity.img}`"
      :alt="`${activity.category}`"
      class="imgg"
    />
  </li>
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  li {
    display: flex;
    align-items: flex-end;
    position: relative;
    height: 100%;
  }

  .activity {
    width: 4px;
    border-radius: 88px;
    background: var(--night);
  }

  /* .data {
    display: flex;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    opacity: 0;
  } */

  .data {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: max-content;
    opacity: 0;
  }

  img {
    position: fixed;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: var(--z0);
    /* border-radius: 20px; */
    min-width: 52rem;
    width: 40vw;
    max-height: 25rem;
    height: 26vh;
    object-fit: cover;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8));
    opacity: 0;
    transition: 300ms ease all;
  }

  .active {
    opacity: 1;
  }
</style>

<script>
  import { gsap } from "gsap"
  export default {
    props: {
      activity: Object,
    },
    data: () => ({
      hover: false,
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

      imgEnter() {
        this.play()
      },

      play() {
        const image = this.$refs.img

        const enter = gsap.timeline({ paused: true })
        enter.to(".imgg", { opacity: 1 })

        console.log("image ⬅️" + image)
        // gsap.timeline(image, {
        //   paused: true,
        //   opacity: 1,
        //   duration: 1,
        //   scaleY: 1,
        // })
      },

      //       imgEnter() {
      //         const img = this.$refs.img
      //         console.log("img ⬅️")
      //         gsap.to(img, {
      //           paused: true,
      //           opacity: 1,
      //           duration: 1,
      //           scaleY: 1,
      //         })
      //       },
      //
      //       imgExit() {
      //         const img = this.$refs.img
      //         console.log("img ➡️")
      //         gsap.to(img, {
      //           paused: true,
      //           opacity: 0,
      //           duration: 0.2,
      //           scaleY: 0.2,
      //         })
      //       },

      // test() {
      //   return this.hover ? this.imgEnter().play() : this.imgExit().play()
      // },
    },
    mounted() {
      // this.test()
      this.markerColor()
    },
  }
</script>
