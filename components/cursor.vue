<template>
  <div ref="cursor" class="cursor mono" />
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

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
</style>

<script>
  export default {
    data() {
      return {
        months: Array.from({ length: 12 }, (v, i) =>
          new Date(0, i).toLocaleString("en-US", { month: "short" })
        ),
      }
    },
    methods: {
      updateCursorText() {
        const now = new Date()
        const date = now.getDate()
        const month = this.months[now.getMonth()]
        const cursor = this.$refs.cursor
        cursor.innerText = month + " " + date
      },
      moveCursor(e) {
        const cursor = this.$refs.cursor
        cursor.setAttribute(
          "style",
          `transform: translate(${e.pageX - 22}px, ${e.pageY - 28}px)`
        )
      },
    },
    mounted() {
      this.updateCursorText()
      document.addEventListener("mousemove", this.moveCursor)
    },
    beforeDestroy() {
      document.removeEventListener("mousemove", this.moveCursor)
    },
  }
</script>
