import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/login/index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'index',
            component: index,

            // meta: { showNav: flase }
        },
        {
            path: '/data',
            name: 'page',
            component: page,
            meta: { showNav: true },
            children: [{
                path: '/computer',
                name: 'computer',
            }]
        },


    ],

})