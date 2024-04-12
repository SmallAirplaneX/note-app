import { defineStore } from "pinia";
import { ref } from 'vue'
import api from "@/api";

export const useTemplateStore = defineStore("template", ()=>{
    const list = ref([])
    const count = ref(0)
    const concept = ref({
         id : '',
        name: '',
        type: '',
        explanation :'',
    })
    const conceptsFromTemplate = ref([])
    const options = ref([
        // {
        //     id: '',
        //     name: '不选定',
        // }
    ])
    const selection = ref(true)
    const model = ref('创建')
    const state = ref(false)
    const currentPage = ref(1)
    const form = ref({
        id : '',
        template: {
            id:'',
            name: '',
            parentId:'-1'
        },
        concepts:[],
    })
    function openForm(model){
        this.form = {
            id : '',
            template: {
                id:'',
                name: '',
                parentId:'-1'
            },
            concepts:[],
        }
        this.model = model;
        this.state = true
        this.selection = false
    }
    function closeForm(){
        this.state = false
        this.selection = true
        this.form = {
            id : '',
            template: {
                id:'',
                name: '',
                parentId:'-1'
            },
            concepts:[],
        }
    }
    function flash() {
        api.template.list(this.currentPage).then((res) => {
            this.list = res.data.data
            this.options = res.data.data.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                }
            })
        });
        api.template.getCount().then(res =>{
            this.count = res.data.data ;
        })
    }
    function submit() {
        this.form.concepts = this.form.concepts.concat(this.conceptsFromTemplate)

        if (this.model === '更新'){
            api.template.updata(this.form).then(res =>{
                this.state = false
                this.selection = true
            })
            return
        }
        api.template.create(this.form).then((res) => {
            this.state = false
            this.selection = true
            this.flash();
        });
    }
    function handleDelete(e) {
            api.template.delete({
                id: e.row.id
            }).then((res) => {
                this.flash();
            })
    }
    function handleUpdata(e) {
        api.template.concepts(e.row.id).then(res =>{
            this.form.template = e.row;
            this.form.concepts = res.data.data
        })
        this.openForm("更新")
    }
    function removeAtt(tag){
        this.form.concepts = this.form.concepts.filter(item => item !== tag)
    }
    function add(e){
        //如果this.form.concepts没有当前元素，就push进去
        if (!this.form.concepts.find(item => item.id === e.row.id)){
            this.form.concepts.push(e.row)
        }

    }
    function filterMethod(){
        return this.options.filter(item => item.name.includes(this.concept.name))
    }
    function change(){
        api.template.concepts(this.form.template.parentId).then(res =>{
           this.conceptsFromTemplate = res.data.data
            //在this.form.concepts中删除与this.conceptsFromTemplate有相同的项
            this.form.concepts = this.form.concepts.filter(item => !this.conceptsFromTemplate.find(item2 => item2.id === item.id))
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

    return { selection,state,form,openForm,submit,handleDelete,closeForm,handleUpdata,removeAtt,flash,add,count,model,currentPage,concept,list,options ,filterMethod,change,conceptsFromTemplate,handleSizeChange,handleCurrentChange}
});
