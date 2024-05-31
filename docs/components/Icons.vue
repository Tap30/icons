<template>
  <Control :selected-icon=selectedIcon :select-icon=selectIcon />
  <SearchField />
  <IconGrid :select-icon=selectIcon />
</template>

<script setup>
 import SearchField from "./SearchField.vue";
 import IconGrid from "./IconGrid.vue";
 import Control from "./Control.vue";

 import { ref } from 'vue'

 const selectedIcon = ref(null)
 const selectIcon = (iconName) => {
   selectedIcon.value = iconName;
 }

</script>


<style scoped>

</style>
