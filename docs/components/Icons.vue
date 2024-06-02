<template>
  <Control :selected-icon=selectedIcon :select-icon=selectIcon />
  <SearchField :search=search :set-search=setSearch />
  <IconGrid :search=search :select-icon=selectIcon />
</template>

<script setup>
 import SearchField from "./SearchField.vue";
 import IconGrid from "./IconGrid.vue";
 import Control from "./Control.vue";
 import { ref } from 'vue'

 defineProps({
   category: String,
 })

 const selectedIcon = ref(null)
 const selectIcon = (iconName) => {
   selectedIcon.value = iconName;
 }

 const search = ref('')
 const setSearch = (searchString) => {
   search.value = searchString;
 }

</script>


<style scoped>

</style>
