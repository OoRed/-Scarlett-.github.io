import vue from 'vue'
import Vuex from 'vuex'
// 引入两个构建文件
import createApp from 'js/createApp'
import createRouter from 'js/createRouter'
// App.vue
import App from 'App.vue'
// 引入全局state
import rootState from 'store/rootState'
import 'sass/global'
/** route */
import baseRoute from 'router/baseRoute'
vue.use(Vuex)
    // store
const { state, mutations, actions, getters } = rootState
// 路由
const router = createRouter(baseRoute)
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

const vm = createApp(router, store, App, 'app')
export default vm
