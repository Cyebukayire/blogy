<template>
  <Header title="Post Details"/>
  <h1>Lorem ipsum dolor sit amet.</h1>
  <div class="body">
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
  
  <h1>Lorem ipsum dolor sit amet.</h1>
  <div class="body">
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

<style scoped>
.body{
    font-size: 20px;
    margin:2em;
}

</style>