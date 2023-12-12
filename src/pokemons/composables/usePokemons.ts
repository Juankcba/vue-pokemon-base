import { computed, watchEffect } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'

import {} from '@tanstack/vue-query'
import { initalPokemons } from '../data/initial-pokemons'
//el scope de la data esta de manera global, por lo tanto es como que tiene memoria.
export const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(),
    initialData: initalPokemons
  })

  watchEffect(() => {
    //console.log("isError", isError.value)
  })
  return {
    pokemons,
    isLoading,
    isError,
    error,
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
