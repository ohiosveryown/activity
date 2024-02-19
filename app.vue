<template>
  <div>
    <rm />

    <ul>
      <li v-for="(artist, x) in artists" :key="x">
        <h2>{{ artist.name }}</h2>
        <h3>{{ artist.genre }}</h3>
        <h4>{{ artist.country }}</h4>
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
    // name: "Test",
    // data() {
    //   return {
    //     artists: [
    //       { name: "Davido", genre: "afrobeats", country: "Nigeria" },
    //       { name: "Burna Boy", genre: "afrobeats", country: "Nigeria" },
    //       { name: "AKA", genre: "hiphop", country: "South-Africa" },
    //       { name: "Sarkodie", genre: "hiphop", country: "Ghana" },
    //       { name: "Stormzy", genre: "hiphop", country: "United Kingdom" },
    //       { name: "Lil Nas", genre: "Country", country: "United States" },
    //       { name: "Nasty C", genre: "hiphop", country: "South-Africa" },
    //       { name: "Shatta-walle", genre: "Reagae", country: "Ghana" },
    //       { name: "Khalid", genre: "pop", country: "United States" },
    //       { name: "ed-Sheeran", genre: "pop", country: "United Kingdom" },
    //     ],
    //   }
    // },

    data: () => ({
      artists: [
        { name: "Davido", genre: "afrobeats", country: "Nigeria" },
        { name: "Burna Boy", genre: "afrobeats", country: "Nigeria" },
        { name: "AKA", genre: "hiphop", country: "South-Africa" },
        { name: "Sarkodie", genre: "hiphop", country: "Ghana" },
        { name: "Stormzy", genre: "hiphop", country: "United Kingdom" },
        { name: "Lil Nas", genre: "Country", country: "United States" },
        { name: "Nasty C", genre: "hiphop", country: "South-Africa" },
        { name: "Shatta-walle", genre: "Reagae", country: "Ghana" },
        { name: "Khalid", genre: "pop", country: "United States" },
        { name: "ed-Sheeran", genre: "pop", country: "United Kingdom" },
      ],
    }),
  }

  // export default {
  //   data() {
  //     return [
  //       { name: "Tobi Lou", genre: "Rap" },
  //       { name: "Orion Sun", genre: "R&B" },
  //     ]
  //   },
  //   // data: () => ({
  //   //   articles: null,
  //   //   hover: false,
  //   // }),
  // }
</script>
