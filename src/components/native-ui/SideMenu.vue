<template>
    <ul v-for="group in menuOptions">
        {{ group.title }}
        <li v-for="menu in group.children">
            <button @click="$router.push(menu.url)">{{ menu.title }}</button>
        </li>
    </ul>
</template>

<script setup>

const menuOptions = ref([
  {
    title: "管理",
    children: [
      {
        title: "属性管理",
        url: "manageAttributes"
      },
      {
        title: "模板管理",
        url: "manageTemplates"
      },
      {
        title: "主题管理",
        url: "manageNotes"
      }
    ]
  }

])


</script>





<style scoped>

ul{
   list-style-type: none
}

button{
  
}
</style>
