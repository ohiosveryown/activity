<template>
  <menu class="mono">
    <li>{{ totalHours }} hours and {{ totalMinutes }} minutes</li>
    <li ref="miles" />
    <li ref="bball" />
    <li ref="rest" />
  </menu>
</template>

<style lang="scss" scoped>
  @import "/assets/style/grid.scss";

  menu {
    color: var(--charcoal);
    text-transform: uppercase;
  }
</style>

<script>
  import { activities } from "assets/logic/activity.js"
  export default {
    data: () => ({
      activities,
      totalHours: 0,
      totalMinutes: 0,
      totalMiles: 0,
      totalCalories: 0,
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

        // get total miles, calories, and rest days
        let totalMiles = 0
        let totalCalories = 0
        let totalRestDays = 0
        let totalBballDays = 0

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

        this.$refs.miles.innerText = `${totalMiles}mi 🏃`
        this.$refs.bball.innerText = `${totalCalories}c 🏀`
        this.$refs.rest.innerText = `${totalRestDays} rest days`

        console.log(`Total miles: ${totalMiles}`)
        console.log(`Total calories: ${totalCalories}`)
        console.log(`Total rest days: ${totalRestDays}`)
      },
    },

    mounted() {
      this.getTotals()
    },
  }
</script>
