<template>
    <div class="hero">
      <h1>{{title}}</h1>
      <h3>Read - Unlearn - Learn</h3>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    },
}
</script>
