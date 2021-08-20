import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import layout from "@/views/layout/layout";

const publicRoutes = [
    {
        path:'/',
        component: layout,
        redirect:'/index',
        children:[
            {
                path:'/index',
                name:'index',
                component: ()=> import("@/views/index/index"),
            }
        ]
    },
    //404页面放在最后
    { path: '*', component: ()=> import("@/views/error/noPage404") }
]

const router = new VueRouter({
    // mode:'history',
    routes:publicRoutes
})

export default router