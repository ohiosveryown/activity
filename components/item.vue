<template>
  <li
    ref="li"
    class=""
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <div ref="background" class="meta">
      <div class="meta-wrapper">
        <!-- <img v-if="activity.img" class="background" :src="activity.img" /> -->

        <NuxtImg
          v-if="activity.img"
          class="background"
          :src="activity.img"
          quality="80"
        />

        <ul class="meta-info">
          <li class="sans" v-if="activity.distance">{{ activity.distance }}</li>
        </ul>
      </div>
    </div>

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

  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0.2rem;
  }

  .meta {
    position: fixed;
    z-index: var(--z0);
    top: 3.2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .meta-wrapper {
    position: relative;
  }

  .meta-info {
    position: absolute;
    bottom: -20rem;
    left: 0;
    right: 0;
  }

  .background {
    /* position: fixed;
    z-index: var(--z0);
    top: 3.2rem;
    left: 0;
    right: 0;
    margin: 0 auto; */

    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    /* border-radius: 5px; */
    min-width: 52rem;
    width: 42vw;
    height: 24dvh;
    max-height: 25rem;
    background: none;
    overflow: hidden;
    pointer-events: none;
    object-fit: cover;
    mask-image: linear-gradient(to top, transparent 24%, white 100%);
    /* opacity: 0; */
    transform: scale(0.9);
    transform-origin: top;
  }

  header {
    position: absolute;
    top: -2.8rem;
    opacity: 0;
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

        if (isHovering) {
          marker.style.cssText = `height: 100%; background: var(--gradientVolt);`
          header.style.cssText = `opacity: 1; transform: scale(1);`
          footer.style.cssText = `opacity: 1; transform: scale(1);`
          background.style.cssText = `opacity: 1; transform: scale(1); transition: all 800ms ease`
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
