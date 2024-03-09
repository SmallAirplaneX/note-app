import { defineStore } from "pinia";
import api from "@/api";

export const useAppStore = defineStore("app", ()=>{
  const tags = ref([])
  const menus = ref([])
  const isCollapse = ref(false)
  return { tags,menus,isCollapse }
});
