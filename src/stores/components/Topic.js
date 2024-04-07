import { defineStore } from "pinia";
import api from "@/api";
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'


export const useTopicStore = defineStore("topic", ()=>{
    const form = ref({
        id : '',
        name : '',
        perspectiveId : []
    })
    const options = ref([])
    const state = ref(false)
    const tableData = ref([])
    function openForm(){
        state.value = true
    }
    function flash(){
        api.topic.list(1).then(res=>{
            this.tableData = res.data.data
        })
    }
    function submit(){
        api.topic.create(this.form).then(res=>{
            this.flash()
        })
    }
    function updata(){
        api.topic.updata(this.form).then(res=>{
            this.flash()
        })
    }
    function handleUpdata(e){
        // api.topic.updata(e.row.id).then(res=>{
        //     this.flash()
        // })
    }
    function handleDelete(e){
        api.topic.delete({id:e.row.id}).then(res=>{
            this.flash()
        })
    }
    return { tableData,state,openForm,form,options,submit,updata,flash,handleUpdata,handleDelete }
});
