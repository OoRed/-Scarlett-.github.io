<template>
  <div style='width: 390px'>
      <h2 class='tac title mt26'>2018 元旦闪屏</h2>
      <aside>Spring Festival</aside>
      <h3 class='title'>文案</h3>
      <p>
          从心出发，为梦远航
      </p>
      <h3 class='title mt20'>提取关键词</h3>
      <p>
          心，出发，梦，远航 → 宇航员出发搜索太空
      </p>
      <figure class='mt20 flex'>
          <div class='flex column align-center' style='margin-right: 30px;'>
            <img :src='require("assets/p2-00.png")' alt=''>
            初稿
          </div>
          <div class='flex column align-center'>
            <img :src='require("assets/p2-01.png")' alt=''>
            终稿
          </div>
      </figure>
      <p class='mt20'>
          出了初稿后，觉得没体现出出发一词，于是把保利星球放到左下角，表达出宇航员从保利星球出发，开始新的航程。
      </p>
      <div class='split'></div>
      <h2 class='tac title mt26'>小年闪屏</h2>
      <aside>the Kitchen God's Day</aside>
      <h3 class='title'>文案</h3>
      <p>
          小年到，灶王忙。上天言好事，用视频的形式岂不是更好
      </p>
      <h3 class='title mt20'>提取关键词</h3>
      <p>
          小年、灶王、言好事、视频 → 灶王用直播言好事
      </p>
      <figure class='mt20 flex'>
          <div class='flex column align-center' style='margin-right: 30px;'>
            <img :src='require("assets/p2-10.png")' alt=''>
            初稿
          </div>
          <div class='flex column align-center'>
            <img :src='require("assets/p2-11.png")' alt=''>
            终稿
          </div>
      </figure>
      <p class='mt20'>
          出了初稿后这个需求被删，因为是第一次尝试画形象，我便私下进行修改，简化文案和背景
          ，把灶王OK的手势改为拿着好事记，更能体现向玉帝汇报的场景。
      </p>
  </div>
</template>

<script>
export default {

}
</script>
    
<style lang='scss' scoped>
    h2.title {
        font-size: 24px;
        font-weight: normal;
        color: #000;
        padding-bottom: 14px;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            width: 100px;
            left: 50%;
            margin-left: -50px;
            height: 1px;
            background: #000;
            top: 100%;
        }
    }
    aside {
        font-size: 12px;
        text-align: center;
        margin-top: 10px;
    }
    figure {
        font-size: 12px;
        color: #333;
        img {
            margin-bottom: 10px;
        }
    }
    .split {
        margin-top: 40px;
    }
</style>
