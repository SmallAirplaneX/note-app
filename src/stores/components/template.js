import { defineStore } from "pinia";
import api from "@/api";

export const useTemplateStore = defineStore("template", ()=>{
    const templates = ref([])
    const selection = ref(false)
    const state = ref(false)
    const form = ref({
        name: '',
        attribute_id:[],
        parent:'-1'
    })
    function openForm(){
        this.state = true
        this.selection = false
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
        console.log(this.form)
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
        this.form = e.row;
        this.model = "更新";
        this.openForm()
    }
    function removeAtt(tag){
        this.form.attribute_id = this.form.attribute_id.filter(item => item != tag)
    }
    function addAtt(e){
        this.form.attribute_id.push(e.row)
        console.log(e.row)
    }


    return { templates,selection,state,form,openForm,submit,handleDelete,closeForm,handleUpdata,removeAtt,flash,addAtt }
});
