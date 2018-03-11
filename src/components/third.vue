<template>
  <div style='margin-top: 34px;width: 562px;'>
      <h2>
        保利威视直播官网改版
      </h2>
      <div>
          <a class='base-color' href='http://www.polyv.net/live' target='_blank'>http://www.polyv.net/live</a>
      </div>
      <figure class='flex wrap'>
          <img :src='require("assets/img-video.png")' alt=''>
          <img :src='require("assets/img-wechat.png")' alt=''>
          <img :src='require("assets/img-vr.png")' alt=''>
          <img :src='require("assets/img-live.png")' alt=''>
      </figure>
      <div class='split'></div>
      <h2 style='margin-top: 40px;'>
        保利威视官网改版
      </h2>
      <div>
          <a class='base-color' href='http://www.polyv.net' target='_blank'>http://www.polyv.net</a>
      </div>
      <figure class='flex wrap'>
          <img :src='require("assets/img-stable.png")' alt=''>
          <img :src='require("assets/img-safety.png")' alt=''>
          <img :src='require("assets/img-speedy.png")' alt=''>
      </figure>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    h2 {
        margin-bottom: 6px;
        font-size: 18px;
        color: #333;
        font-weight: normal;
    }
    figure {
        margin-top: 15px;
    }
    figure img:nth-child(3),
    figure img:nth-child(4) {
        margin-top: 2px;
    }
    figure img:nth-child(1),
    figure img:nth-child(3) {
        margin-right: 2px;
    }
    .split {
        margin-top: 40px;
    }
</style>
