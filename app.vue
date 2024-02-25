<template>
  <div ref="cursor" :class="{ active: hover }" class="cursor" />
  <main>
    <ul
      ref="ul"
      class=""
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <item v-for="activity in activities" :activity="activity" />
    </ul>
  </main>
  <bg />
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
    /* column-gap: 6px; */
    position: relative;
    margin-top: 24rem;
    padding-top: 2.4rem;
    /* padding: 0rem 4rem; */
    padding: 0;
    height: 50vh;
    /* overflow: scroll; */
  }

  .cursor {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    /* opacity: 0; */
    will-change: transform, opacity;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-duration: 800ms;
    /* animation: enter 300ms ease forwards 500ms; */
  }

  @keyframes enter {
    from {
      opcity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .active {
    opacity: 0;
  }
</style>

<script>
  import { gsap } from "gsap"
  import { activities } from "public/activity.js"
  export default {
    data: () => ({
      activities,
      hover: false,
    }),

    methods: {
      //       handleCursor() {
      //         const ul = this.$refs.ul
      //         const cursor = this.$refs.cursor
      //
      //         hiding = () => {
      //           cursor.style = "opacity: 0"
      //           console.log("cursor should be 0")
      //         }
      //
      //         showing = () => {
      //           cursor.style = "opacity: 1"
      //           console.log("cursor should be 1")
      //         }
      //       },
    },

    mounted() {
      // this.handleCursor()
      const now = new Date()
      const date = now.getDate()
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]
      const month = months[now.getMonth()]

      const cursor = document.querySelector(".cursor")
      cursor.innerText = month + " " + date

      document.addEventListener("mousemove", (e) => {
        cursor.setAttribute(
          "style",
          `transform: translate(${e.pageX - 22}px, ${e.pageY - 28}px)`
        )
      })
    },
  }
</script>
