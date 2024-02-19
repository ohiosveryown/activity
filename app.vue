<template>
  <div>
    <!-- <rm /> -->

    <ul>
      <li v-for="(activity, x) in activities" :key="x">
        <h2>{{ activity.date }}</h2>
        <h3>{{ activity.type }}</h3>
        <h4>{{ activity.distance }}</h4>
        <h4>{{ activity.time }}</h4>
        <img :src="`${activity.img}`" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "public/style/grid.scss";

  li {
    margin-bottom: 12px;
    border-bottom: 1px solid grey;
  }
</style>

<script>
  export default {
    data: () => ({
      activities: [
        // { name: "Davido", genre: "afrobeats", country: "Nigeria" },
        // { name: "Burna Boy", genre: "afrobeats", country: "Nigeria" },
        // { name: "AKA", genre: "hiphop", country: "South-Africa" },
        // { name: "Sarkodie", genre: "hiphop", country: "Ghana" },
        // { name: "Stormzy", genre: "hiphop", country: "United Kingdom" },
        // { name: "Lil Nas", genre: "Country", country: "United States" },
        // { name: "Nasty C", genre: "hiphop", country: "South-Africa" },
        // { name: "Shatta-walle", genre: "Reagae", country: "Ghana" },
        // { name: "Khalid", genre: "pop", country: "United States" },
        // { name: "ed-Sheeran", genre: "pop", country: "United Kingdom" },

        {
          date: "Jan 13",
          type: "🏃🏼‍♂️",
          distance: "2.00 mi",
          time: "9:26 / mi",
          img: "/img/map@2x.png",
        },
        {
          date: "Jan 28",
          type: "🏀",
          distance: "",
          time: "45 min",
          img: "/img/gym@2x.png",
        },
      ],
    }),
  }
</script>
