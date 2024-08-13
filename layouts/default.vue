<template>
  <div class="container">


<!--  keepalive  -->
    <nuxt-page keepalive></nuxt-page>




  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted,onBeforeMount,onServerPrefetch,nextTick} from 'vue'
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const isSelecting = ref(false)
const isSelectLanguage = ref(false)
import { useWebsiteConfigStore } from "@/stores/websiteConfig.js";
const websiteConfigStore = useWebsiteConfigStore();
import { user } from "@/stores/index.js";
const userStore = user();
import { useThemeStore } from "@/stores/Theme.js";
const themeStore = useThemeStore();
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()


import Lenis from '@studio-freight/lenis'
import {httpPrefix} from "~/enums/appEnum";
import axios from "axios";
/*平滑鼠标*/
onMounted(()=>{


/*  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    // console.log(e)

  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  watch(isSelectLanguage,(newValue) => {
    if (newValue){
      lenis.stop()



    }else {
      lenis.start()

    }
  })*/



  themeStore.getTheme

})






</script>


<style scoped>

</style>
