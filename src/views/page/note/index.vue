<script setup>
import Editor from '@tinymce/tinymce-vue'
</script>

<template>
  <main id="sample">
    <Editor
        api-key="27kukh9yjg2qgrl3778ypghh3pw8n1evzscnu818sxwvqknv"
        :init="{
        plugins: 'lists link image table code help wordcount'
      }"
    />
  </main>


</template>

<style scoped>
@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 1000px;
  }
}
</style>