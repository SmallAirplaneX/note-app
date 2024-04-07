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
    const x = ref(false)
    const temp = ref([])
    const state = ref(false)
    const list =ref([])
    const templates = ref([])
    const page = ref("1")
    function submit (){
        this.form.informations = this.temp
        api.object.create(this.form).then(res =>{
                state.value = false;
                this.flash()
        })
    }
    function  flashTemplate(){
        api.template.list(this.page).then((res) => {
            templates.value = res.data.data
        });
    }
    function flash(){
        api.object.list(this.page).then((res) => {
            list.value = res.data.data
        });
    }
 function change () {
        if(this.form.myobject.templateId == ''){
            return
        }
        if(!this.x){
            this.x = true
            console.log("执行")
            api.template.concepts(this.form.myobject.templateId).then((res) => {
                this.temp = res.data.data
                console.log("执行api")
            })
            return
        }
        console.log("取消")
       
        
    }
    function openForm (){
        this.temp = []
        this.form = {myobject:{id:'',name:'',templateId:''},informations:[]}
        this.state = true
    }
     function handleUpdata (e){
        this.x = true
        
         api.object.getInfById(e.row.id).then((res) => {
                this.temp = res.data.data
                this.form.myobject = e.row
                this.state = true
                
        })
    }

    function handleDelete (e){
        api.object.delete({myobject:e.row}).then(res => {
            this.flash()
        })
    }
    function updata(){
        api.object.updata(this.form).then(res => {
            this.flash()
        })
    }

    return {templates,form,list,change,submit,flash,page,handleUpdata,handleDelete,updata,state,openForm,flashTemplate,temp}
});
