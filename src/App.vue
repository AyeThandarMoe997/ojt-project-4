<template>
  <div id="app">
    <nav>
      <router-link to="/firstojt">FirstOjtContent</router-link>
      <router-link :to="{ name: 'secondojt', params: { movies: moviesGet} }"  exact>SecondOjtContent</router-link>
      <router-link to="/thirdojt">ThirdOjtContent</router-link>
      <router-link :to="{ name: 'booklist', params: { novels: novelsGet } }" exact>Book List</router-link>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'


export default {
  name: 'App',
  data() {
    return {
      header: "Welcome From OJT project2",
      moviesList: [],
    }
  },
  computed: {
    ...mapGetters(["movies", "novels"]),
    moviesGet() {
      return this.$store.getters.moviesNames;
    },
    novelsGet() {
      return this.$store.getters.novelsNames;
    },
    moviesDirect() {
      return this.$store.state.movies;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
    margin-bottom: 25px;
}

nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin: 5px 2px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
  font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
  font-weight: 400;
  letter-spacing: .5px;
  font-size: 15px;
  cursor: pointer;
}

nav a:visited, nav a:link {
  color: #607D8B;
}

nav a:hover, 
.router-link-exact-active {
  color: white !important;
  background-color: #607D8B;
}
</style>
