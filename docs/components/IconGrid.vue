<template>
  <div class="icon-grid">
    after running the <code>pre-build:docs</code> script, this section is going to build
  </div>
</template>

<script setup>
import '../../src/lit/icons';
import IconPreview from './IconPreview.vue';
import config from '../../dist/config'
import { useData } from 'vitepress';
const { page } = useData();
defineProps({
  selectIcon: String,
  search: String,
  category: String,
})

</script>

<style scoped>
  .icon-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .control {
    position: fixed;
    top: var(--vp-nav-height);
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 256px;
    padding: 16px;
  }
</style>
