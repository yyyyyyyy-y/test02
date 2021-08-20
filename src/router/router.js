import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import layout from "@/layout/layout";

const publicRoutes = [
    //登录
    { path: '/', name:'login', component: () => import("@/views/login/login"),meta:{title:'登录',icon:"el-icon-edit-outline"} },
    //首页
    {
        path:'/index',
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