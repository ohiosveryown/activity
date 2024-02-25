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

        li.onmouseover = () => {
          marker.style.height = "100%"
        }

        li.onmouseleave = () => {
          marker.style.height = `${this.activity.duration * 0.2 + "vh"}`
        }
      },
    },
    mounted() {
      this.enter()
    },
  }
</script>
