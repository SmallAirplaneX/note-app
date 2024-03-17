import { defineStore } from "pinia";
import api from "@/api";
import {ref} from "vue";

export const useNoteStore = defineStore("note", ()=>{
    const form = ref({
        name:'',
        select:'',
        attributes:[],
    })
    const notes =ref([])
    const options = ref([
        {
            value: '',
            label: '不选定',
        }
    ])
    const page = ref(1)
    function submit (){
        api.createNote(this.form).then(
            this.flash()

        )
    }
    function flash(){

        api.getTemplates().then((res) => {
            this.options = res.data
        });

        api.getNotes(this.page).then((res) => {
            let temp = [   {
                value: '',
                label: '不选定',
            }]
            for (let i = 0; i < res.data.length; i++) {
                temp.push(res.data[i])
            }

            this.notes = temp
        })



    }
    function change  () {
        if (this.form.select === '' ){
            return
        }
        api.getAttributesById(this.form.select).then((res) => {
            this.form.attributes = res.data
        })
    }

    function handleUpdata (e){
        // api.upDataNote(e.row)
    }

    function handleDelete (e){
        api.deleteNote(e.row.id).then(res => {
            this.flash()
        })
    }

    return {options,form,notes,change,submit,flash,page,handleUpdata,handleDelete}
});
