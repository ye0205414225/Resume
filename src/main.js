var Vue = require('vue')

import App from './App'
/*------------------- Vuex -------------------*/
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './vuex/store'
/*------------------- amazeui -------------------*/
import 'amaze/assets/css/amazeui.css'
/*------------------- css/stylus -------------------*/
import './assets/style/css_main.css'
import './assets/style/css_main.styl'
/*------------------- axios -------------------*/
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
/*------------------- ElementUI -------------------*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })

/*------------------- 進度條 -------------------*/
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


/*------------------- vue-i18n -------------------*/

var VueI18n = require('vue-i18n')
Vue.use(VueI18n)
import tw from './i18n/tw.json'; // 存放繁體中文翻譯
import en from './i18n/en.json'; // 存放英文翻譯
const locales = {
    tw,
    en
};
Vue.config.lang = 'tw';
Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
})

/*------------------- 連結VueRouter -------------------*/
import router from './router'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
