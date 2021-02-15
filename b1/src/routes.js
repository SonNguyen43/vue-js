import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: require('./components/Index.vue').default },
    { path: '/write', component: require('./components/write/Index.vue').default },
    { path: '/speak', component:  require('./components/speak/Index.vue').default },    

    { path: '/write/:id', component: require('./components/write/Content.vue').default },
    { path: '/speak/:id', component:  require('./components/speak/Index.vue').default },       
]

const Router = new VueRouter({
    routes, // short for `routes: routes`
    mode: "history"
})

export default Router