import { defineStore } from 'pinia'
import { getAttributes } from '@/http/api'
import { getTemplates } from '@/http/api'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      attributes: [],
      attributeForm:{
        name: '',
        type: 'default',
        explanation: '',
      },
      attributeFormV : false,
      templates: [],
      tags:[],
      isCollapse: false,
      menus: [],
      model: false,
    }
  },
  getter:{
    attfordata(state){
      const data = []
      state.attributes.array.forEach(e => {
          e.push({
            label: e.name,
            key: e.id
          })
      });
      return data;
    }
  },
  actions: {
    getAttributes() {
      getAttributes().then(res => {
        this.attributes = res.data
      })
    },
    getTemplates() {
      getTemplates().then(res => {
        this.templates = res.data
      })
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },
    addTags(path){
      if (!tags.includes(path)) {
        tags.push(path);
      }
    },
    clearAttributeForm(){
      console.log('------');
      this.attributeForm.name = ''
      this.attributeForm.type = 'defalut'
      this.attributeForm.explanation = ''
    }
  },
})
