<template>
	<div class="icon-preview" @click="() => selectIcon(title)">
    <slot></slot>
    <pre class="tooltip">{{ title }}</pre>
  </div>

</template>

<script setup>
import '../../src/icons'

defineProps({
  title: String,
  selectIcon: String,
})

</script>

<style scoped>
.icon-preview {
  transition: all 0.3s;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  position: relative;
  transform: scale(1);
  z-index: 1;
}
.icon-preview:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  cursor: pointer;
}
.icon-preview:active {
  transform: scale(0.95)
}

.tooltip {
  background: var(--vp-sidebar-bg-color);
  font-size: 12px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 100%);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0 2px;
  margin: 0;
  z-index: 20;
  opacity: 0;
  color: var(--vp-c-text-1);
  transition: all 0.3s;
  width: max-content;
}

.icon-preview:hover .tooltip {
  opacity: 1;
  padding: 0 8px;
}
</style>
