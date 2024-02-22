<template>
  <n-menu :options="menuOptions" />
</template>

<script setup>
import { h } from 'vue'
import { RouterLink } from 'vue-router';
import { NIcon } from 'naive-ui'
import {
  PersonOutline as PersonIcon,
} from "@vicons/ionicons5";



function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "manageAttributes",
        }
      },
      {
        default:()=> "管理属性"
      }
    ),
    key: "manage-attribute",
    icon: renderIcon(PersonIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "manageTemplates",
        }
      },
      {
        default:()=> "管理模板"
      }
    ),
    key: "manage-templates",
    icon: renderIcon(PersonIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "editNote",
        }
      },
      {
        default:()=> "创建笔记"
      }
    ),
    key: "edit-note",
    icon: renderIcon(PersonIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "manageNotes",
        }
      },
      {
        default:()=> "管理笔记"
      }
    ),
    key: "manage-notes",
    icon: renderIcon(PersonIcon)
  }
];

</script>





<style></style>
