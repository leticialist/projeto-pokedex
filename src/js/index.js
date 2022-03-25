const listaPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelected = pokemon.attributes.id.value

        const idCartaoPokemonAbrir = 'cartao-' + idPokemonSelected

        const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir)
        cartaoPokemonAbrir.classList.add('aberto')

        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')

        const pokemonSelectedListagem = document.getElementById(idPokemonSelected)
        pokemonSelectedListagem.classList.add('ativo')
    })
})
