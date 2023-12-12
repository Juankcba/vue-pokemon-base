import { computed, onMounted, ref } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

//el scope de la data esta de manera global, por lo tanto es como que tiene memoria.
const isLoading = ref(true)
const pokemons = ref<Pokemon[]>([])
export const usePokemons = () => {
  /*  if (pokemons.value.length === 0) {
         getPokemons().then(data => {
             pokemons.value = data;
             isLoading.value = false;
         })
     } */
  onMounted(async () => {
    const data = await getPokemons()
    pokemons.value = data
    isLoading.value = false
  })

  return {
    pokemons,
    isLoading,
    count: computed(() => pokemons.value.length)
  }
}
