<template>
  <div class="first-content">
    <p>{{ $store.state.stateHeader }}</p>
    <p> {{  }} </p>
    <div class="movie-list">
      <ul style="width: 500px;">
        <li v-for="(movie, index) in movies" :key="index" :movie="movie"> {{ movie.movie_name }} </li>
      </ul>
    </div>
  </div>
</template> 

<script>

export default {
  name: 'SecondOjtContent',
  props: ['movies'],
  data() {
    return {
    }
  }
}
</script>

<style>
.first-content {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    text-align: center;
    background-color: #C0C0C0;
    color: #fff;
    margin: 0px 50px;
    text-align: center;
    padding: 150px 0px;
}
.movie-list {
  width: 500px;
  text-align: left;
  padding-left: 550px;
}
 
</style>