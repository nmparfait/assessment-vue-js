import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaDeCharacters from './components/ListaDeCharacters'
import Detalhamento from './components/Detalhamento'
import Formulario from './components/Formulario'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            //o componente passado com '/' é renderizado assim que iniciamos a aplicação, sem precisar ser importado App.vue
            path: '/',
            name: 'personagens',
            component: ListaDeCharacters
        },
        {
            
            path: '/detalharCard/:number',
            name: 'detalharCard',
            component: Detalhamento
        },
        {
            path: '/formulario',
            name: 'formulario',
            component: Formulario
        },
    ]
})