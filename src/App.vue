<template>
  <router-view></router-view>
  <Footer />
</template>
  
<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
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
  padding:0;
  margin:0;
}

.btn {
  display: inline-block;
  color: rgb(111, 111, 111);
  border: 3px solid rgba(25, 110, 247, 0.426);
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-family: inherit;
}

.btn:active {
  transform: scale(0.8);
  border: 3px solid rgba(10, 233, 155, 0.303);
}

.btn-block {
  display: block;
  width: 100%;
}


.container{
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    max-width: 1300px;
    margin-bottom: 5em;
}

@media screen and (min-width: 1100px) {
    .container{
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 60px;
    }
}

@media screen and (max-width: 1100px) {
    .container{
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 60px;
    }
}
@media screen and (max-width: 600px) {
    .container{
        grid-template-columns: 1fr;
        grid-row-gap: 60px;
    }
}
</style>
