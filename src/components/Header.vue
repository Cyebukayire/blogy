<template>
        <!-- <h3>Posts</h3> -->
    <header>
        <nav>
            <a href="#">All</a>
            <a href="#">App development</a>
            <a href="#">Web developent</a>
            <a href="#">DevOps</a>
            <a href="#">Web Designs</a>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display+SC');

    * {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    main {
        min-height: 100vh;
    }

    header {
        background: white;
        box-shadow: 0 0 5px rgba(109, 170, 211, 0.433);
    }
    h3{
        font: normal 3em 'Playfair Display SC', serif;
        text-align:center;
        color:inherit;
    }

    nav {
        max-width: 800px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }

    nav a {
        flex-grow: 1;
        text-align: center;
        padding: 1em;
        position: relative;
    }

    nav a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right:0;
        height: 2px;
        transform: scaleX(0);
        background: #333;
        transition: 0.7s transform cubic-bezier(0.06, 0.9, 0.28, 1);
    }

    nav a:hover::after{
        transform: scaleX(1)
    }

</style>