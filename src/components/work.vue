<template>
    <div class='work-container'>
        <div class='page gallay'>
            <div class='gallay-title tac'>我就偷偷放点图</div>
            <div class='flex justify-center'>
                <div class='flex column'>
                    <img class='mr20 mb20' :src='require("assets/img-01.png")' alt=''>
                    <img class='mr20' :src='require("assets/img-02.png")' alt=''>
                </div>
                <div class='flex column'>
                    <img class='mr20 mb20' :src='require("assets/img-03.png")' alt=''>
                    <img class='mr20' :src='require("assets/img-04.png")' alt=''>
                </div>
                <img class='gallay-right' :src='require("assets/img-05.png")' alt=''>
            </div>
        </div>
        <div class='page flex'>
            <UserInfo sm></UserInfo>
            <div class='work-right flex column justify-center'>
                <div class='work-info tac'>
                    <div class='title'>工作经历</div>
                    <div class='entertainment'>
                        广州易方信息科技股份有限公司 - UI设计师
                    </div>
                    <div class='date'>
                        (2016.05 - 至今)
                    </div>
                </div>
                <ul class='work-list'>
                    <li>1.负责营销活动专题页面,各节假日banner的设计</li>
                    <li>2.负责多场线下展会和沙龙活动的物料设计</li>
                    <li>3.参与官网改版, 负责插图及部分专题页设计</li>
                    <li>4.参与产品改版,负责播放器皮肤设计及部分客户的定制需求设计</li>
                </ul>
            </div>
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
<style lang='scss'>
.work-container {
    .work-left {
        width: 182px;
        flex-shrink: 0;
        margin-right: 48px;
    }
    .work-info {
        color: #d74343;
        .title {
            font-size: 26px;
        }
        .entertainment {
            font-size: 16px;
            margin-top: 16px;
        }
        .date {
            margin-top: 8px;
            color: #fff;
        }
    }
    .work-list {
        margin-top: 30px;
        font-size: 14px;
        li:not(:first-child) {
            margin-top: 16px;
        }
    }
}
.gallay {
    padding-top: 54px !important;
}
.gallay-title {
    color: #d74343;
    margin-bottom: 24px;
}
</style>
