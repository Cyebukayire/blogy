<template>
    <div class="hero">
      <h1>Welcome To Blogy</h1>
      <h3>Read - Unlearn - Learn</h3>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Raleway:300&display=swap');

    * {
    margin: 0;
    padding: 0;
    }

    .hero {
    height: 100vh;
    width: cover;
    background-image: linear-gradient(
        to right bottom,
        rgba(10, 233, 155, 0.303),
        rgba(25, 110, 247, 0.426)
    ),
    url('../assets/home-bg.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }

    h1, h3 {
    font-family: 'Raleway', sans-serif;
    line-height: 2.5rem;
    color: white;
}

</style>