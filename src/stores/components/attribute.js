import {defineStore} from "pinia";
import api from "@/api";

export const useAttributeStore = defineStore("attribute", ()=>{
    const attributes = ref([])
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
        api.getAttributes(this.page).then((res) => {
            this.attributes = res.data;
        });
    }
    function creat() {
        this.model = '创建'
        this.openForm = true
    }
    function submit() {
        if (this.model === '更新'){
            console.log(this.form)
            api.updateAttribute(this.form).then(()=>{
                this.closeForm()
                this.flash()
            })
            return
        }

        api.createAttribute(this.form).then((res) => {
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
        api.deleteAttribute({
            id: e.row.id,
        }).then(r => this.flash())

    }
    function handleUpdata(e) {
        this.form = e.row;
        this.openForm('更新')
    }
    return { attributes,form,state,model,selected,openForm,closeForm,flash,creat,submit,handleDelete,handleUpdata,clean,page}
});
