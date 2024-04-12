import {defineStore} from "pinia";
import { ref } from 'vue'
import api from "@/api";

export const useAttributeStore = defineStore("attribute", ()=>{
    const concepts = ref([])
    const count = ref(0)
    const state = ref(false)
    const model =  ref('创建')
    const page = ref(1)
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
        this.clean()
    }
    function flash() {
        api.concept.list(this.page).then((res) => {
            this.concepts = res.data.data
        });
        api.concept.getCount().then((res) => {
            //求res.data.data能被15整除几次
            this.count = res.data.data;
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
    return { concepts,form,state,model,selected,openForm,closeForm,flash,creat,submit,handleDelete,handleUpdata,clean,page,count}
});
