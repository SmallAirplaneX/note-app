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
        information:[],
    })
    const list =ref([])
    const options = ref([
    ])
    const page = ref("1")
    const activeName = ref('first')
    function submit (){
        api.object.create(this.form).then(
            this.flash()
        )
    }
    function flash(){
        api.object.list(this.page).then((res) => {
            this.list = res.data.data
        });
        api.template.list(this.page).then((res) => {
            this.options = res.data.data
        });
    }
    function change () {
        if (this.form.myobject.templateId === '' ){
            return
        }
        api.template.concepts(this.form.myobject.templateId).then((res) => {
            this.form.information = res.data.data
        })
    }

    function handleUpdata (e){
        this.activeName = 'first'
        this.form.myobject.name = e.row.name

        let promise = new Promise((resolve, reject) => {
            api.object.getInfById(e.row.id).then((res) => {
                this.form.information = res.data.data
                resolve();
            })
        })
    }

    function handleDelete (e){
        api.object.delete({myobject:e.row}).then(res => {
            this.flash()
        })
    }

    return {options,form,list,change,submit,flash,page,handleUpdata,handleDelete,activeName}
});
