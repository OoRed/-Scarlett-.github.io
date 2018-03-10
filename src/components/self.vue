<template>
    <div class='self-container'>
        <div class='page'>
            <UserInfo :init='false'></UserInfo>
        </div>
        <div class='page'>
            <!-- <img :src='require("assets/mm-avatar.png")' alt=''>
        <div class='name-container'>
            <div class='name'>
                {{$store.state.name}} <span class='uname'>{{$store.state.uname}}</span>
            </div>
        </div>
        <div class='info' style='width: 420px;padding-left: 40px;'>
            <div class='info-item' v-for='item in info'>
                <img :src='icon[item]' alt=''>{{$store.state[item]}}
            </div>
        </div>
      </div> -->
            <UserInfo></UserInfo>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
import UserInfo from 'components/UserInfo'
export default {
    components: {
        UserInfo
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['subView'])
    }
}
</script>
