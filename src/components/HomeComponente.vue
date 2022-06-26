<template>
    
    <main>
        <img alt="Produtos" id="banner-inicio" src="https://uploads.metropoles.com/wp-content/uploads/2020/08/26180846/Fundo-7-1.jpg"> 
        <!-- <h1>Produtos de Beleza com os melhores preços</h1> -->
        <img alt="Produtos" id="banner-inicio" src="https://4383.cdn.simplo7.net/static/4383/sku/tratamentos-kits-rosto-kit-hidrabene-4-produtos-pele-madura--p-1607118426284.png"> 
    </main>

</template>

<script>

export default{
    name:'HomeItem'
}

</script>

<style scoped>

main{
    background-color: var(--color-background-inicio);
    justify-content: center;
    align-items: center;
}

h1{
    background-color: var(--color-background-nav);
    width: 500px;
    text-align: center;
    color: var(--color-text-light);
}

#banner-inicio{
    width: 500px;
    height: 400px;
}

@media (min-width: 700px){
    #banner-inicio{
        width: 1399px;
        height: 350px;
    }
    h1{
        width: 1410px;
        height: 80px;
        font-size: 2em;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    #iframe{
        width: 1410px;
    }
}

</style>




 

