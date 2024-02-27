import { defineStore } from 'pinia'
import { getAttributeList } from '@/http/api'



export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      attributes: [],
      tags:[],
      isCollapse: false,
    }
  },
  actions: {
    getAttributes() {
      getAttributeList().then(res => {
        this.attributes = res.data
      })
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },
    addTags(path){
      if (!tags.includes(path)) {
        tags.push(path);
      }
    }
  },
})
