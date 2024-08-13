<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale, locales } = useI18n()
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
import axios from "axios";
import {httpPrefix} from "~/enums/appEnum";
import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()



</script>

<style scoped>
.home-page{
  height: auto;
}

.item-module{
  width: 100%;
}


</style>
