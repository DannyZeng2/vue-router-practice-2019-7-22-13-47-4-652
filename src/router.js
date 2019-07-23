import VueRouter from 'vue-router'
import Home from './view/home.vue'
import Welcome from './view/welcome.vue'
import TodoList from './components/Main.vue'
import MyProfile from './view/profile.vue'
 

import Vue from 'vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [


        {
            path: '/',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/home/:name',
            name: 'Home',
            component: Home,
            props:true,
            children: [
                {
                    path: 'todoList',
                    name: 'todoList',
                    component: TodoList
                },
                {
                    path: 'myProfile',
                    name: 'myProfile',
                    component: MyProfile,
                    props:true
                }
            ]
        },

    ]

})

