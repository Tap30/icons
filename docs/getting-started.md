---
outline: deep
---

<script>
import config from '../dist/config';
import '../src/lit/icons';
import '../src/lit/icon';

const iconCount = Object.keys(config).length
</script>

<style>
.preview {
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 12px;
  padding: 12px;
  background: var(--vp-code-block-bg);
  border-radius: 8px;
  margin-bottom: 24px;
  margin-top: -10px;
}
</style>

# Getting Started

## Installation

### Web

Implementation of the Tapsi icon library for web applications.

::: code-group
```bash [npm]
npm install @tapsi-oss/icons/web-components
```

```bash [yarn]
yarn add @tapsi-oss/icons/web-components
```

```bash [pnpm]
pnpm install @tapsi-oss/icons/web-components
```
:::

### React

Implementation of the Tapsi icon library in React.

::: code-group
```bash [npm]
npm install @tapsi-oss/icons/react
```

```bash [yarn]
yarn add @tapsi-oss/icons/react
```

```bash [pnpm]
pnpm install @tapsi-oss/icons/react
```
:::

## Usage

First you need to import the library in the file you want to use:

::: code-group
```js [Web components]
import '@tapsi-oss/icons/web-components'
```

```js [React]
import Map from '@tapsi-oss/icons/react/Map'
```
:::

Then you need use your component in your code as you need:

::: code-group
```js [Web components]
<button onclick={handleClick}>
  <tap-icon-map width="16" height="16" color="#ff7733"></tap-icon-map>  // [!code focus]
</button>
```

```js [React]
<Button onClick={handleClick}>
  <Map width={16} height={16} color="#ff7733" />  // [!code focus]
</Button>
```
:::

## Customization

You can change the appearance of icons based on your app theme.

### Colors

You can change the color of your icons using the `color` property. The value of this field can have 4 variants:

#### CSS Color Names

::: code-group
```js [Web components]
<tap-icon-map color="red"></tap-icon-map> 
<tap-icon-map color="orangered"></tap-icon-map> 
<tap-icon-map color="yellow"></tap-icon-map> 
```

```js [React]
<Map color="red" />
<Map color="orangered" />
<Map color="yellow" />
```
:::

<div class="preview">
  <tap-icon-map color="red"></tap-icon-map>
  <tap-icon-map color="orangered"></tap-icon-map>
  <tap-icon-map color="yellow"></tap-icon-map>
</div>

#### RGB Colors

::: code-group
```js [Web components]
<tap-icon-map color="rgb(255,0,0)"></tap-icon-map> 
<tap-icon-map color="rgb(99,99,99)"></tap-icon-map> 
```

```js [React]
<Map color="rgb(255,0,0)" />
<Map color="rgb(99,99,99)" />
```
:::

<div class="preview">
<tap-icon-map color="rgb(255,0,0)"></tap-icon-map>
<tap-icon-map color="rgb(99,99,99)"></tap-icon-map>
</div>

#### Hexadecimal Colors

::: code-group
```js [Web components]
<tap-icon-map color="#ff5722"></tap-icon-map> 
<tap-icon-map color="#f00"></tap-icon-map>
// also you can include transparency
<tap-icon-map color="#ff06"></tap-icon-map> 
<tap-icon-map color="#e8e8e8ee"></tap-icon-map> 
```

```js [React]
<Map color="#ff5722" />
<Map color="#f00" />
// also you can include transparency
<Map color="#ff06" />
<Map color="#e8e8e8ee" />
```
:::

<div class="preview">
<tap-icon-map color="#ff5722"></tap-icon-map>
<tap-icon-map color="#f00"></tap-icon-map>
<tap-icon-map color="#ff06"></tap-icon-map>
<tap-icon-map color="#e8e8e8ee"></tap-icon-map>
</div>

#### CSS Tokens

::: code-group
```js [Web components]
<tap-icon-map color="var(--a-color-token)"></tap-icon-map> 
<tap-icon-map color="var(--another-color-token)"></tap-icon-map> 
```

```js [React]
<Map color="var(--a-color-token)" />
<Map color="var(--another-color-token)" />
```
:::

<div class="preview">
<tap-icon-map color="var(--vp-c-brand-1)"></tap-icon-map>
<tap-icon-map color="var(--vp-c-brand-2)"></tap-icon-map>
</div>

### Size

Each icon has a `width` and `height` properties that is a number that represents the ratio of the icon in pixels. the 
default value of this properties is `24`.

::: code-group
```js [Web components]
<tap-icon-map height="28" width="28"></tap-icon-map> // 28px * 28px
<tap-icon-map></tap-icon-map> // 24px * 24px
<tap-icon-map height="20" width="20"></tap-icon-map> // 20px * 20px
```

