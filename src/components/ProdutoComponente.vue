<template>

   <main>

   <section class="container">

        <h1>Lista de produtos</h1>

        <section class="produtos">

        <div v-for="p in produtos" :key="p.id" class="produto">

            <h3>{{ p.title }}</h3>

            <br>

            <p>{{ p.body }}</p>

            <br>

            <router-link :to="'/produtos/' + p.id">

            Entrar...

            </router-link>
    
        </div>

        </section>
       
   </section>

   </main>

</template>

<script>

export default{
    name:'ProdutoComponente',
    data() {
        return{
            produtos: [],
        };
    },
    async created() {
        const urlAPI = "https://jsonplaceholder.typicode.com/posts";
    
    const response = await fetch(urlAPI);
    console.log(response)
    const prodData = await response.json();
    this.produtos = prodData;
      
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

h1{
    align-items: center; 
    margin-bottom: 30px;
    flex-direction: column;
    display: flex;
    margin-top: 30px;
    font-size: 1.5em;
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