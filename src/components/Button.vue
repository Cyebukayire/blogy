<template>
<button>{{ text }}</button>    
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
        }
    }
</script>
