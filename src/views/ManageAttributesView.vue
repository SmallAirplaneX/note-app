<template>
    <div class="main-grid full">
        <div class="main-top">
          <DefineAttribute />
        </div>
        <div class="main-con">
          <ManageAttributes />
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem auto;
}

.main-top {
  grid-area: 1 / 1 / 2 / 2;
}

.main-con {
  grid-area: 2 / 1 / 3 / 2;
  overflow: auto;
}
</style>
