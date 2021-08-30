<template>
    <div class="container">

        <div class="blog-post">
            <img src="../assets/code.jpeg" alt="Man">
            <p class="category">
                New
            </p>
            <div class="text-content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <h2 class="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem corrupti quod distinctio eius hic!</h2>
                <!-- <p>#Javascript</p> -->
                <Button text="Readmore" />
                <div class="tags">
                    <a href="#">#webdesign</a>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="../assets/code1.jpeg" alt="Man">
            <div class="text-content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <h2 class="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem corrupti quod distinctio eius hic!</h2>
                <!-- <p>#Javascript</p> -->
                <div class="tags">
                    <a href="#">#webdevelopment</a>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="../assets/code.jpeg" alt="Man">
            <p class="category">
                New
            </p>
            <div class="text-content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <h2 class="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem corrupti quod distinctio eius hic!</h2>
                <!-- <p>#Javascript</p> -->
                <div class="tags">
                    <a href="#">#webdevelopment</a>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="../assets/code2.jpeg" alt="Man">
            <p class="category">
                New
            </p>
            <div class="text-content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <h2 class="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem corrupti quod distinctio eius hic!</h2>
                <!-- <p>#Javascript</p> -->
                <div class="tags">
                    <a href="#">#webdesign</a>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="../assets/code.jpeg" alt="Man">
            <p class="category">
                New
            </p>
            <div class="text-content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <h2 class="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem corrupti quod distinctio eius hic!</h2>
                <!-- <p>#Javascript</p> -->
                <div class="tags">
                    <a href="#">#webdevelopment</a>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="../assets/code3.jpeg" alt="Man">
            <div class="text-content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <h2 class="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem corrupti quod distinctio eius hic!</h2>
                <!-- <p>#Javascript</p> -->
                <div class="tags">
                    <a href="#">#webdevelopment</a>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="../assets/code4.jpeg" alt="Man">
            <div class="text-content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <h2 class="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem corrupti quod distinctio eius hic!</h2>
                <!-- <p>#Javascript</p> -->
                <div class="tags">
                    <a href="#">#webdevelopment</a>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="../assets/code3.jpeg" alt="Man">
            <p class="category">
                New
            </p>
            <div class="text-content">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <h2 class="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem corrupti quod distinctio eius hic!</h2>
                <!-- <p>#Javascript</p> -->
                <div class="tags">
                    <a href="#">#webdesign</a>
                </div>
            </div>
        </div>

        

        

    </div>
</template>

<script>
import Button from './Button.vue'

    export default{
        name: 'Home',
        components: {
            Button,
        }
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin-top: 1em;
        box-sizing: border-box;
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
    .blog-post{
        position: relative;
        margin-bottom: 2em;
    }
    .blog-post img{
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 10px;
    }
    .blog-post .category{
        position: absolute;
        top: 20px;
        left: 20px;
        padding: 10px 15px;
    font-size: 14px;    text-decoration: none;
        background-color: rgba(10, 233, 155, 0.508);
        color: #fff;
        border-radius: 5px;
        box-shadow: 1px 1px 8px rgba(0,0,0,0.1);
        text-transform: uppercase;
    }
    .text-content{
        position: absolute;
        bottom: -30px;
        padding: 20px;
        background-color: #fff;
        width: calc(100% - 20px);
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        box-shadow: 1px 1px 8px rgba(0,0,0,0.08);
        padding-top: 1px;
        box-shadow:20px 20px 50px 15px rgba(102, 154, 202, 0.576);  

    }
    .text-content h2{
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 30px;
    }
    .text-content h1{
        color:rgb(29, 28, 28);
        font-size: 17px;
        font-weight: 700;
        /* margin-bottom: 2px;         */
    }
    .text-content img{
        height: 70px;
        width: 70px;
        border: 5px solid rgba(0,0,0,0.1);
        border-radius: 50%;
        position: absolute;
        top: -35px;
        left: 35px;
    }

    /* p{
        background-color: rgba(25, 110, 247, 0.301);
        color: rgb(95, 92, 92);
        height: 2em;
        text-align: center;
        padding: 0.5em;
        border-radius: 20px;
    } */


.tags a{
    color: #888;
    font-weight: 700;
    text-decoration: none;
    margin-right: 15px;
    transition: 0.3s ease;
}

.tags a:hover{
    color: rgba(106, 175, 240, 0.803);
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