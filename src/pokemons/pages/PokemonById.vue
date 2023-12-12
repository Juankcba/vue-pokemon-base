<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ error }}</h1>
  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    <div class="character-container">
      <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePokemon } from '../composables/usePokemon'
import { useQueryClient } from '@tanstack/vue-query'

const route = useRoute()
const queryClient = useQueryClient()
const { id }  = route.params
const { isLoading, isError, pokemon, error } = usePokemon(id.toString())
// sirve para invalidar el query y de esta forma vuelva a hacer el fetch
/* const invalidateQueries = () => {
  queryClient.invalidateQueries(['pokemon', id ])
} */
</script>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
}
.img {
  width: 150px;
  border-radius: 5px;
}
</style>
