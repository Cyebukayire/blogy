<template>
        <!-- <h3>Posts</h3> -->
    <header>
        <nav>
            <a @click="onClick()" href="#">All</a>
            <a @click="onClick()" href="#">App development</a>
            <a @click="onClick()" href="#">Web developent</a>
            <a @click="onClick()" href="#">DevOps</a>
            <a @click="onClick()" href="#">Web Designs</a>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',

        methods: {
            onClick() {
                console.log("Navbar Link Clicked")
            },
        }
    }
    
</script>