```js [React]
<Map height={28} width={28} /> // 28px * 28px
<Map /> // 24px * 24px
<Map height={20} width={20} /> // 20px * 20px
```
:::
<div class="preview">
<tap-icon-map height="28" width="28"></tap-icon-map>
<tap-icon-map></tap-icon-map>
<tap-icon-map height="20" width="20"></tap-icon-map>
</div>

### Defining Custom Icon

All the icons in this icon set extents the `TapIcon` class. You can define your custom icons using this class.

::: code-group
```js [Web components]
<tap-icon width="50" height="50">
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M370.0918,52.146c-5.1312-5.1035-13.45-4.73-18.5638.3856-22.8748,22.8576-42.4939,50.3563-57.9047,81.18a262.8544,262.8544,0,0,0-75.3363,0,312.9512,312.9512,0,0,0-57.8235-81.1607c-5.11-5.1238-13.4326-5.5051-18.5681-.4027C83.3926,110.2814,46,198.3378,46,297.2485c0,91.875,93.9771,166.25,210,166.25,115.9375,0,210-74.375,210-166.25C466,198.3368,428.5262,110.2781,370.0918,52.146ZM146.625,330.8493c-24.3274-4.7254-44.9762-22.3129-56.875-46.7258,11.8988-24.4128,32.5476-42,56.875-46.7247Zm26.25,0V237.3988c24.2377,4.7243,44.9762,22.3119,56.875,46.7247C217.8512,308.5364,197.1127,326.1239,172.875,330.8493Zm166.25,0c-24.3274-4.7254-44.9762-22.3129-56.875-46.7258,11.8988-24.4128,32.5476-42,56.875-46.7247Zm26.25,0V237.3988c24.2377,4.7243,44.9762,22.3119,56.875,46.7247C410.3512,308.5364,389.6127,326.1239,365.375,330.8493Z"
      fill="currentColor"
    />
  </svg>
</tap-icon>
```

```js [React]
<Icon width={50} height={50}>
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M370.0918,52.146c-5.1312-5.1035-13.45-4.73-18.5638.3856-22.8748,22.8576-42.4939,50.3563-57.9047,81.18a262.8544,262.8544,0,0,0-75.3363,0,312.9512,312.9512,0,0,0-57.8235-81.1607c-5.11-5.1238-13.4326-5.5051-18.5681-.4027C83.3926,110.2814,46,198.3378,46,297.2485c0,91.875,93.9771,166.25,210,166.25,115.9375,0,210-74.375,210-166.25C466,198.3368,428.5262,110.2781,370.0918,52.146ZM146.625,330.8493c-24.3274-4.7254-44.9762-22.3129-56.875-46.7258,11.8988-24.4128,32.5476-42,56.875-46.7247Zm26.25,0V237.3988c24.2377,4.7243,44.9762,22.3119,56.875,46.7247C217.8512,308.5364,197.1127,326.1239,172.875,330.8493Zm166.25,0c-24.3274-4.7254-44.9762-22.3129-56.875-46.7258,11.8988-24.4128,32.5476-42,56.875-46.7247Zm26.25,0V237.3988c24.2377,4.7243,44.9762,22.3119,56.875,46.7247C410.3512,308.5364,389.6127,326.1239,365.375,330.8493Z"
      fill="currentColor"
    />
  </svg>
</Icon>
```
:::
<div class="preview">
<tap-icon width="50" height="50">
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M370.0918,52.146c-5.1312-5.1035-13.45-4.73-18.5638.3856-22.8748,22.8576-42.4939,50.3563-57.9047,81.18a262.8544,262.8544,0,0,0-75.3363,0,312.9512,312.9512,0,0,0-57.8235-81.1607c-5.11-5.1238-13.4326-5.5051-18.5681-.4027C83.3926,110.2814,46,198.3378,46,297.2485c0,91.875,93.9771,166.25,210,166.25,115.9375,0,210-74.375,210-166.25C466,198.3368,428.5262,110.2781,370.0918,52.146ZM146.625,330.8493c-24.3274-4.7254-44.9762-22.3129-56.875-46.7258,11.8988-24.4128,32.5476-42,56.875-46.7247Zm26.25,0V237.3988c24.2377,4.7243,44.9762,22.3119,56.875,46.7247C217.8512,308.5364,197.1127,326.1239,172.875,330.8493Zm166.25,0c-24.3274-4.7254-44.9762-22.3129-56.875-46.7258,11.8988-24.4128,32.5476-42,56.875-46.7247Zm26.25,0V237.3988c24.2377,4.7243,44.9762,22.3119,56.875,46.7247C410.3512,308.5364,389.6127,326.1239,365.375,330.8493Z"
      fill="currentColor"
    />
  </svg>
</tap-icon>
</div>




