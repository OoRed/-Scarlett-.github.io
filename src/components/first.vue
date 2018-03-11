<template>
  <div style='width: 576px;'>
      <h2 class='title' >12.12 年终盛典</h2>
      <figure>
          <img :src='require("assets/p1-1.png")' alt=''>
      </figure>
      <p>
          那段时间正好在看《字体故事》，所以尝试着突出文字标题。
      </p>
      <p>
          <span class='base-color'>页面地址: </span><a class='base-color' href='http://www.polyv.net/special/promotion-video/' target='_blank'>http://www.polyv.net/special/promotion-video/</a>
      </p>
      <div class='split'></div>
      <h2 class='title'>11.11 热身活动</h2>
       <figure>
          <img :src='require("assets/p1-2.png")' alt=''>
      </figure>
      <p>
          这么大的促销节日看了挺多的酷炫风格有点点疲劳，尝试走一下温油风。
      </p>
  </div>
</template>
<script>
export default {

}
</script>

<style lang='scss' scoped>
    h2.title {
        margin-bottom: 15px;
        margin-top: 26px;
    }
    .split {
        margin: 26px 0;
    }
</style>
