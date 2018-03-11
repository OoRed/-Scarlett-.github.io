import Vue from 'vue'
import 'http' // 初始化http
/**
 * 构建vue实例
 *
 * @export
 * @param {VueRouter} router router实例
 * @param {Vuex} store store实例
 * @param {App} app vueApp咯
 * @param {String} element 需要挂载的dom的id
 * @returns
 */
export default function(router, store, app, element) {
    // 配置Vue调试工具
    Vue.config.devtools = true
        // 返回构建完成的vue实例
    return new Vue({
        router,
        store,
        render: h => h(app)
    }).$mount('#' + element)
}
