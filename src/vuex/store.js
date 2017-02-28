import * as types from './mutations_types.js';
import NProgress from 'nprogress'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 定義初始值
const state = {
    isLogin     : false,
    lang        : 'tw',
}
// 取值
const mutations = {

    isLogin( state, value ) {
        state.isLogin = value;
    },
    [types.LANGUAGE] (state, setlang) {
        NProgress.start()
        state.lang = setlang;
        // 設定 Vue config 將會改變使用的語系
        Vue.config.lang = state.lang;
        NProgress.done()
    }
}

//寫值--非同步


const actions = {
    login( {commit, state}, { email , password} ) {
        return new Promise( resolve => {
            console.log( email , password);
            setTimeout( async () => {
                var response = await axios.get( '/static/api.txt' );
                var data = response.data;
                if ( data.status == 'ok' ) {
                    // action 不應該直接修改 state 的值,
                    // 要使用 commit 的方式呼叫 mutations 去改值
                    // 以下寫法在嚴格模式會發生錯誤
                    // state.isLogin = true;
                    commit( 'isLogin', true );
                }
                resolve( data );
            }, 1000);
        })
    },
   setLanguage ({ commit }, lang) {
        commit(types.LANGUAGE, lang);
    }

};
//寫值--同步
const getters = {
    isLogin: state => state.isLogin,
}



// 创建 store 实例
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})