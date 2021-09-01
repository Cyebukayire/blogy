<template>
  <Header />
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
        distinctio soluta odit repellat atque?      Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

    <center><h1>Comment Section</h1></center>
    <main>
        <form id="post_form" role="form" aria-label="post comment">
            <label id="nameLabel" for="name">Name:</label>
            <br>
            <input type="text" id="name" maxlength="17" required>
            <br>
            <label id="commentLabel" for="comment">Comment:</label>
            <br>
            <textarea id="comment" maxlength="3000" required></textarea>
            <br>
            <input type="submit" id="submit" value="Post">
        </form>

        <div id="comments"></div>
    </main>
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
    margin-left:6em;
    margin-right:6em;
}

#post_form {

    margin-left: 20%;
    margin-right: 20%;
    width: 60%;

}

label {

    font-size: 18px;

}

#name:focus, #comment:focus, #submit:focus {

    -webkit-box-shadow: 0 0 5px black;
    box-shadow: 0 0 5px black;
    outline: none;

}

#name, #comment, #submit {

    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid black;
    font-size: 18px;

}

#submit {

    text-align: center;
    min-height: 48px;
    min-width: 48px;
    background-color: rgb(187, 255, 254);
    cursor: pointer;

}

#counter {

    font-size: 18px;
    margin-top: 50px;
    margin-bottom: 15px;
    border-bottom: 2px solid rgb(0, 90, 125);

}

#comment_header {

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

}

#id, #user_name, #date, #user_comment {

    padding: 0.5em;
    font-size: 18px;
    font-weight: bold;

}

#id, #date {

    background-color: rgb(0, 90, 125);
    color: white;

}

#user_name {

    background-color: white;
    color: rgb(0, 90, 125);

}

#user_name {

    border-top: 1px solid rgb(0, 90, 125);
    border-bottom: 1px solid rgb(0, 90, 125);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

}

#user_comment {

    border: 1px solid rgb(0, 90, 125);
    background-color: rgb(255, 247, 140);
    margin-bottom: 40px;

}

#comments {

    margin-left: 5%;
    width: 90%;

}


@media screen and (min-width:590px) {

    #comments, #post_form {
    
        margin-left: 25%;
        width: 50%;
    
    }

}

</style>