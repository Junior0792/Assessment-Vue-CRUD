<template>

  <main>

  <div class="apa">

    <form class="formulario" @submit.prevent="sendForm">

      <h1>Editar produto {{ id }}</h1>

      <label for="title">Nome do produto</label>

      <input id="title" v-model="title">

      <label for="body">Descrição do produto</label>

      <textarea id="body" v-model="body"></textarea>

      <input type="submit" value="Atualizar">

    </form>

  </div>

  </main>
  
</template>

<script>

export default{
    name:'FormularioComponente',
    data() {
        return {
            id: null,
            title: null,
            body: null
        }
    },
     created: function () {
    const urlAPIPost = "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id;
    
    fetch(urlAPIPost)
      .then((response) => response.json())
      .then((post) => {
        this.id = post.id;
        this.title = post.title;
        this.body = post.body;
      });
  },
   methods: {
    sendForm() {
      const urlAPIPost = "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id;

      fetch(urlAPIPost, {
        method: 'PUT',
        body: JSON.stringify({
          id: this.id,
          title: this.title,
          body: this.body,
          userId: this.userId
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert("Produto editado com sucesso!");        
      });
      
    }
  }
}
</script>

<style scoped>

main{
    align-items: center;
}

.apa{
    display: flex;
    align-items: center; 
    flex-direction: column;

}

.formulario{
    width: 80%;
    margin-bottom: 30px;
}

.formulario img{
    width: 100vh;

}

.formulario a{
    color: var(--color-text-dark);
    font-weight: 600;
    text-align: center;

}

h1{
    align-items: center; 
    margin-bottom: 30px;
    flex-direction: column;
    display: flex;
    margin-top: 30px;
    font-size: 1.5em;
}

label,
input {

  width: 100%;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  padding: 14px 16px;
}

textarea {

  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;

}

input[type=submit]:hover {
  background-color: var(--color-background-nav);

}


@media (min-width: 700px){
    .apa{
        flex-direction: row;
        align-items: flex-start; 
        flex-wrap: wrap;   
         

    }
    .formulario div{
        margin-right: 30px;
        width: 300px;

    }

    h1{
        align-items:flex-start;
        
    }

}

</style>
