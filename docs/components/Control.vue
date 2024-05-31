<template>
  <div v-if="selectedIcon !== null">
    <div class="shadow" @click="() => selectIcon(null)"></div>
    <div class="control">
      <header>
        <pre>{{ selectedIcon }}</pre>
      </header>

      <div class="row">
        <form>
          <label for="width-input">width</label>
          <input type="range" min="1" max="200" :value=width class="slider" id="width-input" @input="(e) => { width = e.target.value }">
        </form>

        <form>
          <label for="height-input">height</label>
          <input type="range" min="1" max="200" :value=height class="slider" id="height-input" @input="(e) => { height = e.target.value }">
        </form>

        <form>
          <label for="color-input">color</label>
          <input type="color" :value=color class="slider" id="color-input" @input="(e) => { color = e.target.value }">
        </form>
      </div>

      <div class="icon-preview-container">
        <div class="icon-preview" :style="`height: ${height}px; width: ${width}px`">
          <tap-icon-map :width=width :height=height :color=color ></tap-icon-map>
        </div>
      </div>

      <div class="row">
        <button @click="() => copySvg()">
          <tap-icon-copy></tap-icon-copy>
          Copy SVG
        </button>

        <button @click="() => copyReact()">
          <tap-icon-copy></tap-icon-copy>
          Copy React Import
        </button>

        <button @click="() => copyLit()">
          <tap-icon-copy></tap-icon-copy>
          Copy Lit Import
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import '../../src/lit/icons'
import {ref} from "vue";

const { selectedIcon } = defineProps({
  selectedIcon: String,
  selectIcon: String,
})

const width = ref(150);
const height = ref(150);
const color = ref('#5672cd');

function toPascalCase(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

const copy = (string) => {
  navigator.clipboard.writeText(string);
};

const copySvg = () => {
  copy(`<tap-icon-${selectedIcon} width="${width.value}" height="${height.value}" color="${color.value}"></tap-icon-${selectedIcon}>`)
}

const copyLit = () => {
  copy(`<tap-icon-${selectedIcon} width="${width.value}" height="${height.value}" color="${color.value}"></tap-icon-${selectedIcon}>`)
}

const copyReact = () => {
  copy(`<${toPascalCase(selectedIcon)} width="${width.value}" height="${height.value}" color="${color.value}" />`)
}

</script>

<style scoped>
.row {
  gap: 16px;
  display: flex;
  align-items: center;
}
.control {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 60vw;
  background-color: var(--vp-c-bg);
  z-index: 40;
  animation: show-sidebar 0.3s;
  padding: 16px;
  border-radius: 8px;
}
@keyframes show-sidebar {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
header {
  width: 100%;
  display: flex;
  align-items: center;
}
button {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  padding: 8px;
}
.shadow {
  position: fixed;
  background: var(--vp-backdrop-bg-color);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 39;
  backdrop-filter: blur(8px);
  animation: show-sidebar 0.3s;
}

form {
  transition: all 0.3s;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  background: var(--vp-c-bg);
}

form:hover {
  border-color: var(--vp-c-brand-1);
}
.icon-preview-container {
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-preview {
  transition: all 0.1s;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background-image:
    linear-gradient(45deg, var(--vp-c-divider) 25%, transparent 25%,
    transparent 75%, var(--vp-c-divider) 75%, var(--vp-c-divider)),
    linear-gradient(45deg, var(--vp-c-divider) 25%, transparent 25%,
    transparent 75%, var(--vp-c-divider) 75%, var(--vp-c-divider));
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.icon-preview:hover {
  border-color: var(--vp-c-brand-1);
}
.primary {
  color: var(--vp-c-brand-1);
}

</style>
