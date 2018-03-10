export default {
    state: {
        name: '谢林红',
        uname: 'Scarlett Xie',
        university: '广东外语外贸大学',
        education: '2016届毕业生',
        title: 'UI 设计师',
        locate: '坐标: 广州',
        subView: 0
    },
    mutations: {
        subView(state) {
            state.subView = !state.subView
        }
    },
    actions: {
        subView({ commit }) {
            commit('subView')
        }
    },
    getters: {
        subView: state => state.subView
    }
}
