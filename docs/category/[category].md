---
outline: 'deep'
---

<script setup>
import Icons from '../components/Icons.vue';
import { useData } from 'vitepress';

const { page } = useData();

</script>

<pre>{{page}}</pre>

<Icons  />

<!-- @content -->
