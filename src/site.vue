<template>
  <main class='site-main-container'>
    <header class='site-header'>
      <div class='user-info flex align-center' @click='$emit("back")' title='回首页'>
        <img :src='require("assets/ic-girl.png")' class='avatar' alt=''>
        <span class='ani' >
          皮这一下非常开心嘻~
        </span>
      </div>
      <div class='flex-center'>
        <img :src='require("assets/ic-email.png")' alt=''>
        scarlettxie@163.com
      </div>
    </header>
    <section class='site-content-container'>
      <nav>
        <ul class='site-nav'>
          <li>
            <router-link class='nav-item' :to='{name: "activate"}'>营销活动页</router-link>
          </li>
          <li>
            <router-link class='nav-item' :to='{name: "festival"}'>节假日壁纸</router-link>
          </li>
          <li>
            <router-link class='nav-item' :to='{name: "other"}'>其他 UI</router-link>
          </li>
          <li>
            <router-link class='nav-item' :to='{name: "daily"}'>蜜汁日常</router-link>
          </li>
        </ul>
      </nav>
      <article class='site-article'>
        <transition name='opacity-transition' mode='out-in'>
          <router-view></router-view>
        </transition>
      </article>
    </section>
  </main>
</template>

<script>
import 'sass/site-global'
export default {
  name: 'App'
}
</script>

