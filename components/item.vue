<template>
  <li ref="li" class="">
    <header>
      <div class="category" v-if="activity.category">
        {{ activity.category }}
      </div>
    </header>

    <div
      ref="marker"
      class="marker"
      :style="{ height: activity.duration * 0.2 + 'vh' }"
    />

    <footer>
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
  }

  .marker {
    width: 3px;
    background: var(--gradientCharcoal);
  }

  footer {
    position: absolute;
    bottom: -2.4rem;
    width: max-content;
  }
</style>

<script>
  import { gsap } from "gsap"
  export default {
    props: {
      activity: Object,
    },
    data: () => ({}),
    methods: {
      enter() {
        const li = this.$refs.li
        const marker = this.$refs.marker
        const height = this.activity.duration * 0.2 + "vh"

        li.onmouseover = () => {
          marker.style.cssText = `height: 100%; background: var(--gradientVolt);`
        }

        li.onmouseleave = () => {
          marker.style.cssText = `height: ${height}; background: var(--gradientCharcoal);`
        }
      },
    },
    mounted() {
      this.enter()
    },
  }
</script>
