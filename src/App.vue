<template>
    <main class='main'>
        <transition name='cover-left-transition'>
            <div v-if='!coverClose' class='cover left' @click='enter("blog")'>
                <img :src='require("assets/p0-avatar.png")' alt=''>
                <a href='#' class='cover-router'>简历 About me</a>
            </div>
        </transition>
        <transition name='cover-right-transition'>
            <div v-if='!coverClose' class='cover right' @click='enter("site")'>
                <img :src='require("assets/p0-works.png")' alt=''>
                <a href='#' class='cover-router'>作品 My works</a>
            </div>
        </transition>
        <component :is='component' @back='coverClose = false'></component>
    </main>
</template>
<script>
import site from './site'
import blog from './blog'
export default {
    name: 'App',
    components: {
        site,
        blog
    },
    data() {
        return {
            coverClose: false,
            component: ''
        }
    },
    methods: {
        enter(comp) {
            this.coverClose = true
            this.component = comp
        }
    }
}
</script>
