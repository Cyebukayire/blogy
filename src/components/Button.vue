<template>
<button>Read more</button>    
<button>{{ }}</button>    
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
        },
    }
</script>

<style>
    button {
        background-color:aqua;
    }
</style>