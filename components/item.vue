<template>
  <li
    ref="li"
    class=""
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <header class="mono" ref="header">
      <div class="category" v-if="activity.category">
        {{ activity.category }}
      </div>
    </header>

    <div
      ref="marker"
      class="marker"
      :style="{ height: activity.duration * 0.2 + 'vh' }"
    />

    <footer class="mono" ref="footer">
      {{ activity.date }}
    </footer>
  </li>
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0.4rem;
  }

  header {
    position: absolute;
    top: -2.8rem;
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 200ms ease, transform 300ms ease;
  }

  .marker {
    border-radius: 5px;
    width: 5px;
    background: var(--gradientCharcoal);
  }

  footer {
    position: absolute;
    bottom: -2.4rem;
    width: max-content;
    opacity: 0;
    text-transform: uppercase;
    color: var(--charcoal);
    font-size: 1.4rem;
    transform: scale(0.9);
    transition: opacity 200ms ease, transform 300ms ease;
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
        if (marker.offsetHeight < 30) {
          marker.style.background = "var(--night)"
        }
      },

      handleHover(isHovering) {
        const marker = this.$refs.marker
        const header = this.$refs.header
        const footer = this.$refs.footer
        const height = this.activity.duration * 0.2 + "vh"
        //         marker.style.cssText = isHovering
        //           ? `height: 100%; background: var(--gradientVolt);`
        //           : `height: ${height}; background: var(--gradientCharcoal);`
        //
        //         footer.style.cssText = isHovering
        //           ? `opacity: 1; transform: scale(1);`
        //           : `opacity: 0; transform: scale(.9);`
        //
        //         header.style.cssText = isHovering
        //           ? `opacity: 1; transform: scale(1);`
        //           : `opacity: 0; transform: scale(.9);`

        if (isHovering) {
          marker.style.cssText = `height: 100%; background: var(--gradientVolt);`
          header.style.cssText = `opacity: 1; transform: scale(1);`
          footer.style.cssText = `opacity: 1; transform: scale(1);`
        } else {
          marker.style.cssText = `height: ${height}; background: var(--gradientCharcoal);`
          header.style.cssText = `opacity: 0; transform: scale(.9);`
          footer.style.cssText = `opacity: 0; transform: scale(.9);`
          if (marker.offsetHeight < 30) {
            marker.style.background = "var(--night)"
          }
        }
      },
    },
    mounted() {
      this.markerColor()
    },
  }
</script>
