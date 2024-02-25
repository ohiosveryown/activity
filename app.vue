<template>
  <div class="cursor"></div>
  <main>
    <ul class="debug">
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
    /* padding: 0rem 4rem; */
    padding: 0;
    height: 50vh;
    /* overflow: scroll; */
  }

  .cursor {
    position: absolute;
    top: -28px;
    left: -22px;
    text-align: center;
    /* transition: opacity 300ms ease; */
    will-change: transform, opacity;
    /* opacity: 0;
    transform: scale(0); */
  }
</style>

<script>
  import { gsap } from "gsap"
  import { activities } from "public/activity.js"
  export default {
    data: () => ({
      activities,
    }),

    mounted() {
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

      let xTo = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3" }),
        yTo = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3" })

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX)
        yTo(e.clientY)
      })
    },
  }
</script>
