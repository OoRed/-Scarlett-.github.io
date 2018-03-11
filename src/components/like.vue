<template>
    <div class='like-container'>
        <div class='page flex ending justify-center align-center column'>
            <div>
                因为热爱，所以追逐。<br>
                设计如是，生活如是。<br>
                <span class='en'>
                    Thanks for watching.
                </span>
            </div>
        </div>
        <div class='page flex'>
            <UserInfo sm></UserInfo>
            <div class='other-right flex column justify-center'>
                <div class='like-info'>
                    <div class='title'>跑步</div>
                    <p>
                        因为喜欢大发而喜欢上跑步，2017年4月16日终于<br>
                        实现了第一个小目标，跑了李宁跑联赛10公里<br>
                        2018年想跑一次半马，flag飞起~
                    </p>
                    <div class='title mt20'>旅行</div>
                    <p>
                        世界那么大，倾听不同的语言，感受不同的人生，都<br>
                        是路上敲有趣的事，戳下面有我的游记↓<br>
                        <a class='link mt10' href='http://www.mafengwo.cn/i/6531065.html' target='_blank'>- 你好，这里是辣不怕</a>
                        <a class='link' href='http://www.mafengwo.cn/i/7774798.html' target='_blank'>- 我们去过大马了，告诉他们！</a>
                    </p>
                    <div class='title mt20'>阅读</div>
                    <p>
                        喜欢文史类和散文，最近在看《明朝那些事儿》
                    </p>
                </div>
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
.like-container {
    .like-info {
        font-size: 14px;
    }
    .title {
        font-size: 16px;
        color: #d74343;
    }
    .link {
        color: #aa3737;
        display: block;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    p {
        margin-top: 5px;
    }
    .ending {
        font-size: 20px;
        color: #d74343;
        .en {
            font-size: 19px;
        }
    }
}
</style>
