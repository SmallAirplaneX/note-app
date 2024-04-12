import { defineStore } from "pinia";
import api from "@/api";
import { ref } from 'vue'
export const useNoteStore = defineStore("note", ()=>{

    const form = ref({
        topicId: '',
        noteName:'',
        tags :[],
        content: '',
        id: ''
    })

    const mouse = ref(
        {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        }
    )
    const count = ref(0)
    const options = ref([])
    const tableData = ref([])
    const input = ref('')
    const output = ref('')
    const tags = ref([])
    const state = ref(false)
    const currentPage = ref(1)
    const visible = ref(false)
    const auto = ref(null)
    const objID = ref(0)

    const triggerRef = ref({
        getBoundingClientRect() {
            return mouse.value
        },
    })

    const position = ref({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    })


    function handleDelete(e) {
        api.note.delete({id:e.row.id}).then(res=>{
            this.flash()
        })
    }

    function flash() {
        api.note.list(this.currentPage).then(res => {
            this.tableData = res.data.data
        })
        api.topic.list(this.currentPage).then(res=>{
            this.options = res.data.data
        })
        api.note.getCount().then(res=>{
            this.count = res.data.data
        })
    }
    function handleUpdata(e) {
        this.state = true

        api.note.getNoteById(e.row.id).then(res=>{
            this.form.noteName = res.data.data.name
            this.input = res.data.data.note
            this.form.id = res.data.data.id
        })
    }
    function update() {
        this.form.content = this.input
        api.note.updata(this.form).then(res=>{
            this.state = false
            this.flash()
        })


    }
    function openForm() {
        this.state = true
    }
    function submit() {
        this.form.content = this.input
        api.note.create(this.form).then(res => {
            this.state = false
            this.flash()
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
    function convert (){
        //如果this.input以【结尾，则提示
        if(this.input.endsWith('【')){
            //获取鼠标位置
            //设置popoverRef为鼠标位置
            mouse.value = position.value
            //显示popoverRef
            this.visible = !this.visible
            api.object.list(1).then(res=>{
                this.auto = res.data.data
            })
        }
        if (this.input.endsWith("：")){
            mouse.value = position.value
            this.visible = !this.visible
            api.object.getInfById(this.objID).then(res=>{
                this.auto = res.data.data
            })
        }
        if (this.input.endsWith("】")){
            //删除this.input中最后一处【】包裹的内容
            this.input = this.input.substring(0, this.input.lastIndexOf("【"))
            this.input += this.auto.find(item => item.id === this.objID).text
        }


    }
    function pase (e){
        this.input += e.name;
        this.objID = e.id
        this.visible = !this.visible
    }

    return { tags,form,openForm,state,input,options,mouse,triggerRef,pase,output,objID,auto,position,submit,handleDelete,handleUpdata,tableData,flash,currentPage,handleCurrentChange,handleSizeChange,count,update,convert,visible }
});
