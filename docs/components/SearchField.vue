<template>
  <div class="control">
    <form class="color-picker">
      <label title="Search" id="search-label" for="search-input"><span><tap-icon-magnifier width="20" height="20"></tap-icon-magnifier></span></label>
      <input
        placeholder="Search..."
        id="search-input"
        aria-labelledby="search-label"
        class="search-input"
        :value=search
        @input="(e) => setSearch(e.target.value)"
      >
    </form>
  </div>
</template>

<script setup>
import '../../src/icons';

defineProps({
  search: String,
  setSearch: String,
})
</script>

<style scoped>
.control {
  position: sticky;
  top: var(--vp-nav-height);
  background: var(--vp-c-bg);
  padding: 4px 0;
  z-index: 3;
}
.search-bar {
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  background: var(--vp-c-bg);
}

.search-bar:hover {
  border-color: var(--vp-c-brand-1);
}


.color-picker {
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  background: var(--vp-c-bg);
}

.color-picker:hover {
  border-color: var(--vp-c-brand-1);
}
</style>
