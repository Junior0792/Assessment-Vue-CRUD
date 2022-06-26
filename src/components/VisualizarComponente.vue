<template>

   <main>

    <section class="container">

        <section class="produtos">

            <br>
            
            <div v-if="produto" class="produto">

            <router-link class="editar" :to="'/formulario/' + produto.id">Editar</router-link>
            
            <a class="deletar" @click="deletarProduto()">Deletar</a>

            <br>

            <h3> {{ produto.title }} </h3>

            <p> {{ produto.body }} </p>

            </div>

            <section class="loading" v-else>
                Carregando os produtos...
            </section>

        </section>

        <!-- <h2>Avaliação</h2>

        <section class="produtos">

            <div v-for="c of comentarios" :key="c.id" class="produto">

            <h3>{{ c.name }}</h3>
              
            <p> {{ c.body }} </p>
        
           </div>

        </section> -->

    </section>

   </main>
 
</template>

<script>

export default{
    name: 'VisualizarComponente',
    data() {
        return {
            produto: null,
            comentarios: null
        };

    },
    async created() {
    // Processar a postagem de blog
    const urlAPI = "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id;
    
   await fetch(urlAPI)
      .then((response) => response.json())
      .then((post) => this.produto = post );


    // const urlAPIComments = `${urlAPI}/comments`;
    // await fetch(urlAPIComments)
    //   .then((response) => response.json())
    //   .then((json) => this.comentarios = json);
  },

  methods: {
    deletarProduto() {
        console.log("Deletar");
        const urlAPIpost = "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id;

         fetch(urlAPIpost, {
        method: 'DELETE',
      })
      .then(() => {
        alert("Este produto foi deletado com sucesso!.");
        // TODO: Voltar para o blog
      });
    }
  }
}
</script>

<style scoped>

main{
    align-items: center;
}

.produtos{
    display: flex;
    align-items: center; 
    flex-direction: column;

}

.produto{
    width: 80%;
    margin-bottom: 30px;
}

.produto img{
    width: 100vh;

}

.produto a{
    color: var(--color-text-dark);
    font-weight: 600;
    text-align: center;

}

h2{
    align-items: center; 
    margin-bottom: 30px;
    flex-direction: column;
    display: flex;
    margin-top: 30px;
    font-size: 1.5em;
}

.produto .editar {
  background: #05a6f1;
  color: rgb(0, 0, 0);
  padding: 7px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 5px;
  display: inline-block;
}

.produto .deletar {
  background: #f10505;
  color: rgb(0, 0, 0);
  padding: 7px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 5px;
  display: inline-block;
}






@media (min-width: 700px){
    .produtos{
        flex-direction: row;
        align-items: flex-start; 
        flex-wrap: wrap;       

    }
    .produto div{
        margin-right: 30px;
        width: 300px;

    }

    h1{
        align-items:flex-start;
        
    }

}

</style>