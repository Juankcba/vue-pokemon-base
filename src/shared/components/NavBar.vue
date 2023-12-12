<template>
  <nav>
    <template v-if="!$props.isSecondary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
      <span>{{ $props.title }}</span>
    </template>

    <RouterLink v-for="link of links" :key="link.path" :to="link.path">{{ link.title }}</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes'
import { computed, toRef } from 'vue'
interface Props {
  title?: string
  links: RouterLink[]
  isSecondary?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: 'CompoApp',
  isSecondary: false
})
//const links = toRef(props, 'links');
const links = computed(() => props.links.filter((link) => link.visible))
</script>

<style>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
