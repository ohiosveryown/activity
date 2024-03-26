<template>
  <menu class="mono">
    <li>
      <span :class="{ active: showLabel }" class="label">Total activity: </span>
      <button
        @mouseenter="showLabel = true"
        @mouseleave="showLabel = false"
        @click="showMenu = !showMenu"
        class="mono"
      >
        {{ totalHours }} hours and {{ totalMinutes }} minutes
        <span class="icon" v-if="showMenu">
          <svg width="12" height="12" fill="none">
            <path d="M1 6.5h10v1H1v-1Z" />
          </svg>
        </span>
        <span class="icon" v-else>
          <svg width="12" height="12" fill="none">
            <path
              fill-rule="evenodd"
              d="M6.5 6.5v-4h-1v4H1v1h4.5v4h1v-4H11v-1H6.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
    </li>
    <ul :class="{ active: showMenu }" class="children">
      <li><span ref="miles" /><span>🏃</span></li>
      <li><span ref="bball" /><span>🏀</span></li>
      <li><span ref="rest" /><span>🔋</span></li>
    </ul>
  </menu>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

  menu,
  button {
    font-size: 1.4rem;
    color: var(--charcoal);
    text-transform: uppercase;
  }

  button:hover {
    color: var(--volt);
  }

  menu {
    position: absolute;
    top: 0;
    right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-justify: right;
    gap: 8px;
  }

  .children {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-justify: right;
    gap: 4px;
    opacity: 0;
    pointer-events: none;
  }

  .label {
    opacity: 0;
  }

  .active {
    opacity: 0.72;
  }

  span {
    margin-left: 0.6rem;
  }

  .icon {
    font-size: 2rem;
    margin-right: 0.5rem;
    margin-left: 0rem;
  }

  svg path {
    fill: var(--charcoal);
  }
</style>

<script>
  import { activities } from "assets/logic/activity.js"
  export default {
    data: () => ({
      showMenu: false,
      showLabel: false,
      activities,
      totalHours: 0,
      totalMinutes: 0,
      totalMiles: 0,
      totalCalories: 0,
      totalBballDays: 0,
    }),

    methods: {
      getTotals() {
        let totalPrimary = activities.reduce((total, activity) => {
          if (typeof activity.primary === "number") {
            return total + activity.primary
          } else {
            return total
          }
        }, 0)

        this.totalHours = Math.floor(totalPrimary / 60)
        this.totalMinutes = totalPrimary % 60

        let totalBballDays = activities.filter((activity) =>
          activity.secondary.endsWith("c")
        ).length

        let totalMiles = 0
        let totalCalories = 0
        let totalRestDays = 0

        activities.forEach((activity) => {
          if (typeof activity.secondary === "string") {
            if (activity.secondary.endsWith("mi")) {
              totalMiles += parseFloat(activity.secondary)
            } else if (activity.secondary.endsWith("c")) {
              totalCalories += parseFloat(activity.secondary)
            } else if (activity.secondary === "Rest") {
              totalRestDays++
            }
          }
        })

        this.$refs.miles.innerText = `${totalMiles} mi`
        this.$refs.bball.innerText = `${totalBballDays} days`
        this.$refs.rest.innerText = `${totalRestDays} days`
      },
    },

    mounted() {
      this.getTotals()
    },
  }
</script>
