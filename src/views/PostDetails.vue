<template>
  <Header title="Lorem ipsum dolor sit amet"/>
  <h1 class="post_title">Lorem ipsum dolor sit amet.</h1>
  <div class="post_details">
     {{body}}
  </div>  
  
  <h1 class="post_title">Lorem ipsum dolor sit amet.</h1>
  <div class="post_details">
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
        distinctio soluta odit repellat atque?
  </div>

</template>

<script>
import Header from '../components/Header.vue'

    export default {
        name: 'PostDetails',
        components: {
            Header,
        },
        
        props: {
            title: String,
            body: String,
        }
    }
</script>
