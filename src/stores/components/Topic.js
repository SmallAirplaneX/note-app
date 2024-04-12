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
    const count = ref(0)
    const notes = ref([])
    const options = ref([])
    const state = ref(false)
    const tableData = ref([])
    const currentPage = ref(1)
    function openForm(){
        state.value = true
        this.form ={
            id : '',
            name : '',
            perspectiveId : []
        }
    }
    function flash(){
        api.topic.list(this.currentPage).then(res=>{
            this.tableData = res.data.data
        })
        api.note.list(this.currentPage).then(res=>{
            this.options = res.data.data
        })
        api.topic.getCount().then((res) => {
            this.count = res.data.data;
        });
    }
    function submit(){
        api.topic.create(this.form).then(res=>{
            this.flash()
            this.state = false
        })
    }
    function updata(){
        api.note.updata(this.form).then(res => {
            this.flash()
            this.state = false
        })
    }
    function handleUpdata(e){
        this.state = true
        console.log(e.row)

        api.topic.getNoteByID(e.row.id).then(res=>{
            this.notes = res.data.data
        })

        this.form.id = e.row.id
        this.form.name = e.row.name
        this.form.perspectiveId = e.row.perspectiveId
    }
    function change (){

    }
    function handleDelete(e){
        api.topic.delete({id:e.row.id}).then(res=>{
            this.flash()
        })
    }
    function handleSizeChange(val)  {
        this.currentPage = val
        this.flash()
    }
    function handleCurrentChange(val) {
        this.currentPage = val
        this.flash()
    }
    return { tableData,state,openForm,form,options,submit,updata,flash,handleUpdata,handleDelete,notes,change,currentPage,handleSizeChange ,handleCurrentChange,count}
});
