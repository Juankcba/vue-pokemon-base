import pokemonApi from '../api/pokemonApi'
import type { PokemonResponse, Pokemon } from '../interfaces'

export const getPokemon = async (id: string): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${id}`)

  return {
    id: data.id,
    name: data.name,
    frontSprite: data.sprites.front_default
  }
}
