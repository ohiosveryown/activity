<template>
  <img src="/rm/tree.png" alt="" />

  <div ref="cursor" :class="{ active: hover }" class="cursor mono" />
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
  @import "public/assets/style/grid.scss";

  .logo {
    position: fixed;
    left: 40vw;
    top: 40vh;
  }

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 8rem;
    height: 100vh;
    overflow-x: auto;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    position: relative;
    margin-top: 24rem;
    padding: 0rem 4rem;
    height: 50vh;
    cursor: cell;
    /* cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png"),
      auto; */
  }

  .cursor {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    text-transform: uppercase;
    color: var(--charcoal);
    font-size: 1.4rem;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-duration: 800ms;
    will-change: transform, opacity;
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
  import { activities } from "public/activity.js"
  export default {
    data: () => ({
      activities,
      hover: false,
    }),

    methods: {
      handleCursor() {
        // date logic
        const now = new Date()
        const date = now.getDate()
        const months = Array.from({ length: 12 }, (v, i) => {
          return new Date(0, i).toLocaleString("en-US", { month: "short" })
        })

        const month = months[now.getMonth()]
        const cursor = this.$refs.cursor
        cursor.innerText = month + " " + date

        // follow logic
        document.addEventListener("mousemove", (e) => {
          cursor.setAttribute(
            "style",
            `transform: translate(${e.pageX - 22}px, ${e.pageY - 28}px)`
          )
        })
      },
    },

    mounted() {
      this.handleCursor()
    },
  }
</script>
