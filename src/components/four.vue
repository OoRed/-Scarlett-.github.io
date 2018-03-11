<template>
  <div class='mt20' style='width: 802px'>
      <figure>
          <img :src='require("assets/p4-01.png")' alt=''>
          <img :src='require("assets/p4-02.png")' alt=''>
          <img :src='require("assets/p4-03.png")' alt=''>
          <img :src='require("assets/p4-04.png")' alt=''>
          <img :src='require("assets/p4-05.png")' alt=''>
          <img :src='require("assets/p4-06.png")' alt=''>
          <img :src='require("assets/p4-07.png")' alt=''>
          <img :src='require("assets/p4-08.png")' alt=''>
      </figure>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    img {
        margin-right: 4px;
        &:not(:first-child) {
            filter: grayscale(100%);
            &:hover {
                filter: none;
            }
        }
    }
</style>
