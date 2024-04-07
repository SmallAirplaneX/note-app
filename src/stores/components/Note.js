import { defineStore } from "pinia";
import api from "@/api";
import { ref } from 'vue'


export const useNoteStore = defineStore("note", ()=>{

    const tags = ref([])
    const menus = ref([])
    const isCollapse = ref(false)

    return { tags,menus,isCollapse }
});
