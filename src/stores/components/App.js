import { defineStore } from "pinia";
import api from "@/api";
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'


export const useAppStore = defineStore("app", ()=>{

  const tags = ref([])
  const menus = ref([])
  const isCollapse = ref(false)
  const router = useRouter()
  const route = useRoute()


  return { tags,menus,isCollapse }
});
