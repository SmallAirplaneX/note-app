import { defineStore } from "pinia";
import api from "@/api";
import { ref } from "vue";

export const useObjectStore = defineStore("object", ()=>{
    const form = ref({
        myobject:{
            id:'',
            name:'',
            templateId:'',
        },
        informations:[],
    })
    const count = ref(0)
    const temp = ref([])
    const state = ref(false)
    const list =ref([])
    const templates = ref([])
    const currentPage = ref(1)
    function submit (){
        this.form.informations = this.temp
        api.object.create(this.form).then(res =>{
                state.value = false;
                this.flash()
        })
    }
    function  flashTemplate(){
        api.template.list(this.currentPage).then((res) => {
            templates.value = res.data.data
        });
    }
    function flash(){
        api.object.list(this.currentPage).then((res) => {
            list.value = res.data.data
        });
        api.object.getCount().then((res) => {
            //求res.data.data能被15整除几次
            this.count = res.data.data;
        });
    }
   
    function change () {
        if(this.form.myobject.templateId === ''){
            return
        }
        api.template.concepts(this.form.myobject.templateId).then((res) => {
            this.temp = res.data.data
        })
    }
    function openForm (){
        this.temp = []
        this.form = {myobject:{id:'',name:'',templateId:''},informations:[]}
        this.state = true
    }
     function handleUpdata (e){
        this.form.myobject = e.row
         api.object.getInfById(e.row.id).then((res) => {
                this.temp = res.data.data
                this.state = true
        })
    }

    function handleDelete (e){
        api.object.delete({myobject:e.row}).then(res => {
            this.flash()
        })
    }
    function updata(){
        this.form.informations = this.temp
        api.object.updata(this.form).then(res => {
            this.flash()
            this.state = false
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

    return {templates,form,list,change,submit,flash,currentPage,handleUpdata,handleDelete,updata,state,openForm,flashTemplate,temp,handleSizeChange,handleCurrentChange,count}
});
