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
    <div ref="item" class="activity-wrapper">
      <div
        class="activity"
        :style="{ height: activity.duration * 0.2 + 'vh' }"
      />
    </div>

    <!-- fig -->
    <img
      v-if="activity.img"
      ref="img"
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
    position: relative;
    height: 100%;
  }

  .activity-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    /* transition: 300ms ease all; */
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

      playing() {
        const item = this.$refs.item
        const image = this.$refs.img

        this.$refs.item.addEventListener("mouseenter", () => {
          const enter = gsap.timeline({ paused: true })
          enter.set(image, {
            opacity: 0,
            duration: 0.1,
            scaleY: 0.5,
            y: "-3rem",
            transformOrigin: "top",
            ease: "elastic.out(1, 0.3)",
          })
          enter.to(image, {
            opacity: 1,
            duration: 0.3,
            scaleY: 1,
            y: "0rem",
            transformOrigin: "top",
            ease: "elastic.out(1, 0.3)",
          })
          enter.restart()
        })

        this.$refs.item.addEventListener("mouseleave", () => {
          const exit = gsap.timeline({ paused: true })
          exit.set(image, {
            opacity: 0,
            duration: 0.1,
            scaleY: 0.5,
            y: "-3rem",
            transformOrigin: "top",
            ease: "elastic.out(1, 0.3)",
          })
          exit.to(image, {
            opacity: 0,
            duration: 0.1,
            scaleY: 0.5,
            y: "0rem",
            transformOrigin: "top",
            ease: "elastic.out(1, 0.3)",
          })
          exit.restart()
        })

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
      this.playing()
    },
  }
</script>
