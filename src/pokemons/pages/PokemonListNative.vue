<template>
  <h1 v-if="store.pokemons.isLoading">Loading</h1>
  <div v-else-if="store.pokemons.hasError">{{ store.pokemons.errorMessage }}</div>
  <div v-else>
    <h1>Pokemon List Native - ({{ store.pokemons.count }})</h1>
    <h3 v-if="store.pokemons.isLoading">Cargando</h3>
    <PokemonCardList :pokemons="store.pokemons.list ?? []" />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import store from '@/store/store'
import PokemonCardList from '../components/PokemonCardList.vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

useQuery({
  queryKey: ['pokemons'],
  queryFn: () => getPokemons(),
  select: (data: Pokemon[]) => {
    store.loadedPokemons(data)
  }
})
</script>

<style></style>
