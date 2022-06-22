import { Component, OnInit } from '@angular/core';
import { Pokemons } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = Pokemons;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemons);
  }

  selectPokemon(pokdemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemons.find(pokemon => pokemon.id == +pokdemonId)
    if(pokemon){
      console.log(`Vous avez cliqué sur le pokémoin ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log("Vous avez demandé un pokémon qui n'existe pas.")
      this.pokemonSelected = pokemon;
    }
  }
}
