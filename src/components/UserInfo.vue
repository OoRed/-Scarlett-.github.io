<template>
    <div class='flex column align-center justify-center' :class='{sm}'>
        <img :src='!init ? require("assets/m1-myself.png") : require("assets/mm-avatar.png")' alt=''>
        <div class='name-container'>
            <div class='name'>
                {{$store.state.name}} <span class='uname'>{{$store.state.uname}}</span>
            </div>
        </div>
        <div class='info' :style='style'>
            <div class='info-item' v-for='(item, index) in info'>
                <img :src='icon[item]' alt=''>{{init ? $store.state[item] : custom[index]}}
            </div>
        </div>
    </div>
</template>

<script>
import university from 'assets/ic-edu.png'
import education from 'assets/ic-age.png'
import title from 'assets/ic-tar.png'
import locate from 'assets/ic-city.png'
export default {
    props: {
        init: {
            type: Boolean,
            default: true
        },
        sm: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            info: ['university', 'education', 'title', 'locate'],
            custom: ['网络工程 GPA 3.56/4', '滴, 18岁', '非科班但喜欢呀', '做人咧最紧要就系开心'],
            icon: {
                university,
                education,
                title,
                locate
            }
        }
    },
    computed: {
        style() {
            return {
                width: this.sm ? 'initial' : ((this.init ? 440 : 440) + 'px'),
                paddingLeft: this.sm ? '14px' : ((this.init ? 30 : 30) + 'px')
            }
        }
    }
}
</script>
<style lang='scss'>
    .name-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 14px;
        width: 260px;
        background: $bg-color;
        line-height: 46px;
        height: 46px;
        flex-shrink: 0;
        @include border-percent(20%);
        color: #fff;
        &:before, &:after {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: darken($bg-color, 15%);
        }
    }
    .name {
        font-size: 24px;
    }
    .uname {
        font-size: 22px;
    }
    .info {
        color: #fff;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
    }
    .info-item {
        display: flex;
        align-items: center;
        margin-top: 10px;
        line-height: 32px;
        width: 50%;
        flex-shrink: 0;
        img {
            width: 26px;
            object-fit: scale-down;
            margin-right: 10px;
        }
    }
    .sm {
        width: 182px;
        height: 418px;
        margin-right: 48px;
        .info {
            margin-top: 10px;
        }
        .info-item {
            width: initial;
            white-space: nowrap;
            font-size: 14px;
            line-height: initial;
        }
        .name-container {
            width: 100%;
            margin-top: 12px;
            line-height: 32px;
            height: 32px;
            .name {
                font-size: 18px;
            }
            .uname {
                font-size: 16px;
            }
            &:before, &:after {
                width: 6px;
                height: 6px;
            }
        }
    }
</style>
