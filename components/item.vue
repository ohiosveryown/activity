<template>
  <li
    ref="li"
    class=""
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <img
      v-if="activity.img"
      ref="background"
      class="background"
      :src="activity.img"
    />

    <header class="mono" ref="header">
      <div class="category" v-if="activity.category">
        <img :src="activity.category" />
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
    padding: 0 0.2rem;
  }

  .background {
    position: fixed;
    z-index: var(--z0);
    top: 3.2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 5px;
    min-width: 52rem;
    width: 42vw;
    height: 28dvh;
    max-height: 25rem;
    background: none;
    overflow: hidden;
    pointer-events: none;
    object-fit: cover;
    mask-image: linear-gradient(to top, transparent 5%, white 100%);
    opacity: 0;
    transform: scale(0.9);
    transform-origin: top;
    transition: opacity 200ms ease, transform 300ms ease;
  }

  header {
    position: absolute;
    top: -2.8rem;
    opacity: 0;
    transform: scale(0.4);
    transition: opacity 300ms ease, transform 300ms ease;
  }

  .marker {
    border-radius: 5px;
    width: 4px;
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

      handleHover(isHovering, inputDate) {
        const marker = this.$refs.marker
        const header = this.$refs.header
        const footer = this.$refs.footer
        const background = this.$refs.background

        const height = this.activity.duration * 0.2 + "vh"

        //         marker.style.cssText = isHovering
        //           ? `height: 100%; background: var(--gradientVolt);`
        //           : marker.offsetHeight < 30
        //           ? `height: ${height}; background: var(--night);`
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
          background.style.cssText = `opacity: 1; transform: scale(1);`
        } else {
          marker.style.cssText = `height: ${height}; background: var(--gradientCharcoal);`
          header.style.cssText = `opacity: 0; transform: scale(.4);`
          footer.style.cssText = `opacity: 0; transform: scale(.9);`
          background.style.cssText = `opacity: 0; transform: scale(.9);`
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
