<template>
    <div class='blog-main'>
        <div class='blog-wrapper'>
            <div class='left'>
                <div class='inner'>
                    <div class='content'>
                        <div class='page-container'>
                            <div class='scroller' :class='{sec: !$store.state.subView}'>
                                <transition name='opacity-transition' mode="out-in">
                                    <component :is='router'></component>
                                </transition>
                            </div>
                        </div>
                        <div class='bar' :class='{sec: $store.state.subView}'>
                            <div class='bar-inner'></div>
                            <img :src='require("assets/btn.png")' class='bar-btn' @click='$store.dispatch("subView")'/>
                        </div>
                    </div>
                    <div class='ctrl'></div>
                </div>
            </div>
            <div class='right'>
                <div class='header'>
                    努力不一定成功<br>
                    但是<br>
                    不努力会很轻松~
                </div>
                <ul class='nav'>
                    <li @click='enterRoute("self")' class='nav-item' :class='{active: router === "self"}'>个人资料</li>
                    <li @click='enterRoute("work")' class='nav-item' :class='{active: router === "work"}'>工作经历</li>
                    <li @click='enterRoute("other")' class='nav-item' :class='{active: router === "other"}'>其他的东西</li>
                    <li @click='enterRoute("like")' class='nav-item' :class='{active: router === "like"}'>就是喜欢</li>
                    <li class='nav-item more' @click='$emit("back")'>更多作品</li>
                </ul>
            </div>
            <img class='footer' :src='require("assets/main-feet.png")' alt=''>
        </div>
    </div>
</template>
<script>
import self from 'components/self'
import other from 'components/other'
import work from 'components/work'
import like from 'components/like'
import 'sass/blog-global'
export default {
    name: 'App',
    components: {
        self,
        other,
        work,
        like
    },
    data() {
        return {
            coverClose: false,
            router: 'self'
        }
    },
    methods: {
        enter() {
            this.coverClose = true
        },
        enterRoute(route) {
            const subView = this.$store.state.subView
            if(subView) {
                this.$store.dispatch('subView')
                setTimeout(() => {
                    this.router = route
                }, 150)
            } else {
                this.router = route
            }
        }
    }
}
</script>
