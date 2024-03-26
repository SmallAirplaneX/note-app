import { defineStore } from "pinia";
import api from "@/api";
import { ref } from "vue";

export const useObjectStore = defineStore("object", ()=>{
    const form = ref({
        myobject:{
            id:'',
            name:'',
            template_id:'',
        },
        information:[],
    })
    const concepts = ref([])
    const list =ref([])
    const options = ref([
    ])
    const page = ref("1")
    const activeName = ref('first')
    function submit (){
        this.concepts.forEach(item => {
            this.form.information.push({id:item.id,text:item.text})
        })

        api.object.create(this.form).then(
            this.flash()
        )
    }
    function flash(){
        api.object.list(this.page).then((res) => {
            this.list = res.data.data
        });

        api.template.list(this.page).then((res) => {

            for (let i = 0; i < res.data.length; i++) {
                //如果options内没有当前数据，则添加，否则跳过
                if (!this.options.find((item) => item.id === res.data[i].id)) {
                    this.options.push(res.data[i])
                }
            }
        })
    }
    function change () {
        if (this.form.myobject.template_id === '' ){
            return
        }
        api.template.concepts(this.form.myobject.template_id).then((res) => {
            this.concepts = res.data.data
        })
    }

    function handleUpdata (e){
        this.activeName = 'first'
        this.form.name = e.row.name

        let promise = new Promise((resolve, reject) => {
            api.object.getTemplate(e.row.id).then((res) => {
                this.form.template.id = res.data.id
                resolve();
            })
        })
        promise.then(()=>{
            api.object.getInfById(e.row.id).then(res => {
                //当form.concepts中某一项的id与res.data中的某一项的id相同时，则在form.concepts中添加该id的对象的data属性值为res.data，否则跳过
                for (let i = 0; i < res.data.length; i++) {

                    for (let j = 0; j < this.form.concepts.length; j++) {
                        if (this.form.concepts[j].id === res.data[i].id) {
                            this.form.concepts[j].data = res.data[i].data
                        }
                    }
                }
            })
        })
    }

    function handleDelete (e){
        api.object.delete({myobject:e.row}).then(res => {
            this.flash()
        })
    }

    return {options,form,list,change,submit,flash,page,handleUpdata,handleDelete,activeName,concepts}
});
