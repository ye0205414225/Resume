
/*------------------- VueRouter宣告 -------------------*/
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/*------------------- VueRouter路徑 -------------------*/
import Login from './components/Login'
import Home from './components/Home'
import Information from './components/Information'
import About from './components/About'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Testgo from './Testgo'
/*------------------- VueRouter -------------------*/

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = new VueRouter( {
    //去除錨點
    //mode: 'history',
    //history: true,
    routes: [
        { path: '/', component: Home  },
        { path: '/Login', component: Login  },
        { path: '/Information', component: Information , meta: { authorization: true }  },
        { path: '/About', component: About , meta: { authorization: true }  },
        { path: '/Experience', component: Experience , meta: { authorization: true } },
        { path: '/Gallery', component: Gallery , meta: { authorization: true }  },
        { path: '/Testgo', component: Testgo , meta: { authorization: true }  },
    ]
})

router.beforeEach((to,from,next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})
import store from './vuex/store';

router.beforeEach(( to, from, next ) => {
    if ( to.matched.some( function ( record ) {
            return record.meta.authorization || false;
        }) ) {
        //  var isLogin = store.state.isLogin;
        var isLogin = store.state.isLogin;
        if ( isLogin ) {
            next();
        } else {
            next( { path: "/login", /*query: { redirect: to.fullPath } */});
        }
    } else {
        next();
    }
});

export default router;
