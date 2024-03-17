import { defineStore } from "pinia";
import api from "@/api";

export const useTemplateStore = defineStore("template", ()=>{
    const templates = ref([])
    const selection = ref(true)
    const model = ref('创建')
    const state = ref(false)
    const form = ref({
        name: '',
        attribute_id:[],
        parent:'-1'
    })
    function openForm(model){
        this.model = model;
        this.state = true
        this.selection = false
        this.form = {
            name: '',
            attribute_id:[],
            parent:'-1'
        }
    }
    function closeForm(){
        this.state = false
        this.selection = true
    }
    function flash() {
        api.getTemplates().then((res) => {
            this.templates = res.data;
        });
    }
    function submit() {
        if (this.model === '更新'){
            api.upDataTemplate(this.form).then(res =>{
                    this.closeForm();
                    this.form = {
                        name: '',
                        attribute_id:[],
                        parent:'-1'
                    };
        })
            return
        }
        api.createTemplate(this.form).then((res) => {
            this.closeForm();
            this.flash();
            this.form = {
                name: '',
                attribute_id:[],
                parent:'-1'
            };
        });
    }
    function handleDelete(e) {
        api.deleteTemplate({
            id: e.row.id,
        }).then(r => this.flash());

    }
    function handleUpdata(e) {

        api.getAttributesById(e.row.id).then(res =>{
            this.form = e.row;
            this.form.attribute_id = res.data
        })
        this.openForm("更新")
    }
    function removeAtt(tag){
        this.form.attribute_id = this.form.attribute_id.filter(item => item !== tag)
    }
    function addAtt(e){
        this.form.attribute_id.push(e.row)
    }


    return { templates,selection,state,form,openForm,submit,handleDelete,closeForm,handleUpdata,removeAtt,flash,addAtt,model }
});
