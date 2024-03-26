<template>
  <li
    class="day"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <div ref="graph" class="graph">
      <div v-if="activity.icon" class="icon">
        <img :src="activity.icon" />
      </div>

      <div ref="activity" class="activity">
        <div v-if="activity.primary" ref="primary" class="primary sans">
          {{ activity.primary }}
          <span v-if="activity.unit" class="unit">{{ activity.unit }}</span>
        </div>
        <div v-if="activity.secondary" class="secondary mono">
          {{ activity.secondary }}
        </div>
      </div>

      <div v-if="activity.background" class="overlay" />

      <NuxtImg
        provider="imagekit"
        v-if="activity.background"
        class="background"
        :src="activity.background"
        quality="80"
      />
    </div>

    <div
      ref="marker"
      class="marker"
      :style="{ height: activity.primary * 0.3 + 'vh' }"
    >
      <div ref="markerLead" class="marker-lead" />
    </div>
    <div ref="date" class="date mono">{{ activity.date }}</div>
  </li>

  <squircle />
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

  .day {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding: 0 0.3rem;
  }

  .marker {
    position: relative;
    --width: 12px;
    position: relative;
    border-radius: 2px;
    width: var(--width);
    min-height: 2.4rem;
    background: var(--oil);
  }

  .marker-lead {
    position: absolute;
    top: -6px;
    height: 3px;
    border-radius: 2px;
    width: 100%;
    background: var(--oil);
  }

  .activity {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
  }

  .date {
    position: absolute;
    bottom: -2.4rem;
    width: max-content;
    opacity: 0;
    text-transform: uppercase;
    color: var(--charcoal);
    font-size: 1.4rem;
    transform: scale(0.6);
    transition: opacity 200ms ease, transform 300ms ease;
  }

  .graph {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -14.5rem;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    transform-origin: bottom;
    width: 15rem;
    height: 15rem;
    padding: 1rem 1rem 1.4rem;
    pointer-events: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 300ms ease 50ms;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    width: 32px;
    height: 32px;
    padding: 4px;
    background: linear-gradient(160deg, #52534e 13%, #1f2b03 96%);
    box-shadow: 0px -1px 2px -1px rgba(60, 82, 8, 0.9) inset,
      0px 1.4px 2px -1px rgba(251, 255, 243, 1) inset,
      0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  }

  .primary {
    font-size: 3.6rem;
    line-height: 1.1;
    letter-spacing: 0.75px;
    background: linear-gradient(
      180deg,
      #fef8f8 49.5%,
      rgba(254, 248, 248, 0.72) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    span {
      font-size: 2rem;
      letter-spacing: 0.5px;
    }
  }

  .secondary {
    opacity: 0.72;
  }

  .background {
    position: absolute;
    inset: 0;
    z-index: var(--zmin);
    pointer-events: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: var(--z0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.72) 100%
    );
  }

  .hide {
    position: absolute;
    z-index: var(--zmin);
    pointer-events: none;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
</style>

<script>
  export default {
    props: {
      activity: Object,
    },
    methods: {
      markerColor() {
        const marker = this.$refs.marker
        const markerLead = this.$refs.markerLead
        marker.style.background =
          marker.offsetHeight < 40 ? "var(--night)" : marker.style.background
        markerLead.style.opacity = marker.offsetHeight < 40 ? 0 : 1
      },

      handleHover(isHovering, inputDate) {
        const marker = this.$refs.marker
        const date = this.$refs.date
        const height = this.activity.primary * 0.3 + "vh"
        const graph = this.$refs.graph
        const primary = this.$refs.primary
        const activity = this.$refs.activity

        graph.style.cssText = isHovering
          ? `opacity: 1; transform: translateX(-50%) scale(1);`
          : `opacity: 0; transform: translateX(-50%) scale(0.8);`

        marker.style.cssText = isHovering
          ? marker.offsetHeight > 40
            ? `height: 100%; background: var(--gradientVolt); transition: background 300ms ease;`
            : `height: 100%; background: var(--night);`
          : `height: ${height}; background: var(--oil);`

        date.style.cssText = isHovering
          ? marker.offsetHeight > 40
            ? `opacity: 1; transform: scale(1);`
            : date.style.cssText
          : `opacity: 0; transform: scale(.6);`

        if (!isHovering && marker.offsetHeight < 40) {
          marker.style.background = "var(--night)"
        }
      },
    },
    mounted() {
      this.markerColor()
    },
  }
</script>
