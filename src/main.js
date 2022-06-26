//importaçoes 
import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'

import App from './App.vue'


//componenets

import HomeComponente from '../src/components/HomeComponente'
import ProdutoComponente from '../src/components/ProdutoComponente'
import VisualizarComponente from '../src/components/VisualizarComponente'
import FormularioComponente from '../src/components/FormularioComponente'
import AdicionarComponente from '../src/components/AdicionarComponente'



//Definir as rotas
const routes = [
    {
        path:'/', component: HomeComponente

    },
    {
        path:'/produtos', component: ProdutoComponente

    },
    {
        path:'/produtos/:id', component: VisualizarComponente

    },
    {
        path:'/formulario/:id', component: FormularioComponente

    },
    {
        path:'/adicionar/', component: AdicionarComponente

    },
   
]

//Criar objeto rotas de vue router

const router = createRouter({
    history: createWebHashHistory(),
    routes 
})


//instancia de vue 

const app = createApp(App)

app.use(router)


app.mount('#app');
