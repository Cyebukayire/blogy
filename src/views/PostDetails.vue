<template>
    <div class="single-post">
        <!-- <img v-bind:src="post.image" alt="Man"> -->
        <img src="../assets/code2.jpeg" alt="Man">

        <p class="category">
            Lorem ipsum dolor sit amet.
        </p>
        <div class="post-content">
            <h1>Lorem, ipsum dolor.</h1>
            <h2 class="post-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut, veniam. Nam tenetur esse accusantium vitae, rem non 
       consequatur eveniet nostrum. Exercitationem quae tempora, 
       ratione distinctio in saepe delectus repellat impedit quia 
       similique quis libero aspernatur accusantium error praesentium 
       possimus aperiam, dignissimos at. Iusto mollitia nesciunt
        distinctio soluta odit repellat atque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut, veniam. Nam tenetur esse accusantium vitae, rem non 
       consequatur eveniet nostrum. Exercitationem quae tempora, 
       ratione distinctio in saepe delectus repellat impedit quia 
       similique quis libero aspernatur accusantium error praesentium 
       possimus aperiam, dignissimos at. Iusto mollitia nesciunt
        distinctio soluta odit repellat atque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut, veniam. Nam tenetur esse accusantium vitae, rem non 
       consequatur eveniet nostrum. Exercitationem quae tempora, 
       ratione distinctio in saepe delectus repellat impedit quia 
       similique quis libero aspernatur accusantium error praesentium 
       possimus aperiam, dignissimos at. Iusto mollitia nesciunt
        distinctio soluta odit repellat atque?</h2>
        </div> 
    </div>
</template>

<script>

    export default {
        name: 'PostDetails',
        components: {
            // Header,
        },
        
        props: {
            title: String,
            body: String,
        }
    }
</script>
