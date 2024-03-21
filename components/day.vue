<template>
  <li
    class="day"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <div class="graph"></div>
    <div
      ref="marker"
      class="marker"
      :style="{ height: activity.duration * 0.2 + 'vh' }"
    />
    <div ref="date" class="date mono">{{ activity.date }}</div>
  </li>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

  .sans {
    font-size: 8rem;
    background: linear-gradient(
      180deg,
      var(--cloud) 32%,
      rgba(255, 255, 255, 0) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  li.day {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0.3rem;
  }

  .marker {
    --width: 14px;
    position: relative;
    border-radius: 2px;
    width: var(--width);
    background: var(--oil);

    &:before {
      content: "";
      position: absolute;
      top: -6px;
      height: 3px;
      border-radius: 2px;
      width: var(--width);
      background: var(--oil);
    }
  }

  .date {
    position: absolute;
    bottom: -2.4rem;
    width: max-content;
    opacity: 0;
    text-transform: uppercase;
    color: var(--charcoal);
    font-size: 1.4rem;
    /* transform: scale(0.9);
    transition: opacity 200ms ease, transform 300ms ease; */
  }
</style>

<script>
  export default {
    props: {
      activity: Object,
    },
    data: () => ({}),
    methods: {
      markerColor() {
        const marker = this.$refs.marker
        marker.style.background =
          marker.offsetHeight < 30 ? "var(--night)" : marker.style.background
      },

      handleHover(isHovering, inputDate) {
        const marker = this.$refs.marker
        const date = this.$refs.date

        const height = this.activity.duration * 0.2 + "vh"

        marker.style.cssText = isHovering
          ? marker.offsetHeight > 30
            ? `height: 100%; background: var(--rm);`
            : `height: 100%; background: var(--night);`
          : `height: ${height}; background: var(--oil);`

        date.style.cssText = isHovering
          ? marker.offsetHeight > 30
            ? `opacity: 1; transform: scale(1);`
            : date.style.cssText
          : `opacity: 0; transform: scale(.9);`

        if (!isHovering && marker.offsetHeight < 30) {
          marker.style.background = "var(--night)"
        }
      },
    },
    mounted() {
      this.markerColor()
    },
  }
</script>
