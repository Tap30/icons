---
outline: 'deep'
aside: false
---

<script setup>
import Icons from '../components/Icons.vue';
import { useData } from 'vitepress';

const { page } = useData();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

</script>

## {{capitalizeFirstLetter(page?.params?.category)}} Icons

<Icons />

<!-- @content -->
