<template>
    <div class='other-container'>
        <div class='page flex'>
            <UserInfo sm></UserInfo>
            <div class='other-right flex column justify-center'>
                <div class='other-info'>
                    <div class='title'>英语</div>
                    <p>
                        用进废退是真理哎, 想把英语捡起来。
                    </p>
                    <div class='title mt40'>技能</div>
                    <p>
                        在学校的时候做过网页重构的工作，打过一点代码。<br/>
                        软件都是自学的，C4D还在摸索中，参加了白无常<br>
                        一周一练，不逼一下自己怎么知道不行呢~
                    </p>
                </div>
            </div>
        </div>
        <div class='page flex'>
            <UserInfo sm></UserInfo>
            <div class='other-right flex column justify-center'>
                <div class='other-info'>
                    <div class='title'>英语</div>
                    <p>
                        CET6, 去年啃完第一本鸡肠书《Animal Farm》<br>
                        第二本 《Charlotte‘s Web》在啃
                    </p>
                    <div class='title mt20'>技能</div>
                    <div class='skill'>
                        <span>PS</span>
                        <span>AI</span>
                        <span>C4D</span>
                        <span>瞎画画</span>
                    </div>
                    <div class='skill'>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
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
.other-container {
    .other-info {
        font-size: 14px;
    }
    .title {
        font-size: 16px;
        color: #d74343;
    }
    .skill {
        display: flex;
        flex-wrap: wrap;
        span {
            border: 2px dashed #fff;
            line-height: 26px;
            padding: 0 15px;
            border-radius: 6px;
            margin-right: 10px;
            margin-top: 10px;
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
