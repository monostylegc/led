<template>
  <router-view />
</template>
<script setup>
import { provide } from 'vue';
import store from './store/store';

provide('store', store)
</script>
