import {defineStore} from "pinia";
import { ref } from 'vue'
import api from "@/api";

export const useAttributeStore = defineStore("attribute", ()=>{
    const concepts = ref([])
    const state = ref(false)
    const model =  ref('创建')
    const page = ref()
    const selected = ref([])
    const form =ref({
        name: "",
        type: "default",
        explanation: "",
    })
    function clean (){
        this.form = {
            name: "",
            type: "default",
            explanation: "",
        }
    }
    function openForm(model){
        this.model = model
        this.state = true
    }
    function closeForm(){
        this.state = false
    }
    function flash() {
        api.concept.list(this.page).then((res) => {
            this.concepts = res.data.data
        });
    }
    function creat() {
        this.model = '创建'
        this.openForm = true
    }
    function submit() {
        if (this.model === '更新'){
            console.log(this.form)
            api.concept.updata(this.form).then(()=>{
                this.closeForm()
                this.flash()
            })
            return
        }

        api.concept.create(this.form).then((res) => {
            this.closeForm()
            this.flash()
            this.form = {
                name: "",
                type: "default",
                explanation: "",
            };
        });
    }
    function handleDelete(e) {
        api.concept.delete({
            id: e.row.id,
        }).then(r => this.flash())

    }
    function handleUpdata(e) {
        this.form = e.row;
        this.openForm('更新')
    }
    return { concepts,form,state,model,selected,openForm,closeForm,flash,creat,submit,handleDelete,handleUpdata,clean,page}
});
