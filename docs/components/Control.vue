<template>
  <div v-if="selectedIcon !== null">
    <div class="shadow" @click="() => selectIcon(null)"></div>
    <div class="control">


      <div class="row">
        <div class="col">

          <div class="row">
            <b>{{ selectedIcon }}</b>
          </div>

          <div class="row">
            <div><span v-for="category in configFile[selectedIcon]?.categories" class="VPBadge tip">{{ category }}</span></div>
          </div>

          <div class="row">
            <form>
              <label for="width-input">width</label>
              <input type="range" min="1" max="140" :value=width class="slider" id="width-input"
                     @input="(e) => { width = e.target.value }">
            </form>
            <form>
              <label for="height-input">height</label>
              <input type="range" min="1" max="140" :value=height class="slider" id="height-input"
                     @input="(e) => { height = e.target.value }">
            </form>
            <form>
              <label for="color-input">color</label>
              <input type="color" :value=color class="slider" id="color-input" @input="(e) => { color = e.target.value }">
            </form>
          </div>

        </div>

        <div class="icon-preview-container">
          <div class="icon-preview" :style="`height: ${height}px; width: ${width}px`">
            <tap-icon :width=width :height=height :color=color id="icon" v-html=configFile[selectedIcon]?.svgContent >
            </tap-icon>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <h6>Importing Component</h6>

        <div class="vp-code-group vp-adaptive-theme">
          <div class="tabs"><input type="radio" name="group-ALkwy" id="tab-2v_AT7J" checked="checked"><label
            for="tab-2v_AT7J">React</label><input type="radio" name="group-ALkwy" id="tab-vTu5zWC"><label
            for="tab-vTu5zWC">Lit</label></div>
          <div class="blocks">
            <div class="language-js vp-adaptive-theme active">
              <button title="Copy Code" class="copy"></button>
              <span class="lang">js</span>
              <pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {{ toPascalCase(selectedIcon) }} </span><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span
                style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> '@tapsi-oss/icons/react/{{
                  toPascalCase(selectedIcon)
                }}'</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre>
            </div>
            <div class="language-js vp-adaptive-theme">
              <button title="Copy Code" class="copy"></button>
              <span class="lang">js</span>
              <pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span
                style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> '@tapsi-oss/icons/lit'</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre>
            </div>
          </div>
        </div>

        <h6>Usage</h6>

        <div class="vp-code-group vp-adaptive-theme">
          <div class="tabs"><input type="radio" name="group-DJNBv" id="tab-gdDSRUM" checked="checked"><label
            for="tab-gdDSRUM">React</label><input type="radio" name="group-DJNBv" id="tab-zruU2R9"><label
            for="tab-zruU2R9">Lit</label></div>
          <div class="blocks">
            <div class="language-js vp-adaptive-theme active">
              <button title="Copy Code" class="copy"></button>
              <span class="lang">js</span>
              <pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span
                style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{ toPascalCase(selectedIcon) }}</span><span
                style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span
                style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{ width }}</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span
                style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">height</span><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span
                style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{{ height }}</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span
                style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span
                style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">"{{ color }}"</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre>
            </div>
            <div class="language-js vp-adaptive-theme">
              <button title="Copy Code" class="copy"></button>
              <span class="lang">js</span>
              <pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span
                style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tap-icon-{{selectedIcon}}</span><span
                style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span
                style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">"{{ width }}"</span><span
                style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span
                style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">"{{ height }}"</span><span
                style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span
                style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span
                style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">"{{ color }}"</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span
                style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tap-icon-map</span><span
                style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre>
            </div>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script setup>
import '../../src/lit/icons';
import '../../src/lit/icon';
import configFile from "../../dist/config.json";


import {ref} from "vue";

const {selectedIcon} = defineProps({
  selectedIcon: String,
  selectIcon: String,
})

const width = ref(120);
const height = ref(120);
const color = ref('#ff7733');

function toPascalCase(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}


</script>

<style scoped>
.col {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
}

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
  min-width: 45vw;
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
  background: var(--vp-c-bg);
}

form:hover {
  border-color: var(--vp-c-brand-1);
}

.icon-preview-container {
  height: 140px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-preview {
  transition: all 0.1s;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background-image: linear-gradient(45deg, var(--vp-c-divider) 25%, transparent 25%,
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

@media (max-width: 700px) {
  .control {
    top: 20px;
    right: 20px;
    left: 20px;
    bottom: 20px;
    min-width: unset;
    transform: unset;
  }
}

</style>
